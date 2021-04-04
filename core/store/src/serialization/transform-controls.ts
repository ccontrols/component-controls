import {
  ComponentControls,
  Story,
  deepMergeReplaceArrays,
  Document,
  Components,
  getComponentName,
  controlsFromProps,
  SmartControls,
  transformControls,
} from '@component-controls/core';

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
