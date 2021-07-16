import deepmerge from 'deepmerge';
import * as ts from 'typescript';
import { PropType } from '../types';
import { ISymbolParser } from '../ts-utils';
import { parseJSDocTags } from './parseJSDocTags';

const mergeProps = (prop: PropType, parsed: PropType) =>
  deepmerge<PropType>(prop, parsed, {
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
                const merged = mergeProps(s, src[existingIdx]);
                Object.assign(s, merged);
              }
              return s;
            })
          : dest;
      return result;
    },
  });
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
    return mergeProps(prop, parsed);
  }
  return prop;
};
