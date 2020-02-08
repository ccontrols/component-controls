import React from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import { ComponentControlColor } from '@component-controls/specification';

import { styled } from '@storybook/theming';
import { Form } from '@storybook/components';

import { PropertyControlProps, PropertyEditor } from '../types';

interface ColorButtonProps {
  name: string;
  type: string;
  size: string;
  width: string;
  onClick: () => any;
}

const { Button } = Form;

const Swatch = styled.div<{ color: string | undefined }>(
  ({ theme, color }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 6,
    width: 16,
    height: 16,
    backgroundColor: color,
    boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`,
    borderRadius: '1rem',
  }),
);

const ColorButton = styled(Button)<ColorButtonProps>(() => ({
  zIndex: 'unset',
  paddingLeft: '40px',
  minHeight: '36px',
  display: 'flex',
  flexBasis: '100%',
}));

const Popover = styled.div({
  position: 'absolute',
  zIndex: 3,
});

const Cover = styled.div({
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
});

export interface ColorEditorProps extends PropertyControlProps {
  prop: ComponentControlColor;
}

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
    <ColorButton
      active={displayColorPicker}
      type="button"
      name={name}
      onClick={() => setDisplayColorPicker(!displayColorPicker)}
      size="flex"
    >
      {prop.value && prop.value.toUpperCase()}
      <Swatch color={prop.value} />
      {displayColorPicker ? (
        <Popover>
          <Cover onClick={() => setDisplayColorPicker(false)} />
          <SketchPicker color={prop.value} onChange={handleChange} />
        </Popover>
      ) : null}
    </ColorButton>
  );
};
