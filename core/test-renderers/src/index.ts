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
 * @param param0 inputs as example, doc, project folder and a selcted test rendering framework
 * @param options optional to be passed to the render function of the selected testing framework
 * @returns a toJson function to use in snapshots, in addition all the props returned by the selected test frameowrk
 */
export function renderExample<Props = unknown>({
  example,
  doc,
  config,
  controls,
}: {
  example: Example<Props>;
  doc: Document;
  config: string | RunConfiguration;
  controls?: ExampleControls;
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
    mergeStoryProps(mergeStoryProps(runtimeConfig, doc), story),
  );
  story.controls = transformControls(story.controls);
  if (controls && story.controls) {
    story.controls = mergeControlValues(
      story.controls,
      undefined,
      getControlValues(transformControls(controls as ComponentControls)),
    );
  }
  return (runtimeConfig.renderFn as StoryRenderFn)(story, doc);
}
