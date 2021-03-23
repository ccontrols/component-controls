import {
  Example,
  Document,
  Story,
  mergeStoryProps,
  transformControls,
  StoryRenderFn,
} from '@component-controls/core';
import { loadConfigurations } from '@component-controls/config';
import { render as reactRender } from '@component-controls/render/react';
import { render as reactTestRenderer } from './renderers/react-test-renderer';
import { render as enzymeReact16Renderer } from './renderers/enzyme-react-16';
import { render as rtlRenderer } from './renderers/react-testing-library';
import { RendererFn, RendererFnResult, Json } from './types';
export { RendererFn, RendererFnResult, Json };

export type rendererTypes = 'react' | 'rtr' | 'enzyme';
export const renderers: Record<rendererTypes, RendererFn> = {
  react: rtlRenderer,
  rtr: reactTestRenderer,
  enzyme: enzymeReact16Renderer,
};

export async function renderExample(
  props: {
    example: Example;
    doc: Document;
    projectFolder: string;
    configFolder?: string;
    renderer: 'react';
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  options?: any,
): ReturnType<typeof rtlRenderer>;

export async function renderExample<Props = unknown>(
  props: {
    example: Example<Props>;
    doc: Document;
    projectFolder: string;
    configFolder?: string;
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  options?: any,
): ReturnType<typeof rtlRenderer>;

export async function renderExample<Props = unknown>(
  props: {
    example: Example<Props>;
    doc: Document;
    projectFolder: string;
    configFolder?: string;
    renderer: 'rtr';
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  options?: any,
): ReturnType<typeof reactTestRenderer>;

export async function renderExample<Props = unknown>(
  props: {
    example: Example<Props>;
    doc: Document;
    projectFolder: string;
    configFolder?: string;
    renderer: 'enzyme';
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  options?: any,
): ReturnType<typeof enzymeReact16Renderer>;

/**
 * render an example using a test framework.
 *
 * @param param0 inputs as example, doc, project folder and a selcted test rendering framework
 * @param options optional to bepassed to the render function of the selected testing framework
 * @returns a toJson function to use in snapshots, in addition all the props returned by the selected test frameowrk
 */
export async function renderExample<Props = unknown>(
  {
    example,
    doc,
    projectFolder,
    configFolder,
    renderer = 'react',
  }: {
    example: Example<Props>;
    doc: Document;
    projectFolder: string;
    configFolder?: string;
    renderer?: rendererTypes;
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  options?: any,
): Promise<RendererFnResult | undefined> {
  const config = loadConfigurations(projectFolder, configFolder) || {};
  if (!config.renderFn) {
    config.renderFn = reactRender;
  }
  const story = example as Story;
  if (typeof example === 'function') {
    story.renderFn = example as StoryRenderFn;
  }
  Object.assign(story, mergeStoryProps(mergeStoryProps(config, doc), story));
  story.controls = transformControls(story.controls);
  const rendererFn = renderers[renderer];
  return await rendererFn({ story, doc, config }, options);
}
