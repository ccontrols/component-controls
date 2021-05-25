import { IColumnProps } from './class-interface-props';

import { IColumnProps as CProps } from './class-interface-props';
export { IColumnProps as ColumnProps };

export { CProps };

export const Column = (props: IColumnProps): string | undefined =>
  props.stringProp;

export const ColumnP = (props: CProps): string | undefined => props.stringProp;
