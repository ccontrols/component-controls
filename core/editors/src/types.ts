import React from 'react';
import {
  ComponentControl,
  LoadedComponentControls,
  SetControlValueFn,
  ResetControlValueFn,
  ClickControlFn,
} from '@component-controls/specification';

export type PropertyOnClick = (prop: ComponentControl) => any;
export interface PropertyControlProps {
  prop: ComponentControl;
  name: string;
  onChange: (name: string, prop: any) => void;
  onClick?: PropertyOnClick;
}

export type PropertyEditor<T extends PropertyControlProps = any> = React.FC<T>;

export interface ExtraControlAction {
  title: string;
  onAction: (props: ControlsEditorsTableProps) => void;
}

export type ExtraControlActions = ExtraControlAction[];

export interface ControlsEditorsTableProps {
  title?: string;
  storyId?: string;
  controls?: LoadedComponentControls;
  setControlValue?: SetControlValueFn;
  resetControlValue?: ResetControlValueFn;
  clickControl?: ClickControlFn;
  extraActions?: ExtraControlActions;
}
