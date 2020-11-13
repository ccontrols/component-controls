import { TraverseOptions } from '@babel/traverse';
const babel = require('@babel/core');
import { CodeLocation, getASTSource } from '@component-controls/core';
import { extractSource } from '../misc/source-extract';
import { collectAttributes } from './extract-attributes';

export const transformMDXAttributes = (source: string): TraverseOptions => {
  return {
    JSXElement: (path: any) => {
      const node = path.node.openingElement;
      switch (node.name.name) {
        case 'Playground':
          const playground = collectAttributes(node);
          // extract playground source of not already a prop
          if (!playground.source) {
            const hasStory = path.node.children.some(
              (el: any) =>
                el.type === 'JSXElement' &&
                el.openingElement?.name?.name === 'Story',
            );
            if (!hasStory) {
              const loc: CodeLocation = path.node.children.length
                ? {
                    start: path.node.children[0].loc.start,
                    end:
                      path.node.children[path.node.children.length - 1].loc.end,
                  }
                : path.node.loc;
              const rawSource = getASTSource(source, loc);
              const prettiedSource = extractSource(rawSource);
              node.attributes.push({
                type: 'JSXAttribute',
                name: {
                  type: 'JSXIdentifier',
                  name: 'source',
                },
                value: {
                  type: 'JSXExpressionContainer',
                  expression: {
                    type: 'TemplateLiteral',
                    expressions: [],
                    quasis: [
                      {
                        type: 'TemplateElement',
                        value: {
                          raw: prettiedSource,
                          cooked: prettiedSource,
                        },
                        tail: true,
                      },
                    ],
                  },
                },
              });
            }
          }
          break;
      }
    },
    JSXAttribute: (path: any) => {
      const node = path.node;
      switch (node.name?.name) {
        case 'mdxType': {
          path.remove();
          break;
        }
        case 'of': {
          if (node.value?.type === 'JSXExpressionContainer') {
            const component = node.value;
            const name = component.expression.name;
            path.replaceWith({
              ...node,
              value: babel.types.stringLiteral(name),
            });
          }
          break;
        }
      }
    },
    ExportDefaultDeclaration: (path: any) => {
      path.replaceWith(path.node.declaration);
    },
  };
};
