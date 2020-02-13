import { ComponentControls } from '@component-controls/specification';
import { controlsFromProps } from '@component-controls/core';
/* 
import { controlFromProps, controlsFromProps } from '@component-controls/core';
import {
  inferPropsExtractor,
  getInputRows,
} from '@storybook/addon-docs/blocks';
 */
export interface PropDef {
  name: string;
  required: boolean;
  type?:
    | string
    | {
        type: string;
        summary: string;
      };
  defaultValue?:
    | string
    | boolean
    | {
        summary: string;
      };
}

interface Parameters {
  [key: string]: any;
}
export interface SmartControlsConfig {
  include?: string[];
  exclude?: string[];
}
export type SmartControls = boolean | SmartControlsConfig;

/* const extractSmartControls = (
  storyId: string,
  parameters: Parameters,
): ComponentControls | null => {
  const params = parameters || {};
  const { component, framework = null, addonControls = {} } = params;
  const { smart: smartControls } = addonControls;
  if (!smartControls) {
    return null;
  }
  if (!component) {
    return null;
  }
  // check if mdx has parameters from mdx-compiler
  const mdxStoryHasParameters =
    params && params.mdxParams && params.mdxParams.length > 0;
  // check if story has parameters from source-loader
  const storyHasParameters =
    params &&
    params.storySource &&
    params.storySource.locationsMap &&
    params.storySource.locationsMap[storyId] &&
    params.storySource.locationsMap[storyId].params &&
    params.storySource.locationsMap[storyId].params.length > 0;
  if (!mdxStoryHasParameters && !storyHasParameters) {
    return null;
  }
  const {
    extractProps = inferPropsExtractor(framework),
  }: { extractProps: any } = params.docs || {};
  if (!extractProps) {
    return null;
  }
  const { include, exclude } = smartControls;
  const props = extractProps(component);
  const rows = getInputRows(props);
  const smartProps = rows
    ? rows.reduce((acc: ComponentControls, row: PropDef) => {
        if (typeof smartControls === 'object') {
          if (Array.isArray(include) && !include.includes(row.name)) {
            return acc;
          }
          if (Array.isArray(exclude) && exclude.includes(row.name)) {
            return acc;
          }
        }
        const field = controlFromProps(row.name, {
          defaultValue: {
            value:
              typeof row.defaultValue === 'object'
                ? row.defaultValue.summary
                : row.defaultValue,
            computed: false,
          },
          required: row.required,
          description: '',
          type: {
            name:
              typeof row.type === 'object'
                ? row.type.type || row.type?.summary
                : row.type,
          },
        });
        if (field) {
          return { ...acc, [row.name]: field };
        }
        return acc;
      }, {})
    : null;
  return smartProps;
};
 */
export const docgenToControls = (
  parameters: Parameters,
): ComponentControls | null => {
  const { component } = parameters || {};
  if (component && component.__docgenInfo && component.__docgenInfo.props) {
    return controlsFromProps(component.__docgenInfo.props);
  }
  return null;
};
