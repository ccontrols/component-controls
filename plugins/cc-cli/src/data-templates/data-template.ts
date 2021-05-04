import dot from 'dot';
import { getStoryControls, randomizeData } from '@component-controls/core';
import { prettify } from '@component-controls/instrument';
import { StoryTemplateOptions } from '../types';
import { getStore } from '../templating/store';
import { getTemplate } from '../templating/resolve-template';

export const createDataTemplate = async (
  options: StoryTemplateOptions,
): Promise<string> => {
  const {
    name,
    bundle,
    storyPath = '',
    output,
    format = 'ts',
    data: numValues = 0,
  } = options;
  if (numValues <= 0) {
    return '';
  }
  const parsed = await getStore({ bundle, name, storyPath });
  if (!parsed) {
    return '';
  }
  const { doc, stories, components } = parsed;
  const data: string[] = [];
  Object.keys(stories).forEach(storyId => {
    const story = stories[storyId];
    const controls = getStoryControls(story, doc, components);
    if (controls) {
      const values: Record<string, any> = {};
      for (let i = 0; i < numValues; i += 1) {
        values[i.toString()] = randomizeData(controls);
      }
      const vars = {
        story: storyId,
        values: JSON.stringify(values, null, 2),
      };
      data.push(dot.template(getTemplate(`data-templates/data`, format))(vars));
    }
  });
  return prettify(data.join('/n'), {}, output);
};
