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
  name?: string;
};
export const createTemplate = (options?: TemplateOptions): string => {
  const {
    renderer = 'rtl',
    format = 'cjs',
    configPath = path.resolve(process.cwd(), defaultConfigFolder),
    name = 'component-controls generated',
  } = options || {};
  const filePath = path.resolve(
    __dirname,
    `../templates/all-store.${format}.js`,
  );

  const importsPath = path.resolve(
    __dirname,
    `../templates/imports/${renderers[renderer]}.${format}.js`,
  );
  const renderPath = path.resolve(
    __dirname,
    `../templates/render/${renderers[renderer]}.${format}.js`,
  );

  const vars = {
    imports: fs.readFileSync(importsPath, 'utf8'),
    render: fs.readFileSync(renderPath, 'utf8'),
    configPath,
    name,
  };
  const content = fs.readFileSync(filePath, 'utf8');
  const template = dot.template(content)(vars);
  return template;
};
