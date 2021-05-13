import dot from 'dot';
import {
  getStoryControls,
  randomizeData,
  randomizeSeed,
  fixControlTypes,
  BuildConfiguration,
} from '@component-controls/core';
import { prettify } from '@component-controls/instrument';
import { StoryTemplateOptions } from '../utils';
import { getStore } from '../store';
import { getTemplate } from '../resolve-template';

/**
 * create a data-driven testing template with random values
 * if some values already exist, will re-use them
 * @param options - templating options
 * @param existing - optional existing values
 * @returns the file content (to be saved) and the list of the document stories that have values
 */
export const createDataTemplate = async (
  options: StoryTemplateOptions,
  existing?: Record<string, any>,
  configration?: BuildConfiguration,
): Promise<{ content: string; data: Record<string, any> } | undefined> => {
  const {
    name,
    bundle,
    storyPath = '',
    output,
    format = 'ts',
    data: numValues = 0,
    seed,
  } = options;
  if (numValues <= 0) {
    return undefined;
  }
  const parsed = await getStore({ bundle, name, storyPath }, configration);
  if (!parsed) {
    return undefined;
  }
  const { doc, stories, components } = parsed;
  const data: Record<string, any> = {};
  if (seed) {
    randomizeSeed(seed);
  }
  Object.keys(stories).forEach(storyId => {
    const story = stories[storyId];

    const storyControls = getStoryControls(story, doc, components);
    if (storyControls) {
      const controls = fixControlTypes(storyControls);
      const values: Record<string, any> = existing?.[storyId] || {};
      for (let i = Object.keys(values).length; i < numValues; i += 1) {
        const rnd = randomizeData(controls);
        if (Object.keys(rnd).length) {
          values[(i + 1).toString()] = rnd;
        }
      }
      if (Object.keys(values).length) {
        data[storyId] = values;
      }
    }
  });
  if (!Object.keys(data).length) {
    return undefined;
  }
  return {
    content: prettify(
      dot.template(getTemplate(`data-templates/data`, format))({
        data: JSON.stringify(data, null, 2),
      }),
      {},
      output,
    ),
    data,
  };
};
