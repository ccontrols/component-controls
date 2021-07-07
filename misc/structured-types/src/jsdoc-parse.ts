import { Node } from '@babel/types';
import deepmerge from 'deepmerge';
import { PropType } from './types';
import { jsdocCommentToMember } from './jsdoc/jsdocCommentToMember';

export const getNodeComments = (node: Node): string | undefined =>
  node.leadingComments
    ? node.leadingComments
        .filter(comment => comment.type === 'CommentBlock')
        .map(comment => comment.value)
        .join('/n')
    : undefined;
export const mergeJSDocComments = (
  prop: PropType = {},
  comments?: string,
): PropType | null => {
  if (comments) {
    const parsed = jsdocCommentToMember(comments);
    if (parsed === null) {
      return null;
    }
    if (parsed) {
      const merged = deepmerge<PropType>(prop, parsed, {
        clone: false,
        arrayMerge: (dest: any[], src: any[]) => {
          const result =
            dest.length > 0
              ? dest.map((s, idx) => {
                  const existingIdx =
                    src.length === dest.length
                      ? idx
                      : src.findIndex(
                          p => p.displayName === (s as PropType).displayName,
                        );
                  if (existingIdx >= 0) {
                    Object.assign(s, {
                      ...src[existingIdx],
                      ...s,
                    });
                  }
                  return s;
                })
              : dest;
          return result;
        },
      });
      return merged;
    }
  }
  return prop;
};
