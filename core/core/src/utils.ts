import escape from 'escape-html';

import {
  ComponentControl,
  ComponentControls,
  ControlTypes,
} from '@component-controls/specification';

/**
 * once controls are loaded, the value is saved into
 * defaultValue, an additional field in Loaded...
 */

export type LoadedComponentControl = ComponentControl & { defaultValue?: any };
export interface LoadedComponentControls {
  [name: string]: LoadedComponentControl;
}

// save default value for 'reset'
export const loadControls = (
  controls: ComponentControls,
): LoadedComponentControls =>
  Object.keys(controls).reduce((v, key) => {
    const prop = controls[key];
    return { ...v, [key]: { ...prop, defaultValue: prop.value } };
  }, {});

const mergeValue = (control: ComponentControl, value: any): any => {
  if (control && control.type === ControlTypes.OBJECT) {
    return {
      ...control,
      value: mergeControlValues(
        control.value as LoadedComponentControls,
        undefined,
        value,
      ),
    };
  }
  return {
    ...control,
    value,
    defaultValue:
      (control as LoadedComponentControl).defaultValue === undefined
        ? control.value
        : (control as LoadedComponentControl).defaultValue,
  };
};

export const mergeControlValues = (
  controls: LoadedComponentControls,
  controlName: string | undefined,
  value: any,
): LoadedComponentControls => {
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
  controls: LoadedComponentControls,
  controlName?: string,
) => {
  return controlName
    ? controls[controlName].defaultValue
    : Object.keys(controls).reduce(
        (acc, key) => ({
          ...acc,
          [key]: controls[key].defaultValue,
        }),
        {},
      );
};

export interface ControlValues {
  [name: string]: any;
}

export const getControlValue = (
  controls: LoadedComponentControls,
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
      return getControlValues(value as LoadedComponentControls);
    }
    return value;
  }
  return undefined;
};

export const getControlValues = (
  controls: LoadedComponentControls,
): ControlValues =>
  controls
    ? Object.keys(controls).reduce((acc, key) => {
        const value = getControlValue(controls, key);
        return { ...acc, [key]: value };
      }, {})
    : {};
