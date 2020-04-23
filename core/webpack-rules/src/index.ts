const merge = require('deepmerge');
import { instrument } from './instrument';
import { reactDocgen } from './react-docgen';
import { reactDocgenTypescript } from './react-docgen-typescript';
import { RuleType, WebpackRules, WebpackRule, RuleOptions } from './types';
export * from './types';

export const rulesFactory: {
  [key: string]: WebpackRules;
} = {
  'react-docgen-typescript': reactDocgenTypescript,
  'react-docgen': reactDocgen,
  instrument,
};

const ruleMerge = (dest: WebpackRules, src: WebpackRules) => {
  const srcItems = src.reduce((acc: WebpackRules, item: WebpackRule) => {
    const destItem = dest.find(
      d => d.test === item.test || d.loader === item.loader,
    );
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
      if (typeof rule === 'string') {
        return [...acc, ...(rulesFactory[rule] || [])];
      }
      if (rule && (rule as RuleOptions).name) {
        const name = (rule as RuleOptions).name;
        if (rulesFactory[name]) {
          const r: WebpackRules = getRules(rulesFactory[name]);
          const o: WebpackRules = rule.rules as WebpackRules;
          const merged: WebpackRules = merge(r, o, {
            arrayMerge: ruleMerge,
          });
          return [...acc, ...merged];
        }
      }
      return [...acc, rule as WebpackRule];
    },
    [],
  );
  return result;
};
