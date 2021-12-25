import { FC, AriaAttributes } from 'react';
export type PropertyControlProps = {
  /**
   * name of the property control.
   */
  name: string;
} & AriaAttributes;

/**
 * Property editor interface, needs to be implemented by any custom controls editor.
 */
export type PropertyEditor<
  T extends PropertyControlProps = PropertyControlProps,
> = FC<T>;
