import dot from 'dot';
import {
  getStoryControls,
  randomizeData,
  fixControlTypes,
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
): Promise<{ content: string; data: Record<string, any> } | undefined> => {
  const {
    name,
    bundle,
    storyPath = '',
    output,
    format = 'ts',
    data: numValues = 0,
  } = options;
  if (numValues <= 0) {
    return undefined;
  }
  const parsed = await getStore({ bundle, name, storyPath });
  if (!parsed) {
    return undefined;
  }
  const { doc, stories, components } = parsed;
  const data: Record<string, any> = {};
  Object.keys(stories).forEach(storyId => {
    const story = stories[storyId];

    const storyControls = getStoryControls(story, doc, components);
    if (storyControls) {
      const controls = fixControlTypes(storyControls);
      const values: Record<string, any> = existing?.[storyId] || {};
      for (let i = Object.keys(values).length; i < numValues; i += 1) {
        const rnd = randomizeData(controls);
        if (Object.keys(rnd).length) {
          values[i.toString()] = rnd;
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
