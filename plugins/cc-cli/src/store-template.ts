import fs from 'fs';
import path from 'path';
import dot from 'dot';
import { TemplateOptions, renderers, TemplateFunction } from './types';
import { createTemplate } from './template';
import { accessibilityTemplate } from './accessibily';

dot.templateSettings.strip = false;
(dot as any).log = false;

/**
 * create one large dynamic test for all the stories in the configuration/bundle
 * @param options - rendering options
 * @returns a string with the rendered template
 */
export const createStoreTemplate: TemplateFunction = async (
  options: TemplateOptions,
) => {
  const {
    renderer = 'rtl',
    format = 'cjs',
    name = 'component-controls generated',
    bundle,
    ally,
    ...rest
  } = options;

  const store = bundle ? 'bundle' : 'imports';
  const storeImportPath = path.resolve(
    __dirname,
    `../templates/store/import/${store}.${format}.js`,
  );
  const storeLoopPath = path.resolve(
    __dirname,
    `../templates/store/loop/${store}.${format}.js`,
  );
  const renderPath = path.resolve(
    __dirname,
    `../templates/framework-render/${renderers[renderer]}.${format}.js`,
  );
  const render = dot.template(fs.readFileSync(renderPath, 'utf8'))({
    bundle: !!bundle,
    ...accessibilityTemplate(format, ally),
  });
  const vars = {
    render,
    storeImports: fs.readFileSync(storeImportPath, 'utf8'),
    storeLoop: dot.template(fs.readFileSync(storeLoopPath, 'utf8'))({
      render,
    }),
    name,
  };
  const template = `
{{=it.topImports}}
{{=it.storeImports}}
{{=it.imports}}

describe('{{=it.name}}', () => {
{{=it.load}}
{{=it.storeLoop}}
  
});
`;
  return createTemplate({
    renderer,
    format,
    name,
    bundle,
    template,
    vars,
    ally,
    ...rest,
  });
};
