import { Node } from '@babel/types';
import { deepmerge } from '@component-controls/core';
import { JSDocType } from './utils';
import { jsdocCommentToMember } from './jsdoc-md/jsdocCommentToMember';

export const mergeJSDocComments = (node: Node, jsdoc: JSDocType): JSDocType => {
  const comments = node.leadingComments
    ? node.leadingComments
        .filter(comment => comment.type === 'CommentBlock')
        .map(comment => comment.value)
        .join('/n')
    : undefined;
  if (comments) {
    const parsed = jsdocCommentToMember(comments);
    if (parsed) {
      return deepmerge<JSDocType>(parsed, jsdoc || {}, {
        arrayMerge: (dest: any[], src: any[]) => {
          const result =
            src.length > 0
              ? src.map(s => {
                  const existingIdx = dest.findIndex(
                    p => p.name === (s as JSDocType).name,
                  );
                  if (existingIdx >= 0) {
                    return {
                      ...dest[existingIdx],
                      ...s,
                    };
                  }
                  return s;
                })
              : dest;
          return result;
        },
      });
    }
  }
  return jsdoc;
};
