/* eslint-disable no-console */
import {
  ComponentControl,
  ComponentControls,
  ControlTypes,
} from '@component-controls/specification';

export interface PropType {
  defaultValue: { value?: string | boolean; computed: boolean };
  type: { name?: string };
  required: boolean;
  description: string;
}

export interface PropTypes {
  [key: string]: PropType;
}

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

export const controlFromProps = (
  name: string,
  propDef: PropType,
): ComponentControl | null => {
  if (!propDef) {
    return null;
  }
  let type = propDef.type.name;
  let splitType: string[] | undefined = undefined;
  // docgen typescript are ie "boolean | undefined"
  if (typeof type === 'string') {
    splitType = type.split(' | ');
    if (splitType.length > 1) {
      let found: string | undefined;
      // we have a typescrpit type definitio of "|" type
      for (let i = 0; i < splitType.length; i += 1) {
        const match = splitType[i];
        found = handledTypes.find(a => a === match);
        if (found !== undefined) {
          type = found;
          break;
        }
      }
      if (found === undefined) {
        type = 'enum';
      }
    }
  }
  function onClick() {
    // eslint-disable-next-line prefer-rest-params
    console.info(`${name}: `, arguments);
  }
  const defaultValue = propDef.defaultValue
    ? propDef.defaultValue.value
    : undefined;
  switch (type) {
    case 'string': {
      let value: string | undefined;
      if (typeof defaultValue === 'string') {
        value = defaultValue;
      }
      value = cleanQuotes(value);
      const isColor = name.toLowerCase().includes('color');
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
      if (defaultValue !== undefined) {
        // docgen typescript defaultValue.summary is actually a boolean type, not a string
        if (defaultValue === 'false' || (defaultValue as unknown) === false) {
          value = false;
        }
        if (defaultValue === 'true' || (defaultValue as unknown) === true) {
          value = true;
        }
      }
      return { type: ControlTypes.BOOLEAN, value };
    }
    case 'number': {
      let value;
      try {
        if (typeof defaultValue === 'string') {
          value = parseFloat(defaultValue);
        }
      } catch (e) {
        // eat exceptoin
      }
      return { type: ControlTypes.NUMBER, value };
    }
    case 'enum': {
      const value =
        typeof defaultValue === 'string'
          ? cleanQuotes(defaultValue)
          : undefined;
      const options = Array.isArray(propDef.type)
        ? propDef.type
        : splitType || (propDef.type as any).value;
      if (!Array.isArray(options)) {
        return null;
      }
      return {
        type: ControlTypes.OPTIONS,
        options: options.map((v: any) => cleanQuotes(v.value ? v.value : v)),
        value,
      };
    }
    // typescript callback function signature
    case '(() => void)':
    case 'func': {
      return {
        type: ControlTypes.BUTTON,
        label: name,
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

interface NamedComponentControl {
  name: string;
  control: ComponentControl | null;
}
export const controlsFromProps = (props: PropTypes): ComponentControls => {
  return Object.keys(props)
    .map((key: string) => ({
      name: key,
      control: controlFromProps(key, props[key]),
    }))
    .filter(p => p.control)
    .reduce(
      (acc: ComponentControls, prop: NamedComponentControl) => ({
        ...acc,
        [prop.name]: prop.control as any,
      }),
      {},
    );
};
