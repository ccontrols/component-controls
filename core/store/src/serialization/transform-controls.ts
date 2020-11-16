import {
  ComponentControls,
  ComponentControl,
  ControlTypes,
  Story,
  deepMergeReplaceArrays,
  Document,
  Components,
  getComponentName,
  controlsFromProps,
  SmartControls,
  getControlValue,
} from '@component-controls/core';

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
        control.type === ControlTypes.OBJECT &&
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

const transformControls = (
  controls?: ComponentControls,
  propControls?: ComponentControls,
) => {
  return controls
    ? Object.keys(controls).reduce((acc, key) => {
        const control = controlShortcuts(key, controls, propControls);
        if (control.defaultValue === undefined) {
          const defaultValue = getControlValue(control);
          if (typeof defaultValue !== 'function') {
            control.defaultValue = defaultValue;
          }
        }
        return { ...acc, [key]: control };
      }, {})
    : undefined;
};
export const getControls = (
  story: Story,
  doc: Document,
  components: Components,
): ComponentControls | undefined => {
  const { controls: storyControls } = story;
  if (!story.arguments || story.arguments.length < 1) {
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
          if (Array.isArray(exclude) && exclude.includes(key)) {
            return false;
          }
          if (usedProps && !usedProps.includes(key)) {
            return false;
          }
          return true;
        })
        .reduce((acc, key) => ({ ...acc, [key]: newControls[key] }), {});
      const transformed = transformControls(storyControls, filteredControls);
      const { smart = true } = smartControls;
      if (!story.component || !smart || story.smartControls === false) {
        return transformControls(storyControls, filteredControls);
      }
      return transformed
        ? deepMergeReplaceArrays(filteredControls, transformed)
        : filteredControls;
    }
  }
  return transformControls(storyControls);
};
