import { FC } from 'react';
import { ComponentControl } from '@component-controls/specification';

export type PropertyOnClick = (prop: ComponentControl) => any;
export interface PropertyControlProps {
  /**
   * the control type.
   */
  prop: ComponentControl;

  /**
   * name of the control.
   */
  name: string;

  /**
   *  onChange event called when the propery is changing
   */
  onChange: (name: string, prop: any) => void;

  /**
   * onClick event handler for Button type property editors.
   */
  onClick?: PropertyOnClick;
}

/**
 * Property editor interface, needs to be implemented by any custom controls editor.
 */
export type PropertyEditor<T extends PropertyControlProps = any> = FC<T>;
