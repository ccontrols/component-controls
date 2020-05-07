/**
 * Control field types
 * examples are provided for the different types:
 *
 */
export enum ControlTypes {
  /**
   * userName: {
   *   type: ControlTypes.TEXT,
   *   label: 'Name',
   *   value: 'Storyteller',
   * },
   */
  TEXT = 'text',

  /**
   *  age: {
   *   type: ControlTypes.NUMBER,
   *   label: 'Age',
   *   value: 78,
   *   range: true,
   *   min: 0,
   *   max: 90,
   *   step: 5,
   * },
   */
  NUMBER = 'number',

  /**
   * nice: {
   *  type: ControlTypes.BOOLEAN,
   *  label: 'Nice',
   *  value: true,
   * },
   */
  BOOLEAN = 'boolean',

  /**
   * fruit: {
   *   type: ControlTypes.OPTIONS,
   *   label: 'Fruit',
   *   value: 'apple',
   *   options: {
   *     Apple: 'apple',
   *     Banana: 'banana',
   *     Cherry: 'cherry',
   *   },
   * },
   */
  OPTIONS = 'options',

  /**
   *  birthday: {
   *   type: ControlTypes.DATE,
   *   label: 'Birthday',
   *   value: new Date(),
   *  },
   */
  DATE = 'date',

  /**
   * color: {
   *   type: 'color',
   *   value: '#000000',
   * },
   */
  COLOR = 'color',

  /**
   * button: {
   *  type: ControlTypes.BUTTON,
   *   onClick: () => {
   *    ... code to modify some variables
   *  }
   * },
   */
  BUTTON = 'button',

  /**
   *  style: {
   *    type: ControlTypes.OBJECT,
   *    label: 'Styles',
   *    value: {
   *      // do not randomize the border style
   *      border: { type: ControlTypes.TEXT, value: '2px dashed silver', data: null },
   *      borderRadius: { type: ControlTypes.NUMBER, value: 10 },
   *      padding: { type: ControlTypes.NUMBER, value: 10 },
   *    },
   *  }
   */
  OBJECT = 'object',

  /**
   * arrayItems: {
   *   type: ControlTypes.ARRAY,
   *   label: 'Items',
   *   rowType: {
   *     name: { type: ControlTypes.TEXT },
   *   },
   *   value: [{ name: 'Laptop' }, { name: 'Book' }, { name: 'Whiskey' }],
   * },
   */
  ARRAY = 'array',

  /**
   * images: {
   *   type: ControlTypes.FILES,
   *   label: 'Happy Picture',
   *   accept: 'image/*',
   *   value: [
   *     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',
   *   ],
   * },
   */
  FILES = 'files',
}

export interface ComponentControlData {
  /**
   * 'name' for generating random data from faker.js
   *  usually comprised of two parts, separated by a dot
   *  example 'internet.avatar'
   */
  name: string;

  /**
   * options to be passe to the random data generators
   * example {
   *  min: 10, max: 20
   * }
   */
  options?: { [key: string]: any };
}

/**
 * Base inteface for creating control types
 * All new property typs should extend this interface and support
 *
 */
export interface ComponentControlBase<T> {
  type: ControlTypes;

  /**
   * label to display next to the field editor
   * by default uses the property name itself
   */

  label?: string;

  /**
   * a default value for the property
   */
  value?: T;

  /**
   * default value is usually set at run-time, from the value
   */
  defaultValue?: T;

  /**
   * reset value - this is automatically saved as the initial 'value'
   * used when user wants to click rest and go back to the initial values
   */
  resetValue?: T;

  /**
   * visually display the control property as required
   */
  required?: boolean;

  /**
   * full text property description.
   * can use markdown.
   */
  description?: string;

  /**
   * hide the property editor for this property
   * will only use the value
   */

  hidden?: boolean;
  /**
   * allows grouping of the properties
   * in a property editor
   * for example different editor tabs
   */
  groupId?: string;

  /**
   * allows custom sorting of the properties
   * if 'order' is not provided, the props
   * will be sorted by the order/key of the object (unreliable)
   */
  order?: number;

  /**
   * helper information to generate random data
   * will be used in conjunction with faker.js
   * datacan be set to false, if the control should not be randomized
   */
  data?: ComponentControlData | null | false;
}

export interface ComponentControlText extends ComponentControlBase<string> {
  type: ControlTypes.TEXT;

  /**
   * placeholder for empty properties
   * either undefined initial value
   * or user clears the field
   */
  placeholder?: string;

  /**
   * number of rows for a TextArea field for longer text
   * by default, only 1 row = means a Input field
   * > 1 rows = an area field
   */
  rows?: number;

  /**
   * allows to receive escaped string values
   * to help prevent XSS attacks
   * by default - false
   */
  escapeValue?: boolean;
}

export interface ComponentControlBoolean extends ComponentControlBase<boolean> {
  type: ControlTypes.BOOLEAN;
}

export interface ComponentControlColor extends ComponentControlBase<string> {
  type: ControlTypes.COLOR;
}

export interface ComponentControlDate extends ComponentControlBase<Date> {
  type: ControlTypes.DATE;
  /**
   * whether to display a date picker (calendar).
   * default: true
   */
  datePicker?: boolean;

  /**
   * whether to display a time picker (calendar).
   * default: true
   */

  timePicker?: boolean;
}

export interface ComponentControlFiles extends ComponentControlBase<string[]> {
  type: ControlTypes.FILES;
  /**
   * type of files to accept user to open
   * ex 'image/*',
   */
  accept?: string;
}

export interface ComponentControlArray
  extends ComponentControlBase<{ [key: string]: any }[]> {
  type: ControlTypes.ARRAY;
  /**
   * type of the items in each row of the array
   */
  rowType: ComponentControls;
  /**
   * the label for the editor button
   */
  editLabel?: string;
}

export interface ComponentControlObject
  extends ComponentControlBase<ComponentControls> {
  type: ControlTypes.OBJECT;
  /**
   * the label for the editor button
   */
  editLabel?: string;
}

export interface ComponentControlButton<ClickEvent = () => void>
  extends ComponentControlBase<ClickEvent> {
  type: ControlTypes.BUTTON;

  /**
   * for button type fields, an onClick handler
   */
  onClick?: (prop: ComponentControlButton) => void;
}

export type OptionsValueType<T = unknown> =
  | T
  | number
  | string[]
  | number[]
  | { label: string; value: any };

/**
 * value/label pairs or array of OptionsValueType
 */
export type OptionsListType<T = unknown> =
  | { [key: string]: T }
  | OptionsValueType<T>[];

/**
 * list of options can be
 * 1. key-value pair object: in format { label: value }
 * 2. array of strings
 * 3. array of key-value pair objects
 */

export interface ComponentControlOptions<T = unknown>
  extends ComponentControlBase<OptionsValueType<T>> {
  type: ControlTypes.OPTIONS;

  options: OptionsListType<T>;
  /**
   * how to render selecting the options:
   * default is 'select'
   */

  display?:
    | 'select'
    | 'multi-select'
    | 'radio'
    | 'inline-radio'
    | 'check'
    | 'inline-check';
}

export interface ComponentControlNumber extends ComponentControlBase<number> {
  type: ControlTypes.NUMBER;
  /**
   * for numeric type fields
   */

  /**
   * if true, will display a range type slider editor
   */
  range?: boolean;

  /**
   * minimum allowed value for numeric property
   */
  min?: number;

  /**
   * maximum allowed value for numeric property
   */
  max?: number;

  /**
   * stepper for numeric editor /i nc/dec value
   */

  step?: number;
}

/**
 * ComponentControl is a either an object of property settings
 * or a shortcut can be used:
 *  properties: {
 *   text: 'Hello',
 * },
 */

export type ComponentControl =
  | ComponentControlText
  | ComponentControlBoolean
  | ComponentControlColor
  | ComponentControlDate
  | ComponentControlObject
  | ComponentControlButton
  | ComponentControlOptions
  | ComponentControlNumber
  | ComponentControlArray
  | ComponentControlFiles;

/**
 * ComponentControls are defined in key value pairs
 * the name of the property is the key
 * and the value is the ComponentControl
 */
export interface ComponentControls {
  [name: string]: ComponentControl;
}
