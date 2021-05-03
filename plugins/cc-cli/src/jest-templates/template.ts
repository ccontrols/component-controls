import path from 'path';
import dot from 'dot';
import { defaultConfigFolder } from '@component-controls/core/node-utils';
import { prettify } from '@component-controls/instrument';
import { accessibilityTemplate } from './accessibily';
import { TemplateOptions, renderers } from '../types';
import { getTemplate } from '../templating/resolve-template';
dot.templateSettings.strip = false;
(dot as any).log = false;

/**
 * from a template, render all variables
 * @param options - rendering options
 * @returns a string with the rendered template
 */
export const createTemplate = (
  options: TemplateOptions & {
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
    ally,
    vars: customVars,
  } = options;
  const topImports = dot.template(getTemplate('top-imports/imports', format))(
    accessibilityTemplate(format, ally),
  );
  const store = bundle ? 'bundle' : 'imports';

  const bundlePath =
    output && bundle ? `.${path.sep}${path.relative(output, bundle)}` : bundle;
  const configPath = output ? path.relative(output, config) : config;
  const vars = {
    topImports,
    imports: getTemplate(`imports/${renderers[renderer]}`, format),
    configPath,
    bundlePath,
    load: dot.template(getTemplate(`load/${store}`, format))({
      bundlePath,
      configPath,
    }),
    name,
    ...customVars,
  };
  const content = dot.template(template)(vars);
  return prettify(content, {}, output);
};
