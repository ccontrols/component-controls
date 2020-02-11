import { ControlTypes } from '@component-controls/specification';
import { TextEditor } from './TextEditor';
import { NumberEditor } from './NumberEditor';

import { BooleanEditor } from './BooleanEditor';
import { OptionsEditor } from './OptionsEditor';

import { DateEditor } from './DateEditor';
import { ColorEditor } from './ColorEditor';
import { ButtonEditor } from './ButtonEditor';

import { ArrayEditor } from './ArrayEditor';
import { FilesEditor } from './FilesEditor';

export const PropertyEditors = {
  [ControlTypes.TEXT]: TextEditor,
  [ControlTypes.NUMBER]: NumberEditor,
  [ControlTypes.BOOLEAN]: BooleanEditor,
  [ControlTypes.OPTIONS]: OptionsEditor,
  [ControlTypes.DATE]: DateEditor,
  [ControlTypes.COLOR]: ColorEditor,
  [ControlTypes.BUTTON]: ButtonEditor,
  [ControlTypes.ARRAY]: ArrayEditor,
  [ControlTypes.FILES]: FilesEditor,
};
