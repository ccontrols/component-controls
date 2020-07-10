import {
  ComponentControls,
  ComponentControl,
  ControlTypes,
  Story,
  deepMergeReplaceArrays,
  Document,
  StoryComponents,
  getComponentName,
  controlsFromProps,
  SmartControls,
  getControlValue,
} from '@component-controls/core';

export const transformControls = (
  story: Story,
  doc: Document,
  components: StoryComponents,
): ComponentControls | undefined => {
  const { controls: storyControls } = story;
  const controls: ComponentControls | undefined = storyControls
    ? Object.keys(storyControls).reduce((acc, key) => {
        let control: ComponentControl;
        const value = storyControls[key];
        if (typeof value === 'string') {
          control = { type: ControlTypes.TEXT, value };
        } else if (typeof value === 'string') {
          control = { type: ControlTypes.NUMBER, value };
        } else if (typeof value === 'object' && value instanceof Date) {
          control = { type: ControlTypes.DATE, value };
        } else {
          control = value;
        }
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
    (!components[doc.componentsLookup[componentName]] &&
      typeof doc.component === 'string')
  ) {
    componentName = doc.component as string;
  }
  if (componentName) {
    const component = components[doc.componentsLookup[componentName]];

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
