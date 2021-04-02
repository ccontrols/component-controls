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

export const createStoriesTemplate: TemplateFunction<StoryTemplateOptions> = async (
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
  const store = bundle ? 'bundle' : 'imports';
  const storeRender = fs.readFileSync(
    path.resolve(__dirname, `../templates/story/render/${store}.js`),
    'utf8',
  );
  const renderPath = path.resolve(
    __dirname,
    `../templates/framework-render/${renderers[renderer]}.js`,
  );
  const render = dot.template(fs.readFileSync(renderPath, 'utf8'))({
    storeRender,
  });
  const storiesFileImports = bundle
    ? ''
    : `import doc, { ${stories
        .map(story =>
          story.name === 'example' ? 'example as example_story' : story.name,
        )
        .join(', ')} } from '.${path.sep}${(output
        ? path.relative(output, storyPath)
        : path.basename(storyPath)
      )
        .split('.')
        .slice(0, -1)
        .join('.')}';`;
  const vars = {
    stories,
    render,
    storeRender,
    doc: bundle ? `const doc = store.docs['${doc.title}'];` : '',
    utilityImports: fs.readFileSync(
      path.resolve(__dirname, `../templates/setups/imports.${format}.js`),
    ),
    setupTests: fs.readFileSync(
      path.resolve(__dirname, `../templates/setups/setup.${format}.js`),
    ),
    storyImports: fs.readFileSync(
      path.resolve(
        __dirname,
        `../templates/story/import/${store}.${format}.js`,
      ),
      'utf8',
    ),

    storiesFileImports,
    name: name || doc.title,
  };
  const template = `
{{=it.topImports}}
{{=it.utilityImports}}
{{=it.storyImports}}
{{=it.imports}}
{{=it.storiesFileImports}}

describe('{{=it.name}}', () => {
{{=it.setupTests}}
{{=it.load}}
{{=it.doc}}
{{~ it.stories :story }}
  test('{{=story.name}}', () => {
    {{? it.bundlePath }}
      const story = store.stories['{{=story.id}}'];
    {{?? true }}
      const example = {{=story.name}};
    {{?}}
{{=it.render}}
  });
{{~}}
});
`;
  return createTemplate({
    renderer,
    output,
    format,
    name,
    bundle,
    template,
    storeRender,
    vars,
    ...rest,
  });
};
