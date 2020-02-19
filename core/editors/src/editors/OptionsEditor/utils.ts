import {
  OptionsListType,
  OptionsValueType,
} from '@component-controls/specification';

export interface NormalizedOption {
  label: string;
  value: any;
}
export type NormalizedOptions = NormalizedOption[];

export const normalizeOptions = (
  options: OptionsListType,
  propValue: OptionsValueType,
): {
  entries: NormalizedOptions;
  selected: any[];
} => {
  const findLabelOption = (
    label: string | null,
    value: any,
  ): NormalizedOption => {
    if (!value) {
      return {
        label: label || value,
        value,
      };
    }

    const val = value.value || value;
    if (typeof value !== 'object' || value === null)
      return { label: label || val, value: val };
    const vLabel: string = value.label || label || val;
    return {
      label: vLabel,
      value: val,
    };
  };

  let entries: NormalizedOptions;
  if (Array.isArray(options)) {
    entries = options.reduce((acc: NormalizedOptions, o) => {
      return [...acc, findLabelOption(null, o)];
    }, []) as NormalizedOptions;
  } else if (typeof options === 'object') {
    entries = Object.keys(options).reduce(
      (acc: NormalizedOptions, key: string) => {
        return [...acc, findLabelOption(key, options[key])];
      },
      [],
    );
  } else {
    console.error('invalid options parameter passed to controls');
    return {
      entries: [],
      selected: [],
    };
  }
  const selected = entries
    .filter(option => {
      if (Array.isArray(propValue)) {
        return propValue.findIndex((v: any) => v === option.value) >= 0;
      }
      return option.value === propValue;
    })
    .map(e => e.value);
  return { selected, entries };
};
