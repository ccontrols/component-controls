import fs from 'fs';
import path from 'path';
import dot from 'dot';
import { TemplateOptions, renderers, TemplateFunction } from './types';
import { createTemplate } from './template';

dot.templateSettings.strip = false;
(dot as any).log = false;

export const createStoreTemplate: TemplateFunction = async (
  options: TemplateOptions,
) => {
  const {
    renderer = 'rtl',
    format = 'cjs',
    name = 'component-controls generated',
    bundle,
    ...rest
  } = options;

  const store = bundle ? 'bundle' : 'imports';
  const storeRenderPath = path.resolve(
    __dirname,
    `../templates/store/render/${store}.js`,
  );
  const storeRender = fs.readFileSync(storeRenderPath, 'utf8');
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
    `../templates/framework-render/${renderers[renderer]}.js`,
  );
  const render = dot.template(fs.readFileSync(renderPath, 'utf8'))({
    storeRender,
  });
  const vars = {
    render,
    storeRender,
    storeImports: fs.readFileSync(storeImportPath, 'utf8'),
    storeLoop: dot.template(fs.readFileSync(storeLoopPath, 'utf8'))({
      render,
    }),
    name,
  };
  const template = `
{{=it.topImports}}
{{=it.utilityImports}}
{{=it.storeImports}}
{{=it.imports}}

describe('{{=it.name}}', () => {
{{=it.setupTests}}
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
    storeRender,
    vars,
    ...rest,
  });
};
