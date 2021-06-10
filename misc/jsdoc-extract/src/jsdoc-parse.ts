import { Node } from '@babel/types';
import { deepmerge } from '@component-controls/core';
import { PropType } from './utils';
import { jsdocCommentToMember } from './jsdoc/jsdocCommentToMember';

export const getNodeComments = (node: Node): string | undefined =>
  node.leadingComments
    ? node.leadingComments
        .filter(comment => comment.type === 'CommentBlock')
        .map(comment => comment.value)
        .join('/n')
    : undefined;
export const mergeJSDocComments = (
  prop: PropType,
  comments?: string,
): PropType => {
  if (comments) {
    const parsed = jsdocCommentToMember(comments);
    if (parsed) {
      return deepmerge<PropType>(parsed, prop || {}, {
        arrayMerge: (dest: any[], src: any[]) => {
          const result =
            src.length > 0
              ? src.map((s, idx) => {
                  const existingIdx =
                    dest.length === src.length
                      ? idx
                      : dest.findIndex(
                          p => p.displayName === (s as PropType).displayName,
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
  return prop;
};
