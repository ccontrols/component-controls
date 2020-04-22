import * as merge from 'deepmerge';
import { instrument } from './instrument';
import { reactProps } from './reactProps';
import { RuleType, WebpackRules, WebpackRule } from './types';
export * from './types';

export const rulesFactory: {
  [key: string]: WebpackRules;
} = {
  'react-props': reactProps,
  instrument,
};

const ruleMerge = (dest: WebpackRules, src: WebpackRules) => {
  const srcItems = src.reduce((acc: WebpackRules, item: WebpackRule) => {
    const destItem = dest.find(d => d.test === item.test);
    if (destItem) {
      return [...acc, merge(destItem, item)];
    }
    return [...acc, item];
  }, []);
  return srcItems;
};

/**
 * expands the rules into webpack rules
 *
 */
export const getRules = (rules: RuleType[]): WebpackRules => {
  const result: WebpackRules = rules.reduce(
    (acc: WebpackRules, rule: RuleType) => {
      debugger;
      if (typeof rule === 'string') {
        return [...acc, ...(rulesFactory[rule] || [])];
      }
      if (rule && rule.rules) {
        const r: WebpackRules = getRules(rule.rules);
        const o: WebpackRules = rule.options as WebpackRules;
        return [
          ...acc,
          ...merge<WebpackRules>(r, o, {
            arrayMerge: ruleMerge,
          }),
        ];
      }
      return [...acc, rule as WebpackRule];
    },
    [],
  );
  debugger;
  return result;
};
