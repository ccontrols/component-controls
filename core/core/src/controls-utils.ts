/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import escape from 'escape-html';
import { deepmerge } from './deepMerge';
import { Components, getComponentName } from './components';
import { Story, Document } from './document';
import { SmartControls } from './common';
import { controlsFromProps } from './controls-smart';
import {
  ComponentControl,
  ComponentControls,
  ComponentControlArray,
  ControlTypes,
} from './controls';

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
                ...newControlValues(
                  control.value as unknown as ComponentControls,
                ),
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

/**
 * transforms the control shortcuts ie controls: { text: 'VALUE'} to full controls
 * @param name the name of the control
 * @param controls all the story assigned controls
 * @param propControls all the smart automatic controls
 * @returns the fully induced ComponentControl
 */
const controlShortcuts = (
  name: string,
  controls: ComponentControls,
  propControls?: ComponentControls,
): ComponentControl => {
  const control: ComponentControl | any = controls[name];
  const propControl = propControls?.[name] || {};
  const valueType = typeof control;
  switch (valueType) {
    case 'boolean':
      return {
        type: ControlTypes.BOOLEAN,
        ...propControl,
        value: control,
      };
    case 'string':
      return { type: ControlTypes.TEXT, ...propControl, value: control };
    case 'number':
      return { type: ControlTypes.NUMBER, ...propControl, value: control };
    case 'object': {
      if (control instanceof Date) {
        return { type: ControlTypes.DATE, ...propControl, value: control };
      }
      if (Array.isArray(control)) {
        return { type: ControlTypes.OPTIONS, ...propControl, options: control };
      }
      if (
        control?.type === ControlTypes.OBJECT &&
        typeof control.value === 'object'
      ) {
        return {
          ...control,
          ...propControl,
          value: Object.keys(control.value).reduce(
            (acc, name) => ({
              ...acc,
              [name]: controlShortcuts(name, control.value, propControl),
            }),
            {},
          ),
        };
      }
      return { ...propControl, ...control };
    }
    default:
      return { ...propControl, ...control };
  }
};

/**
 *
 * @param controls all the story controls
 * @param propControls all the automatic prop controls
 * @returns the transformed ComponentControls
 */
export const transformControls = (
  controls?: ComponentControls,
  propControls?: ComponentControls,
  smart = true,
): ComponentControls | undefined => {
  return controls
    ? Object.keys(smart ? { ...propControls, ...controls } : controls).reduce(
        (acc, key) => {
          const control = controlShortcuts(key, controls, propControls);
          if (control.defaultValue === undefined) {
            const defaultValue = getControlValue(control);
            if (typeof defaultValue !== 'function') {
              control.defaultValue = defaultValue;
            }
          }
          return { ...acc, [key]: control };
        },
        {},
      )
    : undefined;
};

const typeNames: Record<string, ControlTypes> = {
  'ControlTypes.TEXT': ControlTypes.TEXT,
  'ControlTypes.NUMBER': ControlTypes.NUMBER,
  'ControlTypes.BOOLEAN': ControlTypes.BOOLEAN,
  'ControlTypes.OPTIONS': ControlTypes.OPTIONS,
  'ControlTypes.DATE': ControlTypes.DATE,
  'ControlTypes.COLOR': ControlTypes.COLOR,
  'ControlTypes.BUTTON': ControlTypes.BUTTON,
  'ControlTypes.OBJECT': ControlTypes.OBJECT,
  'ControlTypes.ARRAY': ControlTypes.ARRAY,
  'ControlTypes.FILES': ControlTypes.FILES,
};
export const fixControlTypes = (
  controls: ComponentControls,
): ComponentControls => {
  return Object.keys(controls).reduce((acc, key) => {
    const control = controls[key];
    if (typeof control === 'object' && control.type) {
      const newType = typeNames[control.type] || control.type;
      return { ...acc, [key]: { ...control, type: newType } };
    }
    return { ...acc, [key]: control };
  }, {});
};
/**
 * create controls for a story
 * @param story - the story for which to create controls. Will check if the story accepts any arguments
 * @param doc - the document to which the story belongs
 * @param components - the cache of components
 * @returns a collection of controls, or undefined
 */
export const getStoryControls = (
  story: Story,
  doc: Document,
  components: Components,
): ComponentControls | undefined => {
  const { controls: storyControls } = story;

  if (!story.arguments?.length) {
    //story has no arguments
    return transformControls(storyControls);
  }
  const smartControls: SmartControls = story.smartControls || {};

  let componentName = getComponentName(story.component);
  if (
    !componentName ||
    ((!doc.componentsLookup ||
      !components[doc.componentsLookup[componentName]]) &&
      typeof doc.component === 'string')
  ) {
    componentName = doc.component as string;
  }
  if (componentName) {
    const component = doc.componentsLookup
      ? components[doc.componentsLookup[componentName]]
      : undefined;
    if (component?.info) {
      const newControls = controlsFromProps(component.info.props);
      const { include, exclude } = smartControls;
      const usedProps: string[] | undefined = Array.isArray(
        story.arguments[0].value,
      )
        ? story.arguments[0].value.map(v => v.name as string)
        : undefined;
      const filteredControls = Object.keys(newControls)
        .filter(key => {
          if (Array.isArray(include) && !include.includes(key)) {
            return false;
          }
          if (typeof include === 'function') {
            const prop = component.info?.props[key];
            return include({ name: key, ...newControls[key], prop });
          }

          if (Array.isArray(exclude) && exclude.includes(key)) {
            return false;
          }

          if (typeof exclude === 'function') {
            const prop = component.info?.props[key];
            return !exclude({ name: key, ...newControls[key], prop });
          }
          if (usedProps && !usedProps.includes(key)) {
            return false;
          }
          return true;
        })
        .reduce((acc, key) => ({ ...acc, [key]: newControls[key] }), {});
      const { smart = true } = smartControls;
      const isSmart: boolean = story.smartControls !== false && smart;

      return transformControls(storyControls, filteredControls, isSmart);
    }
  }
  return transformControls(storyControls);
};
