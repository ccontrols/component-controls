import deepmerge from 'deepmerge';
import * as ts from 'typescript';
import { PropType } from '../types';
import { ISymbolParser } from '../ts-utils';
import { parseJSDocTags } from './parseJSDocTags';

export const mergeJSDoc = (
  parser: ISymbolParser,
  prop: PropType = {},
  node?: ts.Node,
): PropType | null => {
  const parsed = parseJSDocTags(parser, node);
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
  return prop;
};
