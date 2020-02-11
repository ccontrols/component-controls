import { ControlTypes } from '@component-controls/specification';
import { PropertyEditor } from './types';

import { AllPropertyEditors } from './ObjectEditor';

export const getPropertyEditor = (type: ControlTypes): PropertyEditor =>
  AllPropertyEditors[type];
