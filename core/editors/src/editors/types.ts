import { FC } from 'react';
import { ComponentControl } from '@component-controls/specification';

export type PropertyOnClick = (prop: ComponentControl) => any;
export interface PropertyControlProps {
  prop: ComponentControl;
  name: string;
  onChange: (name: string, prop: any) => void;
  onClick?: PropertyOnClick;
}

export type PropertyEditor<T extends PropertyControlProps = any> = FC<T>;
