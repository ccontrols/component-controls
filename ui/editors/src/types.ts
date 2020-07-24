import { FC } from 'react';
import { RecoilControlSelector } from './state';
export interface PropertyControlProps {
  /**
   * name of the property control.
   */
  name: string;

  /**
   * recoil state selector
   */
  selector: RecoilControlSelector;
}

/**
 * Property editor interface, needs to be implemented by any custom controls editor.
 */
export type PropertyEditor<
  T extends PropertyControlProps = PropertyControlProps
> = FC<T>;
