import { ComponentControls } from '@component-controls/specification';
import { controlsFromProps } from '@component-controls/core';

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

export const docgenToControls = (
  parameters: Parameters,
): ComponentControls | null => {
  const params = parameters || {};
  const { component, addonControls = {} } = params;
  const { smart: smartControls } = addonControls;
  if (!smartControls) {
    return null;
  }
  if (!component) {
    return null;
  }
  if (component.__docgenInfo && component.__docgenInfo.props) {
    const newControls = controlsFromProps(component.__docgenInfo.props);
    const { include, exclude } = smartControls;
    if (Array.isArray(include) || Array.isArray(exclude)) {
      return Object.keys(newControls)
        .filter(key => {
          if (Array.isArray(include) && !include.includes(key)) {
            return false;
          }
          if (Array.isArray(exclude) && exclude.includes(key)) {
            return false;
          }
          return true;
        })
        .reduce((acc, key) => ({ ...acc, [key]: newControls[key] }), {});
    }
    return newControls;
  }
  return null;
};
