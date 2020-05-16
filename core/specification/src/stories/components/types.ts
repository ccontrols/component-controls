import { ComponentControlBase } from '@component-controls/specification';

export type AsReactComponent<T extends ComponentControlBase<any>> = (
  _props: T,
) => null;
