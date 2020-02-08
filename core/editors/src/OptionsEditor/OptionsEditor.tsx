import React from 'react';
import ReactSelect from 'react-select';
import { styled } from '@storybook/theming';
import { ComponentControlOptions } from '@component-controls/specification';
import { normalizeOptions } from './utils';
import { PropertyControlProps, PropertyEditor } from '../types';

import { RadiosEditor } from './RadiosEditor';
import { CheckboxEditor } from './CheckboxEditor';

const OptionsSelect = styled(ReactSelect)({
  color: 'black',
  flexBasis: '100%',
});

type ReactSelectOnChangeFn =
  | { (v: OptionsSelectValueItem): void }
  | { (v: OptionsSelectValueItem[]): void };

interface OptionsSelectValueItem {
  value: any;
  label: string;
}

export interface OptionsEditorProps extends PropertyControlProps {
  prop: ComponentControlOptions;
}

export const OptionsEditor: PropertyEditor<OptionsEditorProps> = props => {
  const { prop, name, onChange } = props;
  const { display, options, value } = prop;

  if (display === 'check' || display === 'inline-check') {
    return <CheckboxEditor {...props} />;
  }

  if (display === 'radio' || display === 'inline-radio') {
    return <RadiosEditor {...props} />;
  }

  if (
    display === undefined ||
    display === 'select' ||
    display === 'multi-select'
  ) {
    const { entries, selected } = normalizeOptions(options, value);
    const isMulti = display === 'multi-select';
    let handleChange: ReactSelectOnChangeFn = (e: OptionsSelectValueItem) =>
      onChange(name, e.value);

    if (isMulti) {
      handleChange = (values: OptionsSelectValueItem[]) =>
        onChange(
          name,
          values.map(item => item.value),
        );
    }
    const selectValue = entries.filter(op => selected.includes(op.value));
    return (
      <OptionsSelect
        value={selectValue}
        options={entries}
        isMulti={isMulti}
        onChange={handleChange}
      />
    );
  }

  return null;
};
