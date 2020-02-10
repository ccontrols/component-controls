/* eslint-disable no-console */
import {
  ComponentControls,
  ComponentControl,
  ControlTypes,
} from '@component-controls/specification';
import { PropDef } from '@storybook/components';
import {
  inferPropsExtractor,
  getInputRows,
} from '@storybook/addon-docs/blocks';

interface Parameters {
  [key: string]: any;
}
export interface SmartControlsConfig {
  include?: string[];
  exclude?: string[];
}
export type SmartControls = boolean | SmartControlsConfig;

const cleanQuotes = (txt?: string) => (txt ? txt.replace(/['"]+/g, '') : txt);

const handledTypes = [
  'boolean',
  'bool',
  'string',
  'number',
  'enum',
  'func',
  'shape',
  '(() => void)',
];
export const createFieldFromProps = (
  propDef: PropDef,
  smartControls: SmartControls,
): ComponentControl | null | undefined => {
  if (typeof smartControls === 'object') {
    const { include, exclude } = smartControls;
    if (Array.isArray(include) && !include.includes(propDef.name)) {
      return null;
    }
    if (Array.isArray(exclude) && exclude.includes(propDef.name)) {
      return null;
    }
  }
  if (!propDef) {
    return null;
  }
  //@ts-ignore
  let type = propDef.type.type || propDef.type.summary || propDef.type;

  // docgen typescript are ie "boolean | undefined"
  if (typeof type === 'string') {
    const splitType = type.split(' | ');
    if (splitType.length > 1) {
      // we have a typescrpit type definitio of "|" type
      for (let i = 0; i < splitType.length; i += 1) {
        const found = handledTypes.find(a => a === splitType[i]);
        if (found !== undefined) {
          type = found;
          break;
        }
      }
    }
  }
  function onClick() {
    // eslint-disable-next-line prefer-rest-params
    console.info(`${propDef.name}: `, arguments);
  }

  switch (type) {
    case 'string': {
      let value: string | undefined;
      if (typeof propDef.defaultValue === 'string') {
        value = propDef.defaultValue;
      } else if (
        propDef.defaultValue &&
        typeof propDef.defaultValue.summary === 'string'
      ) {
        value = propDef.defaultValue.summary;
      }
      value = cleanQuotes(value);
      const isColor = propDef.name.toLowerCase().includes('color');
      if (!value && propDef.required) {
        value = isColor ? 'red' : 'example';
      }
      return {
        type: isColor ? ControlTypes.COLOR : ControlTypes.TEXT,
        value,
      };
    }
    case 'boolean':
    case 'bool': {
      let value;
      if (propDef.defaultValue) {
        // docgen typescript defaultValue.summary is actually a boolean type, not a string
        if (
          propDef.defaultValue.summary === 'false' ||
          (propDef.defaultValue.summary as unknown) === false
        ) {
          value = false;
        }
        if (
          propDef.defaultValue.summary === 'true' ||
          (propDef.defaultValue.summary as unknown) === true
        ) {
          value = true;
        }
      }
      return { type: ControlTypes.BOOLEAN, value };
    }
    case 'number': {
      let value;
      try {
        value = propDef.defaultValue
          ? parseFloat(propDef.defaultValue.summary)
          : undefined;
      } catch (e) {
        // eat exceptoin
      }
      return { type: ControlTypes.NUMBER, value };
    }
    case 'enum': {
      const value = propDef.defaultValue
        ? cleanQuotes(propDef.defaultValue.summary)
        : undefined;
      const options = Array.isArray(propDef.type)
        ? propDef.type
        : (propDef.type as any).value;
      if (!Array.isArray(options)) {
        return null;
      }
      return {
        type: ControlTypes.OPTIONS,
        options: options.map((v: any) => cleanQuotes(v.value)),
        value,
      };
    }
    // typescript callback function signature
    case '(() => void)':
    case 'func': {
      return {
        type: ControlTypes.BUTTON,
        label: propDef.name,
        onClick,
        value: onClick,
      };
    }
    case 'shape': {
      /* let value;
      try {
        if (propDef.defaultValue && typeof propDef.defaultValue.summary === 'object') {
          value = JSON.parse(propDef.defaultValue.summary);
        }
      } catch (e) {
        // eat exception
      }
      */
      return null;
    }
    default:
      return null;
  }
};

export const extractSmartControls = (
  storyId: string,
  parameters: Parameters,
): ComponentControls | null => {
  const params = parameters || {};
  const { component, framework = null, controls = {} } = params;
  const { smart: smartControls } = controls;
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
  const props = extractProps(component);
  const rows = getInputRows(props);
  const smartProps = rows
    ? rows.reduce((acc: ComponentControls, row: PropDef) => {
        const field = createFieldFromProps(row, smartControls);
        if (field) {
          return { ...acc, [row.name]: field };
        }
        return acc;
      }, {})
    : null;
  return smartProps;
};
