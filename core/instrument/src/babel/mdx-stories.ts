import {
  Story,
  Document,
  CodeLocation,
  getASTSource,
} from '@component-controls/core';
import camelCase from 'camelcase';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import {
  extractFunctionParameters,
  adjustArgumentsLocation,
} from './extract-function-parameters';
import { followStoryImport } from './follow-imports';
import { extractAttributes } from './extract-attributes';
import { sourceLocation } from '../misc/source-location';
import { ParseStorieReturnType, InstrumentOptions } from '../types';

import { componentsFromParams } from '../misc/component-attributes';

type PartialStore = Required<
  Pick<
    ParseStorieReturnType,
    'stories' | 'doc' | 'components' | 'exports' | 'packages'
  >
>;

type SourceFile = {
  source: string;
  filePath: string;
};
export const extractMDXStories: (
  props: any,
) => (
  ast: File,
  options: Required<InstrumentOptions>,
  source: SourceFile,
) => PartialStore | undefined = (props: any) => (
  ast: File,
  _options: Required<InstrumentOptions>,
  { source, filePath }: SourceFile,
): PartialStore | undefined => {
  const collectAttributes = (node: any): Record<string, string> => {
    return node.attributes.reduce(
      (acc: Record<string, unknown>, attribute: any) => {
        if (attribute.value.type === 'StringLiteral') {
          return {
            ...acc,
            [attribute.name.name]: attribute.value.value,
          };
        } else if (attribute.value.type === 'JSXExpressionContainer') {
          return {
            ...acc,
            [attribute.name.name]: extractAttributes(
              attribute.value.expression,
            ),
          };
        }
        return acc;
      },
      {},
    );
  };

  let components: { [key: string]: string | undefined } = {};
  const collectComponent = (attributes: any) => {
    const attrComponents = componentsFromParams(attributes);
    components = attrComponents.reduce((acc, componentName) => {
      if (componentName === '.') {
        const newComps: Record<string, undefined> = {};
        if (store.doc?.component) {
          newComps[store.doc.component as string] = undefined;
        }
        if (store.doc && typeof store.doc.subcomponents === 'object') {
          Object.keys(store.doc.subcomponents).forEach((name: any) => {
            const sub = store.doc?.subcomponents?.[name];
            newComps[sub as string] = undefined;
          });
        }
        return {
          ...acc,
          ...newComps,
        };
      }
      return {
        ...acc,
        [componentName]: undefined,
      };
    }, components);
    return attrComponents.length > 0 ? attrComponents[0] : undefined;
  };
  const { title, name, ...rest } = props;
  const doc = props ? { ...rest, title: title || name } : undefined;
  const store: PartialStore = {
    stories: {},
    doc,
    components: {},
    exports: {},
    packages: {},
  };

  if (props) {
    store.exports.default = {
      story: doc,
    };
  }
  const { transformMDX } = _options.mdx;
  traverse(ast as any, {
    JSXElement: (path: any) => {
      const node = path.node.openingElement;
      if (
        [
          'Description',
          'Meta',
          'Story',
          'Preview',
          'PropsTable',
          'Props',
          'Playground',
          'ComponentSource',
        ].indexOf(node.name.name) > -1
      ) {
        switch (node.name.name) {
          case 'Story': {
            const attributes = collectAttributes(node);
            const exports = transformMDX ? { story: attributes } : undefined;
            const { name } = attributes;
            if (typeof name === 'string') {
              if (store.stories[name]) {
                throw new Error(`Duplicated story name ${name}`);
              }
              const id = camelCase(name);
              const expression =
                Array.isArray(path.node.children) &&
                path.node.children.find(
                  (child: any) => child.type === 'JSXExpressionContainer',
                );
              let story: Story = {
                ...attributes,
                name,
                id,
              };
              if (
                expression &&
                (expression.expression.type === 'CallExpression' ||
                  (expression.expression.type === 'ArrowFunctionExpression' &&
                    expression.expression.body &&
                    expression.expression.body.callee))
              ) {
                const importedName =
                  expression.expression.type === 'CallExpression'
                    ? expression.expression.callee.name
                    : expression.expression.body.callee.name;
                const followStory = followStoryImport(
                  name,
                  importedName,
                  filePath,
                  source,
                  _options,
                  ast,
                  exports,
                );
                story = { ...followStory, ...story };
              } else {
                const loc: CodeLocation = path.node.children.length
                  ? expression
                    ? expression.expression.loc
                    : {
                        start: path.node.children[0].loc.start,
                        end:
                          path.node.children[path.node.children.length - 1].loc
                            .end,
                      }
                  : path.node.loc;
                const component = collectComponent(attributes);
                if (component !== undefined) {
                  story.component = component;
                }
                traverse(
                  expression || path.node,
                  extractFunctionParameters(story, exports),
                  path.scope,
                  path,
                );
                // adjust for source code wraping issues
                const storySource = getASTSource(source, loc);
                const storyLines = storySource?.split('\n');
                //remove as many spaces as there are in the line with the smallest amount of white spaces (but still some)
                const whiteSpaces = storyLines?.reduce((spaces, line) => {
                  if (line.substring(0, 1) === ' ' && line.trim() !== '') {
                    const startSpaces = line.search(/\S/);
                    if (startSpaces && (spaces === 0 || startSpaces < spaces)) {
                      return startSpaces;
                    }
                  }
                  return spaces;
                }, 0);
                story.loc = sourceLocation(loc);
                story.source =
                  storyLines && whiteSpaces
                    ? storyLines
                        .map((line, lineIndex) => {
                          if (line.search(/\S/) >= whiteSpaces) {
                            //adjust location of arguments usage
                            if (story.arguments) {
                              story.arguments = adjustArgumentsLocation(
                                story.arguments,
                                lineIndex,
                                whiteSpaces,
                              );
                            }
                            return line.substr(whiteSpaces);
                          }
                          return line;
                        })
                        .join('\n')
                        .trim()
                    : storySource;
              }

              store.stories[id] = story;
              if (exports) {
                store.exports[id] = exports;
              }
            }
            break;
          }
          case 'Meta': {
            const attributes = collectAttributes(node);
            const exports = transformMDX ? { story: attributes } : undefined;
            const { title: docTitle, name } = attributes || {};
            const title = docTitle || name;
            if (title) {
              const doc: Document = {
                componentsLookup: {},
                ...attributes,
                title,
              };
              if (exports) {
                store.exports.default = exports;
              }
              const component = collectComponent(attributes);
              if (component !== undefined) {
                doc.component = component;
              }
              store.doc = doc;
            }
            break;
          }
          default:
            const attributes = collectAttributes(node);
            collectComponent(attributes);
            break;
        }
        // console.log(node.name.name, attributes);
      }
    },
  });
  if (store.doc && store.doc.title) {
    store.doc.componentsLookup = components as Document['componentsLookup'];
    return store;
  } else {
    return undefined;
  }
};
