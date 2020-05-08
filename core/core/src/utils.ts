import escape from 'escape-html';

import {
  ComponentControl,
  ComponentControls,
  ComponentControlArray,
  ControlTypes,
} from '@component-controls/specification';
import deepmerge from 'deepmerge';

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
    }
    return value;
  }
  return undefined;
};

export const getControlValues = (controls?: ComponentControls): ControlValues =>
  controls
    ? Object.keys(controls).reduce((acc, key) => {
        const value = getControlValue(controls, key);
        return { ...acc, [key]: value };
      }, {})
    : {};

export const visibleControls = (
  controls?: ComponentControls,
): ComponentControls =>
  controls && typeof controls == 'object'
    ? Object.keys(controls)
        .filter(key => !controls[key].hidden)
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

export const hasControls = (controls?: ComponentControls): boolean =>
  controls && typeof controls == 'object'
    ? !!Object.keys(controls).filter(key => !controls[key].hidden).length
    : false;
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
          break;
      }
      return {
        name,
        value: control.defaultValue,
      };
    })
    .reduce((acc, f) => (f ? { ...acc, [f.name]: f.value } : acc), {});
};
