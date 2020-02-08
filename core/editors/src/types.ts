import React from 'react';
import {
  ComponentControl,
  SetControlValueFn,
  ClickControlFn,
} from '@component-controls/specification';
import { LoadedComponentControls } from '@component-controls/core';

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
  clickControl?: ClickControlFn;
  extraActions?: ExtraControlActions;
}
