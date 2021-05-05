import {
  Example,
  Document,
  ExampleControls,
  FrameworkRenderFn,
  RunConfiguration,
} from '@component-controls/core';
import { renderExample } from './render-example';

/**
 * returns an array of the rendered all stories(examples) imports from a document using a test framework.
 * @param param0 inputs as example, doc, project folder and a selected test rendering framework
 * @returns an array of the rendered examples
 */

export function renderDocument<Props = any>(
  props: {
    [prop: string]: Document<Props> | Example<Props>;
  },
  config: string | RunConfiguration,
  values?: Record<string, ExampleControls>,
): { rendered: ReturnType<FrameworkRenderFn>; name: string }[] {
  const doc = props['default'] as Document<Props>;
  return Object.keys(props)
    .filter(key => key !== 'default')
    .map(key => ({
      rendered: renderExample<Props>({
        doc,
        example: props[key] as Example<Props>,
        config,
        values: values?.[key],
      }),
      name: props[key].name || key,
    }));
}
