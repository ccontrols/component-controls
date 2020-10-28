import {
  PropTypes,
  PropType,
  TypeInformation,
  TypeValue,
} from '@component-controls/core';
import { Props, PropItem } from 'react-docgen-typescript';

const cleanQuotes = (txt?: string) =>
  typeof txt === 'string' ? txt.replace(/['"]+/g, '') : txt;

export const transformProps = (props: Props): PropTypes => {
  return Object.keys(props).reduce((acc, name) => {
    const rdProp: PropItem = props[name];
    const prop: Partial<PropType> = {};
    if (rdProp.description) {
      prop.description = rdProp.description;
    }
    if (rdProp.parent?.name) {
      prop.parentName = rdProp.parent?.name;
    }
    if (rdProp.defaultValue !== null && rdProp.defaultValue !== undefined) {
      prop.defaultValue = rdProp.defaultValue.value ?? rdProp.defaultValue;
    }
    const typeName = rdProp.type.name || '';
    const propType: Partial<TypeInformation> = {};
    if (rdProp.required) {
      propType.required = rdProp.required;
    }

    if (typeName === 'enum') {
      propType.name = 'enum';
      propType.value = rdProp.type.value.map(({ value }: any) => {
        const val = cleanQuotes(value);
        return {
          name: typeof val,
          value: val,
        };
      });
    } else if (typeName.endsWith('[]')) {
      propType.name = 'array';
      propType.value = [{ name: typeName.split('[]')[0] as TypeValue }];
    } else if (typeName.match(/\(([^)]+)\)/)) {
      propType.name = 'function';
    } else if (typeName.match(/\{[^{}]*}/)) {
      propType.name = 'object';
      propType.raw = typeName;
    } else {
      const enumSplit = typeName.split(' | ');
      if (enumSplit.length > 1) {
        propType.name = 'union';
        propType.value = enumSplit.map(str => ({
          name: cleanQuotes(str),
        }));
      } else {
        propType.name = typeName as TypeValue;
      }
    }
    if (propType.raw === undefined) {
      propType.raw = rdProp.type.raw || typeName;
    }
    prop.type = propType as TypeInformation;
    return { ...acc, [name]: prop };
  }, {});
};
