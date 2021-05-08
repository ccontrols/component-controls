import dot from 'dot';
import { createTemplate } from './template';
import { accessibilityTemplate } from './accessibily';
import { TemplateOptions, renderers, TemplateFunction } from '../utils';
import { getTemplate } from '../resolve-template';

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
  const render = dot.template(
    getTemplate(`framework-render/${renderers[renderer]}`, format),
  )({
    bundle: !!bundle,
    ...accessibilityTemplate(format, ally),
  });
  const vars = {
    storeImports: getTemplate(`store/import/${store}`, format),
    storeLoop: dot.template(getTemplate(`store/loop/${store}`, format))({
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
