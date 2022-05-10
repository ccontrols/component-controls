/* eslint-disable no-console */
import { ComponentControl, ComponentControls, ControlTypes } from './controls';
import { PropType, PropTypes } from './components';
import {
  hasValue,
  isBooleanProp,
  isEnumProp,
  isFunctionProp,
  isNumberProp,
  isStringProp,
  isUnionProp,
  isClassLikeProp,
} from '@structured-types/api';

export const controlFromProps = (
  name: string,
  prop: PropType,
): ComponentControl | null => {
  if (!prop) {
    return null;
  }

  let value = hasValue(prop) ? prop.value : undefined;
  if (isStringProp(prop)) {
    const isColor = name.toLowerCase().includes('color');
    if (!value && !prop.optional) {
      value = isColor ? 'red' : 'example';
    }
    return {
      type: isColor ? ControlTypes.COLOR : ControlTypes.TEXT,
      value,
    };
  } else if (isBooleanProp(prop)) {
    return { type: ControlTypes.BOOLEAN, value };
  } else if (isNumberProp(prop)) {
    return { type: ControlTypes.NUMBER, value };
  } else if (isEnumProp(prop)) {
    const options =
      prop.properties &&
      prop.properties.map(p => (hasValue(p) ? p.value : p.name));
    if (!Array.isArray(options)) {
      return null;
    }

    return {
      type: ControlTypes.OPTIONS,
      options,
      value,
    };
  } else if (isUnionProp(prop)) {
    const options =
      prop.properties &&
      prop.properties.map(p => (hasValue(p) ? p.value : p.name));
    if (!Array.isArray(options)) {
      return null;
    }

    return {
      type: ControlTypes.OPTIONS,
      options,
      value,
    };
  } else if (isFunctionProp(prop)) {
    function onClick() {
      // eslint-disable-next-line prefer-rest-params
      console.info(`${name}: `, arguments);
    }
    return {
      type: ControlTypes.BUTTON,
      label: name,
      onClick,
      value: onClick,
    };
  } else if (isClassLikeProp(prop)) {
    return null;
  }
  return null;
};

interface NamedComponentControl {
  name: string;
  control: ComponentControl | null;
}
export const controlsFromProps = (props: PropTypes): ComponentControls => {
  return props
    ? Object.keys(props)
        .map((key: string) => {
          const prop = props[key];
          const control = controlFromProps(key, prop);
          if (control) {
            control.defaultValue = control.value;
          }
          return {
            deprecated: prop.deprecated,
            name: key,
            control,
          };
        })
        .filter(p => !p.deprecated && p.control)
        .reduce(
          (acc: ComponentControls, prop: NamedComponentControl) => ({
            ...acc,
            [prop.name]: prop.control as any,
          }),
          {},
        )
    : {};
};
