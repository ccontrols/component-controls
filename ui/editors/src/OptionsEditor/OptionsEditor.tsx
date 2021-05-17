/** @jsx jsx */
import { FC, ChangeEvent } from 'react';
import { jsx, Select, SelectProps } from 'theme-ui';
import {
  ComponentControlOptions,
  ControlTypes,
} from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { normalizeOptions } from './utils';
import { PropertyEditor } from '../types';
import { RadiosEditor } from './RadiosEditor';
import { CheckboxEditor } from './CheckboxEditor';
import { addPropertyEditor } from '../prop-factory';

const OptionsSelect: FC<SelectProps> = props => (
  <Select
    sx={{
      color: 'black',
      flexBasis: '100%',
    }}
    {...props}
  />
);

/**
 * Options control editor.
 */

export const OptionsEditor: PropertyEditor = ({ name, ...rest }) => {
  const [control, onChange] = useControl<ComponentControlOptions>(name);
  const { display, options, value } = control;

  if (display === 'check' || display === 'inline-check') {
    return <CheckboxEditor name={name} {...rest} />;
  }

  if (display === 'radio' || display === 'inline-radio') {
    return <RadiosEditor name={name} {...rest} />;
  }

  if (
    display === undefined ||
    display === 'select' ||
    display === 'multi-select'
  ) {
    const { entries, selected } = normalizeOptions(options, value);
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
      onChange(e.target.value);

    const selectValue = entries.filter(op => selected.includes(op.value));
    const v: string = selectValue.length ? selectValue[0].value : '';
    return (
      <OptionsSelect value={v} onChange={handleChange} {...rest}>
        {entries.map((entry, idx) => (
          <option key={entry.value || `option_key_${idx}`} value={entry.value}>
            {entry.label}
          </option>
        ))}
      </OptionsSelect>
    );
  }

  return null;
};

addPropertyEditor(ControlTypes.OPTIONS, OptionsEditor);
