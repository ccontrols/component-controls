import path from 'path';
import dot from 'dot';
import { relativeImport } from '@component-controls/core/node-utils';
import { createTemplate } from './template';
import { accessibilityTemplate } from './accessibily';
import {
  StoryTemplateOptions,
  renderers,
  TemplateFunction,
  DataImportOptions,
  removeExtension,
} from '../utils';
import { getTemplate } from '../resolve-template';
import { getStore } from '../store';
import { BuildConfiguration } from '@component-controls/core';

dot.templateSettings.strip = false;
(dot as any).log = false;

/**
 * create tests on a stories base (a test file for each document and inside, a test for each story)
 * @param options - rendering options
 * @returns a string with the rendered template
 */
export const createStoriesTemplate: TemplateFunction<
  StoryTemplateOptions
> = async (
  options: StoryTemplateOptions,
  dataImports?: DataImportOptions,
  configration?: BuildConfiguration,
): Promise<string> => {
  const {
    storyPath = '',
    renderer = 'rtl',
    format = 'cjs',
    name,
    output,
    bundle,
    ally,
    ...rest
  } = options;
  const parsed = await getStore({ bundle, name, storyPath }, configration);
  if (!parsed) {
    return '';
  }
  const { doc, stories, storeName } = parsed;
  const arrStories = Object.keys(stories).map(key => ({
    name: stories[key].name,
    id: key,
  }));
  const importPath = (
    output ? relativeImport(output, storyPath) : `./${path.basename(storyPath)}`
  )
    .split('.')
    .slice(0, -1)
    .join('.');
  const storiesFileImports = bundle
    ? ''
    : format === 'cjs'
    ? `
const doc = require('${importPath}');
const { ${arrStories
        .map(story =>
          story.name === 'example' ? 'example as example_story' : story.name,
        )
        .join(', ')} } = require('${importPath}');
    `
    : `import doc, { ${arrStories
        .map(story =>
          story.name === 'example' ? 'example as example_story' : story.name,
        )
        .join(', ')} } from '${importPath}';`;
  const vars = {
    dataImports: dot.template(getTemplate(`data-include/import`, format))({
      dataFile: removeExtension(dataImports?.filePath),
    }),
    stories: arrStories,
    doc: bundle ? `const doc = store.docs['${doc.title}'];` : '',
    storyImports: getTemplate(`story/import/${storeName}`, format),
    data: dataImports?.data,
    storiesFileImports,
    name: name || doc.title,
    bundle: !!bundle,
    ...accessibilityTemplate(format, ally),
  };
  const template = `
{{=it.topImports}}
{{=it.storyImports}}
{{=it.imports}}
{{=it.storiesFileImports}}
{{=it.dataImports}}

describe('{{=it.name}}', () => {
{{=it.load}}
{{=it.doc}}
{{~ it.stories :story }}
  describe('{{=story.name}}', () => {
    {{? it.data && it.data[story.id] }}
      Object.keys(data['{{=story.id}}']).forEach(dataId => {
      const values = data['{{=story.id}}'][dataId];
      describe(dataId, () => {
    {{?}}    
      {{? it.bundlePath }}
          const story = store.stories['{{=story.id}}'];
      {{?? true }}
        const example = {{=story.name}};
      {{?}}
{{#def.loadTemplate('framework-render/${renderers[renderer]}')}}
{{? it.data && it.data[story.id] }}
    });
  });
{{?}}  
  });
{{~}}
});
`;
  return createTemplate(
    {
      renderer,
      output,
      format,
      name,
      bundle,
      template,
      vars,
      ally,
      ...rest,
    },
    {},
  );
};
