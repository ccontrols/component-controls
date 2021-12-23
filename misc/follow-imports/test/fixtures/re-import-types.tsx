import { ColumnProps } from './import-types';

import { CProps } from './import-types';

import * as All from './import-types';

export * from './import-types';

export const Column = (props: ColumnProps): string | undefined =>
  props.stringProp;

export const ColumnP = (props: CProps): string | undefined => props.stringProp;

export const ColumnAll = (props: All.CProps): string | undefined =>
  props.stringProp;
