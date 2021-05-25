const ColumnCJS = require('./class-interface-props-cjs');
const { Test } = require('./class-interface-props-cjs');
import { ColumnProps } from './class-interface-props-cjs';

import { ColumnProps as CProps } from './class-interface-props-cjs';

export { ColumnProps };

export { CProps };

export const Column = (props: ColumnProps): string | undefined =>
  props.stringProp;

export const ColumnP = (props: ColumnProps): string | undefined =>
  props.stringProp;

export { ColumnCJS };
