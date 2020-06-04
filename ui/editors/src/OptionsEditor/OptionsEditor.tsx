/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  ComponentControlOptions,
  ControlTypes,
} from '@component-controls/specification';
import { PropertyEditor } from '../types';
import { useControlContext } from '../context';
import { RadiosEditor } from './RadiosEditor';
import { CheckboxEditor } from './CheckboxEditor';
import { addPropertyEditor } from '../prop-factory';

/**
 * Options control editor.
 */

export const OptionsEditor: PropertyEditor = ({ name, ...rest }) => {
  const { control } = useControlContext<ComponentControlOptions>({
    name,
  });
  const { display } = control;

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
    return (
      <select
        sx={{
          color: 'black',
          flexBasis: '100%',
        }}
      />
    );
  }

  return null;
};

addPropertyEditor(ControlTypes.OPTIONS, OptionsEditor);
