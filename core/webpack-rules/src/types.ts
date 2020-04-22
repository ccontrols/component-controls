import { RuleSetRule } from 'webpack';

export type WebpackRule = RuleSetRule;
export type WebpackRules = WebpackRule[];

export type RuleType =
  | WebpackRule
  | string
  | {
      rules: RuleTypes;
      options: WebpackRules;
    };

export type RuleTypes = RuleType[];
