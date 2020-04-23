import { RuleSetRule } from 'webpack';

export type WebpackRule = RuleSetRule;
export type WebpackRules = WebpackRule[];

export interface RuleOptions {
  name: string;
  rules: WebpackRules;
}
export type RuleType = WebpackRule | string | RuleOptions;

export type RuleTypes = RuleType[];
