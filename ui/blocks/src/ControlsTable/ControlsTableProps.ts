import {
  SetControlValueFn,
  ClickControlFn,
} from '@component-controls/specification';
import { LoadedComponentControls } from '@component-controls/core';

export interface ControlsTableProps {
  title?: string;
  storyId?: string;
  controls?: LoadedComponentControls;
  setControlValue?: SetControlValueFn;
  clickControl?: ClickControlFn;
}
