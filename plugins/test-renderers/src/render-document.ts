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
  data?: Record<string, ExampleControls>,
): {
  rendered: ReturnType<FrameworkRenderFn>;
  name: string;
  values?: ExampleControls;
  dataId?: string;
}[] {
  const doc = props['default'] as Document<Props>;
  const results: ReturnType<typeof renderDocument> = [];
  Object.keys(props)
    .filter(key => key !== 'default')
    .forEach(key => {
      if (data?.[key]) {
        Object.keys(data[key]).forEach(dataId => {
          const values = data[key][dataId];
          results.push({
            rendered: renderExample<Props>({
              doc,
              example: props[key] as Example<Props>,
              config,
              values,
            }),
            dataId,
            values,
            name: props[key].name || key,
          });
        });
      } else {
        results.push({
          rendered: renderExample<Props>({
            doc,
            example: props[key] as Example<Props>,
            config,
          }),
          name: props[key].name || key,
        });
      }
    });
  return results;
}
