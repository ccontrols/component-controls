import React from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import { ComponentControlColor } from '@component-controls/specification';
import { Button, Box } from 'theme-ui';
import { PropertyControlProps, PropertyEditor } from '../types';

export interface ColorEditorProps extends PropertyControlProps {
  /**
   * the color property that is being edited.
   */
  prop: ComponentControlColor;
}

/**
 * Color control editor.
 */

export const ColorEditor: PropertyEditor<ColorEditorProps> = ({
  prop,
  name,
  onChange,
}) => {
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
        zIndex: 'unset',
        paddingLeft: '10px',
        minHeight: '36px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Box
        css={{
          left: 6,
          width: 16,
          height: 16,
          marginRight: 10,
          backgroundColor: prop.value,
          borderRadius: '1rem',
        }}
      />
      {prop.value && prop.value.toUpperCase()}
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
          <SketchPicker color={prop.value} onChange={handleChange} />
        </Box>
      ) : null}
    </Button>
  );
};
