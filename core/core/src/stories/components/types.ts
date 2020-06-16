import { ComponentControlBase } from '../../controls';

export type AsReactComponent<T extends ComponentControlBase<any>> = (
  _props: T,
) => null;
