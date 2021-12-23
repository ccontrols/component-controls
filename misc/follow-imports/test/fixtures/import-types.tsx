import { ColumnProps } from './class-interface-props';

import { ColumnProps as CProps } from './class-interface-props';
export { ColumnProps };

export { CProps };

export const Column = (props: ColumnProps): string | undefined =>
  props.stringProp;

export const ColumnP = (props: CProps): string | undefined => props.stringProp;
