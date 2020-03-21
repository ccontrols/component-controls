import { ControlTypes } from '@component-controls/specification';
import { PropertyEditor } from './types';

import { AllPropertyEditors } from './ObjectEditor';

/**
 *
 * Property editors factory. Given a propey type, will return a editor compnent class.
 *
 * @param type: specify the type ie 'text'
 *
 * @returns a Property Editor class.
 */
export const getPropertyEditor = (type: ControlTypes): PropertyEditor =>
  AllPropertyEditors[type];

/**
 *
 * @param type: specify the type ie 'text'
 * @param editor: a Property Editor class.
 */
export const addPropertyEditor = (
  type: ControlTypes,
  editor: PropertyEditor,
): void => {
  AllPropertyEditors[type] = editor;
};
