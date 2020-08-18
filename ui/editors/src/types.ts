import { FC } from 'react';
export interface PropertyControlProps {
  /**
   * name of the property control.
   */
  name: string;
}

/**
 * Property editor interface, needs to be implemented by any custom controls editor.
 */
export type PropertyEditor<
  T extends PropertyControlProps = PropertyControlProps
> = FC<T>;
