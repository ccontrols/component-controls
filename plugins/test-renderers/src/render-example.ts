import {
  Example,
  Document,
  Story,
  mergeStoryProps,
  transformControls,
  StoryRenderFn,
  ComponentControls,
  ExampleControls,
  mergeControlValues,
  getControlValues,
  FrameworkRenderFn,
  RunConfiguration,
} from '@component-controls/core';
import { loadConfigurations } from '@component-controls/config';
import { render as reactRender } from '@component-controls/render/react';

/**
 * render an example using a test framework.
 *
 * @param param0 inputs as example, doc, project folder and a selected test rendering framework
 * @returns the rendered example
 */
export function renderExample<Props = any>({
  example,
  doc,
  config,
  values,
}: {
  example: Example<Props>;
  doc: Document<Props>;
  config: string | RunConfiguration;
  values?: ExampleControls;
}): ReturnType<FrameworkRenderFn> {
  let runtimeConfig;
  if (typeof config === 'string') {
    runtimeConfig = loadConfigurations(config);
    if (!runtimeConfig) {
      throw new Error(`Could not load configuration ${config}`);
    }
  } else {
    runtimeConfig = config;
  }
  if (!runtimeConfig.renderFn) {
    runtimeConfig.renderFn = reactRender;
  }
  const story = example as Story;
  if (typeof example === 'function') {
    story.renderFn = example as StoryRenderFn;
  }
  Object.assign(
    story,
    mergeStoryProps(mergeStoryProps<Props>(runtimeConfig, doc), story),
  );
  story.controls = transformControls(story.controls);
  if (values) {
    story.controls = mergeControlValues(
      story.controls || {},
      undefined,
      getControlValues(transformControls(values as ComponentControls)),
    );
  }
  return (runtimeConfig.renderFn as StoryRenderFn)(story, doc);
}
