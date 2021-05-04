import path from 'path';
import dot from 'dot';
import { createTemplate } from './template';
import { accessibilityTemplate } from './accessibily';
import { StoryTemplateOptions, renderers, TemplateFunction } from '../types';
import { getTemplate } from '../templating/resolve-template';
import { getStore } from '../templating/store';

dot.templateSettings.strip = false;
(dot as any).log = false;

/**
 * create tests on a document base (a test file for each document and inside, dynamic tests to iterate through the stories)
 * @param options - rendering options
 * @returns a string with the rendered template
 */
export const createDocumentTemplate: TemplateFunction<StoryTemplateOptions> = async (
  options: StoryTemplateOptions,
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
  const parsed = await getStore({ bundle, name, storyPath });
  if (!parsed) {
    return '';
  }
  const { doc, stories, storeName } = parsed;
  const importPath = `.${path.sep}${(output
    ? path.relative(output, storyPath)
    : path.basename(storyPath)
  )
    .split('.')
    .slice(0, -1)
    .join('.')}`;
  const storiesFileImports = bundle
    ? ''
    : format === 'cjs'
    ? `const examples = require('${importPath}');`
    : `import * as examples from '${importPath}';`;
  const vars = {
    stories: Object.keys(stories).map(key => ({
      name: stories[key].name,
      id: key,
    })),
    bundle: !!bundle,
    documentLoop: dot.template(
      getTemplate(`document/loop/${storeName}-${renderers[renderer]}`, format),
    )({
      type:
        format === 'ts' ? ': ReturnType<typeof renderDocument> = []' : ' = []',
      ...accessibilityTemplate(format, ally),
    }),
    doc: bundle ? `const doc = store.docs['${doc.title}'];` : '',
    storyImports: getTemplate(`document/import/${storeName}`, format),

    storiesFileImports,
    name: name || doc.title,
  };
  const template = `
{{=it.topImports}}
{{=it.storyImports}}
{{=it.imports}}
{{=it.storiesFileImports}}

describe('{{=it.name}}', () => {
  {{=it.load}}
  {{=it.documentLoop}}
});
`;
  return createTemplate({
    renderer,
    output,
    format,
    name,
    bundle,
    template,
    vars,
    ally,
    ...rest,
  });
};
