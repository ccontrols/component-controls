import { ControlTypes } from '@component-controls/specification';
import { PropertyEditor } from './types';
import { TextEditor } from './editors/TextEditor';
import { NumberEditor } from './editors/NumberEditor';

import { BooleanEditor } from './editors/BooleanEditor';
import { OptionsEditor } from './editors/OptionsEditor';

import { DateEditor } from './editors/DateEditor';
import { ColorEditor } from './editors/ColorEditor';
import { ButtonEditor } from './editors/ButtonEditor';

import { ObjectEditor } from './editors/ObjectEditor';
import { ArrayEditor } from './editors/ArrayEditor';
import { FilesEditor } from './editors/FilesEditor';

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
