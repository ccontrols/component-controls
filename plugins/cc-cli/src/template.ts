import fs from 'fs';
import path from 'path';
import dot from 'dot';
import { defaultConfigFolder } from '@component-controls/core/node-utils';
import { prettify } from '@component-controls/instrument';
import { TemplateOptions, renderers } from './types';

dot.templateSettings.strip = false;
(dot as any).log = false;

export const createTemplate = (
  options: TemplateOptions & {
    storeRender: string;
    template: string;
    vars: Record<string, any>;
  },
): string => {
  const {
    name,
    template,
    renderer = 'rtl',
    format = 'cjs',
    config = path.resolve(process.cwd(), defaultConfigFolder),
    output,
    bundle,
    vars: customVars,
  } = options;
  const topImports = fs.readFileSync(
    path.resolve(__dirname, `../templates/top-imports/imports.${format}.js`),
    'utf8',
  );
  const importsPath = path.resolve(
    __dirname,
    `../templates/imports/${renderers[renderer]}.${format}.js`,
  );
  const store = bundle ? 'bundle' : 'imports';
  const loadPath = path.resolve(__dirname, `../templates/load/${store}.js`);

  const bundlePath =
    output && bundle ? `.${path.sep}${path.relative(output, bundle)}` : bundle;
  const configPath = output ? path.relative(output, config) : config;
  const vars = {
    topImports,
    imports: fs.readFileSync(importsPath, 'utf8'),
    configPath,
    utilityImports: fs.readFileSync(
      path.resolve(__dirname, `../templates/setups/imports.${format}.js`),
    ),
    setupTests: fs.readFileSync(
      path.resolve(__dirname, `../templates/setups/setup.${format}.js`),
    ),
    bundlePath,
    load: dot.template(fs.readFileSync(loadPath, 'utf8'))({
      bundlePath,
      configPath,
    }),
    name,
    ...customVars,
  };
  const content = dot.template(template)(vars);
  return prettify(content, {}, output);
};
