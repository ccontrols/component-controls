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
  control: ComponentControl | any,
): ComponentControl => {
  const valueType = typeof control;
  switch (valueType) {
    case 'boolean':
      return { type: ControlTypes.BOOLEAN, value: control };
    case 'string':
      return { type: ControlTypes.TEXT, value: control };
    case 'number':
      return { type: ControlTypes.NUMBER, value: control };
    case 'object': {
      if (control instanceof Date) {
        return { type: ControlTypes.DATE, value: control };
      }
      if (Array.isArray(control)) {
        return { type: ControlTypes.OPTIONS, options: control };
      }
      if (
        control.type === ControlTypes.OBJECT &&
        typeof control.value === 'object'
      ) {
        return {
          ...control,
          value: Object.keys(control.value).reduce(
            (acc, name) => ({
              ...acc,
              [name]: controlShortcuts(control.value[name]),
            }),
            {},
          ),
        };
      }
      return control;
    }
    default:
      return control;
  }
};
export const transformControls = (
  story: Story,
  doc: Document,
  components: Components,
): ComponentControls | undefined => {
  const { controls: storyControls } = story;
  const controls: ComponentControls | undefined = storyControls
    ? Object.keys(storyControls).reduce((acc, key) => {
        const control = controlShortcuts(storyControls[key]);
        if (control.defaultValue === undefined) {
          const defaultValue = getControlValue(control);
          if (typeof defaultValue !== 'function') {
            control.defaultValue = defaultValue;
          }
        }
        return { ...acc, [key]: control };
      }, {})
    : undefined;
  if (!story.arguments || story.arguments.length < 1) {
    //story has no arguments
    return controls;
  }
  const smartControls: SmartControls = story.smartControls || {};

  const { smart = true } = smartControls;
  if (!smart || story.smartControls === false) {
    return controls;
  }

  const storyComponent = story.component;
  if (!storyComponent) {
    return controls;
  }
  let componentName = getComponentName(storyComponent);
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
      return deepMergeReplaceArrays(filteredControls, controls || {});
    }
  }
  return controls;
};
