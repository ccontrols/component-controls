import escape from 'escape-html';

import {
  ComponentControl,
  ComponentControls,
  ControlTypes,
} from '@component-controls/specification';

const mergeValue = (control: ComponentControl, value: any): any => {
  if (control && control.type === ControlTypes.OBJECT) {
    return {
      ...control,
      value: mergeControlValues(
        control.value as ComponentControls,
        undefined,
        value,
      ),
    };
  }
  return {
    ...control,
    value,
    resetValue:
      control.resetValue === undefined ? control.value : control.resetValue,
  };
};

export const mergeControlValues = (
  controls: ComponentControls,
  controlName: string | undefined,
  value: any,
): ComponentControls => {
  return controlName
    ? {
        ...controls,
        [controlName]: mergeValue(controls[controlName], value),
      }
    : Object.keys(controls).reduce(
        (acc, key) => ({
          ...acc,
          [key]: mergeValue(
            controls[key],
            value[key] === undefined ? controls[key].value : value[key],
          ),
        }),
        {},
      );
};

export const resetControlValues = (
  controls: ComponentControls,
  controlName?: string,
) => {
  return controlName
    ? controls[controlName].resetValue
    : Object.keys(controls).reduce(
        (acc, key) => ({
          ...acc,
          [key]: controls[key].resetValue,
        }),
        {},
      );
};

export interface ControlValues {
  [name: string]: any;
}

export const getControlValue = (
  controls: ComponentControls,
  propName: string,
): any => {
  const control: ComponentControl = controls[propName];
  if (control) {
    const { value } = control;
    if (
      control.type === ControlTypes.TEXT &&
      control.escapeValue &&
      typeof value === 'string'
    ) {
      return escape(value);
    } else if (
      control.type === ControlTypes.OBJECT &&
      typeof value === 'object'
    ) {
      return getControlValues(value as ComponentControls);
    }
    return value;
  }
  return undefined;
};

export const getControlValues = (controls: ComponentControls): ControlValues =>
  controls
    ? Object.keys(controls).reduce((acc, key) => {
        const value = getControlValue(controls, key);
        return { ...acc, [key]: value };
      }, {})
    : {};
