import fs from 'fs';
import path from 'path';
import dot from 'dot';
import { parseStories } from '@component-controls/instrument';

import { Document } from '@component-controls/core';
import { loadStore } from '@component-controls/store';
import { createTemplate } from './template';
import { StoryTemplateOptions, renderers, TemplateFunction } from './types';

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
    ...rest
  } = options;
  let stories: { id?: string; name: string }[] = [];
  let doc: Document = { title: 'doc' };
  if (bundle) {
    if (!name) {
      throw new Error(
        'When using a bundle, you must specify the document title/name as name parameter',
      );
    }
    const store = loadStore(require(bundle));

    if (!store.docs[name]) {
      throw new Error(
        `Could not find document ${name} in the specified bundle`,
      );
    }
    doc = store.docs[name];
    if (doc.stories) {
      stories = doc.stories.map(id => {
        const story = store.stories[id];
        return { name: story.name, id };
      });
    }
  } else {
    const { doc: storeDoc, stories: storeStories } = await parseStories(
      storyPath,
    );
    if (storeDoc) {
      doc = storeDoc;
    }
    if (storeStories) {
      stories = Object.keys(storeStories).map(key => ({
        name: storeStories[key].name,
        id: key,
      }));
    }
  }
  if (stories.length === 0 || doc.isMDXComponent) {
    return '';
  }
  const store = bundle ? 'bundle' : 'imports';
  const documentLoopPath = path.resolve(
    __dirname,
    `../templates/document/loop/${store}-${renderers[renderer]}.js`,
  );
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
    stories,
    bundle: !!bundle,
    documentLoop: dot.template(fs.readFileSync(documentLoopPath, 'utf8'))({
      type:
        format === 'ts' ? ': ReturnType<typeof renderDocument> = []' : ' = []',
    }),
    doc: bundle ? `const doc = store.docs['${doc.title}'];` : '',
    storyImports: fs.readFileSync(
      path.resolve(
        __dirname,
        `../templates/document/import/${store}.${format}.js`,
      ),
      'utf8',
    ),

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
    ...rest,
  });
};
