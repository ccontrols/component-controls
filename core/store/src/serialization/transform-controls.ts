import {
  ComponentControls,
  ComponentControl,
  ControlTypes,
  Story,
  deepMerge,
  Document,
  StoryComponents,
  getComponentName,
  controlsFromProps,
  SmartControls,
} from '@component-controls/core';

export const transformControls = (
  story: Story,
  doc: Document,
  components: StoryComponents,
): ComponentControls | undefined => {
  const { controls: storyControls } = story;
  const controls: ComponentControls | undefined = storyControls
    ? Object.keys(storyControls).reduce((acc, key) => {
        const control: ComponentControl = storyControls[key];
        if (typeof control === 'string') {
          return {
            ...acc,
            [key]: { type: ControlTypes.TEXT, value: control },
          };
        }
        if (typeof control === 'string') {
          return {
            ...acc,
            [key]: { type: ControlTypes.NUMBER, value: control },
          };
        }
        if (typeof control === 'object') {
          if (control instanceof Date) {
            return {
              ...acc,
              [key]: { type: ControlTypes.DATE, value: control },
            };
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
  if (!smart) {
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
      return deepMerge(filteredControls, controls || {});
    }
  }
  return controls;
};
