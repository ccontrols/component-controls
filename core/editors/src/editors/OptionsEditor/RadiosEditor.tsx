import React from 'react';
import styled from '@emotion/styled';
import { ComponentControlOptions } from '@component-controls/specification';
import { normalizeOptions, NormalizedOption } from './utils';
import { PropertyControlProps, PropertyEditor } from '../../types';

interface RadiosEditorProps extends PropertyControlProps {
  prop: ComponentControlOptions;
}

const RadiosWrapper = styled.div<{ isInline: boolean }>(({ isInline }) =>
  isInline
    ? {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '> * + *': {
          marginLeft: 10,
        },
      }
    : {},
);

const RadioLabel = styled.label({
  padding: '3px 0 3px 5px',
  lineHeight: '18px',
  display: 'inline-block',
});

export const RadiosEditor: PropertyEditor<RadiosEditorProps> = ({
  prop,
  name,
  onChange,
}) => {
  const renderRadioButton = (entry: NormalizedOption) => {
    const id = `${entry.label}-${entry.value}`;
    return (
      <div key={id}>
        <input
          type="radio"
          id={id}
          name={entry.label}
          value={entry.value}
          onChange={e => onChange(name, e.target.value)}
          checked={
            entry.value === prop.value ||
            (typeof entry.value.toString === 'function' &&
              entry.value.toString() === prop.value)
          }
        />
        <RadioLabel htmlFor={id}>{entry.label}</RadioLabel>
      </div>
    );
  };
  const renderRadioButtonList = () => {
    const { options, value } = prop;
    const { entries } = normalizeOptions(options, value);
    return entries.map(entry => renderRadioButton(entry));
  };
  const isInline = prop.display === 'inline-radio';
  return (
    <RadiosWrapper isInline={isInline}>{renderRadioButtonList()}</RadiosWrapper>
  );
};
