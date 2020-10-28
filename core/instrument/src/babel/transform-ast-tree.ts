import { TraverseOptions } from '@babel/traverse';

const babel = require('@babel/core');

export const transformTree = (): TraverseOptions => {
  return {
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
