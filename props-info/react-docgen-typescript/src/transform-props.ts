import {
  PropTypes,
  PropType,
  TypeInformation,
  TypeValue,
} from '@component-controls/specification';
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
      prop.defaultValue = rdProp.defaultValue.value || rdProp.defaultValue;
    }
    const typeName = rdProp.type.name || '';
    let type: Partial<TypeInformation> = {};
    if (rdProp.required) {
      type.required = rdProp.required;
    }

    if (typeName === 'enum') {
      type.name = 'enum';
      type.value = rdProp.type.value.map(({ value }: any) => {
        const val = cleanQuotes(value);
        return {
          name: typeof val,
          value: val,
        };
      });
    } else if (typeName.endsWith('[]')) {
      type.name = 'array';
      type.value = [{ name: typeName.split('[]')[0] as TypeValue }];
    } else if (typeName.match(/\(([^)]+)\)/)) {
      type.name = 'function';
    } else if (typeName.match(/\{[^{}]*}/)) {
      type.name = 'object';
      type.raw = typeName;
    } else {
      const enumSplit = typeName.split(' | ');
      if (enumSplit.length > 1) {
        type.name = 'union';
        type.value = enumSplit.map(str => ({
          name: cleanQuotes(str),
        }));
      } else {
        type.name = typeName as TypeValue;
      }
    }
    const raw = rdProp.type.raw || typeName;
    if (type.name !== raw) {
      type.raw = raw;
    }
    prop.type = type as TypeInformation;
    return { ...acc, [name]: prop };
  }, {});
};
