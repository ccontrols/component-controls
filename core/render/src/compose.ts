import {
  Story,
  Document,
  StoryRenderFn,
  getControlValues,
  deepMerge,
  FrameworkRenderFn,
  ComponentControls,
} from '@component-controls/core';

type ComposeFn = (
  props: Parameters<FrameworkRenderFn>[0],
) => {
  renderFn: StoryRenderFn | undefined;
  values: any;
  context: {
    story: Story;
    doc: Document;
    controls: ComponentControls;
  } & Record<string, any>;
};
export const composeFn: ComposeFn = ({ story, doc, options }) => {
  if (!story) {
    throw new Error(`Invalid story`);
  }
  const controls = story.controls;
  const values = getControlValues(controls);
  //parameters added to avoid bug in SB6 rc that assumes parameters exist
  const context = {
    story,
    doc,
    controls,
    ...options,
  };
  const { decorators: globalDecorators = [] } = options || {};
  const { decorators: storyDecorators = [] } = story;
  const decorators = deepMerge<StoryRenderFn[]>(
    globalDecorators,
    storyDecorators,
  );
  const sortedDecorators = decorators.reverse();
  let renderFn = story.storyFn;
  for (let i = 0; i < sortedDecorators.length; i += 1) {
    const decorator = sortedDecorators[i];
    const childFn = renderFn;
    const nextRenderFn = (_: any, nextContext: any) =>
      (childFn as StoryRenderFn)(values, { ...context, ...nextContext });
    renderFn = () =>
      decorator(nextRenderFn, {
        ...context,
        renderFn: nextRenderFn,
      });
  }
  return { renderFn, values, context };
};
