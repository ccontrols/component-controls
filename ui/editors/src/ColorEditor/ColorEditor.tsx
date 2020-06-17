import React from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import { Button, Box } from 'theme-ui';
import { ComponentControlColor, ControlTypes } from '@component-controls/core';
import { PropertyEditor } from '../types';
import { useControlContext } from '../context';
import { addPropertyEditor } from '../prop-factory';

/**
 * Color control editor.
 */

export const ColorEditor: PropertyEditor = ({ name }) => {
  const { control, onChange } = useControlContext<ComponentControlColor>({
    name,
  });
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);

  const handleChange = (color: ColorResult) => {
    onChange(
      name,
      `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
    );
  };

  return (
    <Button
      name={name}
      onClick={() => setDisplayColorPicker(!displayColorPicker)}
      css={{
        paddingLeft: '10px',
        minHeight: '36px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        css={{
          left: 6,
          width: 16,
          height: 16,
          marginRight: 10,
          backgroundColor: control.value,
          borderRadius: '1rem',
        }}
      />
      {control.value && control.value.toUpperCase()}
      {displayColorPicker ? (
        <Box
          css={{
            top: '32px',
            position: 'absolute',
            zIndex: 3,
          }}
        >
          <Box
            css={{
              position: 'fixed',
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            }}
            onClick={() => setDisplayColorPicker(false)}
          />
          <SketchPicker color={control.value} onChange={handleChange} />
        </Box>
      ) : null}
    </Button>
  );
};

addPropertyEditor(ControlTypes.COLOR, ColorEditor);
