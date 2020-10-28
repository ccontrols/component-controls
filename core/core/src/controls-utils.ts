/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import escape from 'escape-html';
import { deepmerge } from './deepMerge';
import {
  ComponentControl,
  ComponentControls,
  ComponentControlArray,
  ControlTypes,
} from './controls';

import { Story } from './document';

const mergeValue = (control: ComponentControl, value: any): any => {
  if (typeof control === 'object' && control.type === ControlTypes.OBJECT) {
    const objValue = mergeControlValues(
      control.value as ComponentControls,
      undefined,
      value,
    );
    return {
      ...control,
      value: objValue,
    };
  }
  return {
    ...control,
    value,
  };
};

export const mergeControlValues = (
  controls: ComponentControls,
  controlName: string | undefined,
  value: any,
): ComponentControls => {
  if (controlName) {
    return {
      ...controls,
      [controlName]: mergeValue(controls[controlName], value),
    };
  }

  return Object.keys(controls).reduce(
    (acc, key) => ({
      ...acc,
      [key]: mergeValue(
        controls[key],
        value[key] === undefined
          ? controls[key].value
          : typeof value[key].value === 'undefined'
          ? value[key]
          : value[key].value,
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
    ? controls[controlName].defaultValue
    : Object.keys(controls).reduce(
        (acc, key) => ({
          ...acc,
          [key]: controls[key].defaultValue,
        }),
        {},
      );
};

export const canResetControl = (control: ComponentControl) => {
  return control.defaultValue !== control.value;
};
export interface ControlValues {
  [name: string]: any;
}

export const getControlValue = (control: ComponentControl): any => {
  if (control) {
    const { value } = control;
    switch (control.type) {
      case ControlTypes.TEXT: {
        if (control.escapeValue && typeof value === 'string') {
          return escape(value);
        }
        break;
      }
      case ControlTypes.OBJECT: {
        if (typeof value === 'object') {
          return getControlValues(value as ComponentControls);
        }
        break;
      }
      case ControlTypes.ARRAY: {
        const arrControl = control as ComponentControlArray;
        if (Array.isArray(arrControl.value) && arrControl.rowType) {
          const values = arrControl.value.map(row => {
            const values = Object.keys(arrControl.rowType).reduce(
              (acc, key) => {
                const valueType = arrControl.rowType[key];
                if (valueType) {
                  const mockControlType =
                    valueType.type === ControlTypes.OBJECT
                      ? deepmerge<ComponentControl>(valueType, {
                          value: row[key]
                            ? Object.keys(row[key]).reduce(
                                (a, k) => ({
                                  ...a,
                                  [k]: { value: row[key][k] },
                                }),
                                {},
                              )
                            : undefined,
                        })
                      : deepmerge<ComponentControl>(valueType, {
                          value: row[key],
                        });
                  const controlValue = getControlValues({
                    [key]: mockControlType,
                  });
                  if (controlValue) {
                    return {
                      ...acc,
                      [key]: controlValue[key],
                    };
                  }
                }
                return acc;
              },
              {},
            );
            return values;
          });
          return values;
        }
        break;
      }
      default:
        return value;
    }
    return value;
  }
  return undefined;
};

export const getControlValues = (controls?: ComponentControls): ControlValues =>
  controls
    ? Object.keys(controls).reduce((acc, key) => {
        const value = getControlValue(controls[key]);
        return { ...acc, [key]: value };
      }, {})
    : {};

export const visibleControls = (
  controls?: ComponentControls,
  story?: Story,
): ComponentControls =>
  controls && typeof controls === 'object'
    ? Object.keys(controls)
        .filter(key => {
          const control = controls[key];
          if (control.hidden) {
            return false;
          }
          const args = story?.arguments;
          //  check if arguments are included in story parameters
          if (args && args.length) {
            const firstArg = args[0];
            return Array.isArray(firstArg.value)
              ? firstArg.value.find(arg => arg.name === key)
              : true;
          }
          return false;
        })
        .map((key, index) => ({
          name: key,
          control: {
            ...controls[key],
            order:
              controls[key].order === undefined ? index : controls[key].order,
          },
        }))
        .sort((a, b) => {
          const aOrder = a.control.order || 0;
          const bOrder = b.control.order || 0;
          return aOrder - bOrder;
        })
        .reduce(
          (acc, { name, control }) => ({
            ...acc,
            [name]: { ...control },
          }),
          {},
        )
    : {};

export const getControlsCount = (controls?: ComponentControls): number =>
  controls ? Object.keys(controls).length : 0;

export const newControlValues = (
  controls: ComponentControls,
): ComponentControls => {
  return Object.keys(controls)
    .map(name => {
      const control = controls[name];
      const { data } = control;
      if (data === false || data === null) {
        return null;
      }
      const { type } = control;
      switch (type) {
        case ControlTypes.OBJECT: {
          if (typeof control.value === 'object') {
            return {
              name,
              value: {
                ...newControlValues(control.value as ComponentControls),
              },
            };
          }
          return null;
        }
        case ControlTypes.ARRAY: {
          const arrControl = control as ComponentControlArray;
          if (Array.isArray(arrControl.value) && arrControl.rowType) {
            const randomValues = {
              name,
              value: arrControl.value.map(row => {
                const values = Object.keys(arrControl.rowType).reduce(
                  (acc, key) => {
                    const valueType = arrControl.rowType[key];
                    if (valueType) {
                      const mockControlType =
                        valueType.type === ControlTypes.OBJECT
                          ? deepmerge<ComponentControl>(valueType, {
                              value: row[key]
                                ? Object.keys(row[key]).reduce(
                                    (a, k) => ({
                                      ...a,
                                      [k]: { value: row[key][k] },
                                    }),
                                    {},
                                  )
                                : undefined,
                            })
                          : deepmerge<ComponentControl>(valueType, {
                              value: row[key],
                            });
                      const newValue = newControlValues({
                        [key]: mockControlType,
                      });
                      if (newValue) {
                        return {
                          ...acc,
                          [key]: newValue[key],
                        };
                      }
                    }
                    return acc;
                  },
                  {},
                );
                return values;
              }),
            };
            return randomValues;
          }
          break;
        }
        default:
          return {
            name,
            value: control.defaultValue,
          };
      }
      return {
        name,
        value: control.defaultValue,
      };
    })
    .reduce((acc, f) => (f ? { ...acc, [f.name]: f.value } : acc), {});
};
