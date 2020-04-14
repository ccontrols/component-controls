import generate from '@babel/generator';
import {
  Story,
  StoriesKind,
  StoryParameters,
} from '@component-controls/specification';
import camelCase from 'camelcase';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './extract-function-parameters';
import { extractAttributes } from './extract-attributes';
import { sourceLocation } from '../misc/source-location';
import { ParseStorieReturnType, InstrumentOptions, ExportType } from '../types';

import { componentsFromParams } from '../misc/component-attributes';

export const extractMDXStories = (
  ast: File,
  _options: Required<InstrumentOptions>,
): ParseStorieReturnType => {
  const collectAttributes = (
    node: any,
    exports?: ExportType,
  ): StoryParameters => {
    return node.attributes.reduce((acc: StoryParameters, attribute: any) => {
      if (exports) {
        const { code } = generate(
          attribute.value.expression || attribute.value,
          {
            retainFunctionParens: true,
            retainLines: true,
          },
        );
        const codeTrim = code.trim();
        if (!exports.story) {
          exports.story = {};
        }
        exports.story[attribute.name?.name] = codeTrim;
      }

      if (attribute.value.type === 'StringLiteral') {
        return { ...acc, [attribute.name?.name]: attribute.value?.value };
      } else if (attribute.value.type === 'JSXExpressionContainer') {
        return {
          ...acc,
          [attribute.name?.name]: extractAttributes(attribute.value.expression),
        };
      }
      return acc;
    }, {});
  };

  let components: { [key: string]: string | undefined } = {};
  const collectComponent = (attributes: StoryParameters) => {
    const attrComponents = componentsFromParams(attributes);
    components = attrComponents.reduce(
      (acc, componentName) => ({ ...acc, [componentName]: undefined }),
      components,
    );
    return attrComponents.length > 0 ? attrComponents[0] : undefined;
  };

  const store: Required<Pick<
    ParseStorieReturnType,
    'stories' | 'kinds' | 'components' | 'exports'
  >> = {
    stories: {},
    kinds: {},
    components: {},
    exports: {},
  };
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
          'Playground',
          'ComponentSource',
        ].indexOf(node.name.name) > -1
      ) {
        switch (node.name.name) {
          case 'Story': {
            const exports = transformMDX ? {} : undefined;
            const attributes = collectAttributes(node, exports);
            const { name } = attributes;
            if (typeof name === 'string') {
              if (store.stories[name]) {
                throw new Error(`Dusplaicated story name ${name}`);
              }
              const id = camelCase(name);
              const story: Story = {
                ...attributes,
                name,
                id,
                loc: sourceLocation(path.node.loc),
              };
              const component = collectComponent(attributes);
              if (component) {
                story.component = component;
              }
              traverse(
                path.node,
                extractFunctionParameters(story, exports),
                path.scope,
                path,
              );
              store.stories[id] = story;
              if (exports) {
                store.exports[id] = exports;
              }
            }
            break;
          }
          case 'Meta': {
            const exports = transformMDX ? {} : undefined;
            const attributes = collectAttributes(node, exports);
            const { title } = attributes;
            if (title) {
              const kind: StoriesKind = {
                components: {},
                ...attributes,
                title,
              };
              if (exports) {
                store.exports.default = exports;
              }
              const component = collectComponent(attributes);
              if (component !== undefined) {
                kind.component = component;
              }
              store.kinds[title] = kind;
            }
            break;
          }
          default:
            break;
        }
        // console.log(node.name.name, attributes);
      }
    },
  });

  if (Object.keys(store.kinds).length === 1) {
    //@ts-ignore
    store.kinds[Object.keys(store.kinds)[0]].components = components;
  } else {
    throw new Error(`MDX stories should have one <Meta /> component`);
  }
  return store;
};
