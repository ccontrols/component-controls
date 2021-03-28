import fs from 'fs';
import path from 'path';
import dot from 'dot';
import { defaultConfigFolder } from '@component-controls/core/node-utils';
import { Renderers, TeplateFormats, renderers } from './types';

dot.templateSettings.strip = false;
(dot as any).log = false;

export type TemplateOptions = {
  renderer?: Renderers;
  format?: TeplateFormats;
  configPath?: string;
  bundle?: string;
  out?: string;
  name?: string;
};
export const createTemplate = (options?: TemplateOptions): string => {
  const {
    renderer = 'rtl',
    format = 'cjs',
    configPath: config = path.resolve(process.cwd(), defaultConfigFolder),
    name = 'component-controls generated',
    out,
    bundle,
  } = options || {};
  const filePath = path.resolve(
    __dirname,
    `../templates/all-store.${format}.js`,
  );

  const importsPath = path.resolve(
    __dirname,
    `../templates/imports/${renderers[renderer]}.${format}.js`,
  );
  const store = bundle ? 'bundle' : 'imports';
  const storeImportPath = path.resolve(
    __dirname,
    `../templates/store-import/${store}.${format}.js`,
  );
  const storeLoopPath = path.resolve(
    __dirname,
    `../templates/store-loop/${store}.${format}.js`,
  );
  const storeRenderPath = path.resolve(
    __dirname,
    `../templates/store-render/${store}.${format}.js`,
  );
  const storeRender = fs.readFileSync(storeRenderPath, 'utf8');
  const renderPath = path.resolve(
    __dirname,
    `../templates/render/${renderers[renderer]}.${format}.js`,
  );
  const render = dot.template(fs.readFileSync(renderPath, 'utf8'))({
    storeRender,
  });
  const bundlePath =
    out && bundle ? `.${path.sep}${path.relative(out, bundle)}` : bundle;
  const configPath = out ? path.relative(out, config) : config;
  const vars = {
    imports: fs.readFileSync(importsPath, 'utf8'),
    render,
    configPath,
    storeRender,
    storeImports: fs.readFileSync(storeImportPath, 'utf8'),
    bundlePath,
    storeLoop: dot.template(fs.readFileSync(storeLoopPath, 'utf8'))({
      render,
      bundlePath,
      configPath,
    }),
    name,
  };
  const content = fs.readFileSync(filePath, 'utf8');
  const template = dot.template(content)(vars);
  return template;
};
