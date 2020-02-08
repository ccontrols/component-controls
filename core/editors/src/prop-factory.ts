import { ControlTypes } from '@component-controls/specification';
import { PropertyEditor } from './types';
import { TextEditor } from './TextEditor';
import { NumberEditor } from './NumberEditor';

import { BooleanEditor } from './BooleanEditor';
import { OptionsEditor } from './OptionsEditor';

import { DateEditor } from './DateEditor';
import { ColorEditor } from './ColorEditor';
import { ButtonEditor } from './ButtonEditor';

import { ObjectEditor } from './ObjectEditor';
import { ArrayEditor } from './ArrayEditor';
import { FilesEditor } from './FilesEditor';

const PropertyEditors: {
  [name in ControlTypes]: PropertyEditor;
} = {
  [ControlTypes.TEXT]: TextEditor,
  [ControlTypes.NUMBER]: NumberEditor,
  [ControlTypes.BOOLEAN]: BooleanEditor,
  [ControlTypes.OPTIONS]: OptionsEditor,
  [ControlTypes.DATE]: DateEditor,
  [ControlTypes.COLOR]: ColorEditor,
  [ControlTypes.BUTTON]: ButtonEditor,
  [ControlTypes.OBJECT]: ObjectEditor,
  [ControlTypes.ARRAY]: ArrayEditor,
  [ControlTypes.FILES]: FilesEditor,
};

export const getPropertyEditor = (type: ControlTypes): PropertyEditor =>
  PropertyEditors[type];
