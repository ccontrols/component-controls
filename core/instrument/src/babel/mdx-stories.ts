import {
  StoriesStore,
  Story,
  StoriesKind,
  StoryParameters,
} from '@component-controls/specification';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './get-function-parameters';
import { extractAttributes } from './extract-attributes';
import { sourceLocation } from './utils';
import { componentsFromParams } from '../misc/componentAttributes';

export const extractMDXStories = (ast: File): StoriesStore => {
  let components: { [key: string]: string | undefined } = {};
  const store: StoriesStore = {
    stories: {},
    kinds: {},
    components: {},
  };
  traverse(ast, {
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
        const attributes: StoryParameters = node.attributes.reduce(
          (acc: StoryParameters, attribute: any) => {
            if (attribute.value.type === 'StringLiteral') {
              return { ...acc, [attribute.name?.name]: attribute.value?.value };
            } else if (attribute.value.type === 'JSXExpressionContainer') {
              return {
                ...acc,
                [attribute.name?.name]: extractAttributes(
                  attribute.value.expression,
                ),
              };
            }
            return acc;
          },
          {},
        );
        const attrComponents = componentsFromParams(attributes);
        components = attrComponents.reduce(
          (acc, componentName) => ({ ...acc, [componentName]: undefined }),
          components,
        );
        const component =
          attrComponents.length > 0 ? attrComponents[0] : undefined;
        switch (node.name.name) {
          case 'Story': {
            const { name } = attributes;
            if (typeof name === 'string') {
              const story: Story = {
                ...attributes,
                name,
                loc: sourceLocation(path.node.loc),
              };
              if (component) {
                story.component = component;
              }
              traverse(
                path.node,
                extractFunctionParameters(story),
                path.scope,
                path,
              );
              store.stories[name] = story;
            }
            break;
          }
          case 'Meta': {
            const { title } = attributes;
            if (title) {
              const kind: StoriesKind = {
                components: {},
                ...attributes,
                title,
              };
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
  }
  return store;
};
