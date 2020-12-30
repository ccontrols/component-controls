/** @jsx jsx */
import { useState } from 'react';
import {
  HexColorPicker,
  HslaStringColorPicker,
  HslStringColorPicker,
  RgbStringColorPicker,
  RgbaStringColorPicker,
} from 'react-colorful';
import { jsx, Button, Box, BoxProps, Theme } from 'theme-ui';
import { Popover } from '@component-controls/components';
import { ComponentControlColor, ControlTypes } from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { PropertyEditor } from '../types';
import { addPropertyEditor } from '../prop-factory';

const sxProps: BoxProps['sx'] = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  height: 200,
  userSelect: 'none',
  cursor: 'default',

  '.react-colorful__saturation': {
    position: 'relative',
    flexGrow: 1,
    borderBottom: (t: Theme) => `12px solid ${t.colors?.text}`,
    borderRadius: '8px 8px 0 0',
    backgroundImage: (t: Theme) =>
      `linear-gradient(to top,  ${t.colors?.text}, rgba(0, 0, 0, 0)), linear-gradient(to right,  ${t.colors?.text}, rgba(255, 255, 255, 0))`,
  },

  '.react-colorful__pointer-fill, .react-colorful__alpha-gradient': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    borderRadius: 'inherit',
  },

  /* Improve elements rendering on light backgrounds */
  '.react-colorful__alpha-gradient, .react-colorful__saturation': {
    boxShadow: (t: Theme) => `inset 0 0 0 1px ${t.colors?.shadow}`,
  },

  '.react-colorful__hue, .react-colorful__alpha': {
    position: 'relative',
    height: 24,
  },

  '.react-colorful__hue': {
    background:
      'linear-gradient( to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
  },

  /* Round bottom corners of the last element: `Hue` for `ColorPicker` or `Alpha` for `AlphaColorPicker` */
  '.react-colorful__last-control': {
    borderRadius: '0 0 8px 8px',
  },

  '.react-colorful__interactive': {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    outline: 'none',
    /* Don't trigger the default scrolling behavior when the event is originating from this element */
    touchAction: 'none',
  },

  '.react-colorful__pointer': {
    position: 'absolute',
    zIndex: 1,
    boxSizing: 'border-box',
    width: 28,
    height: 28,
    transform: 'translate(-50%, -50%)',
    bg: 'background',
    border: (t: Theme) => `2px solid ${t?.colors?.background}`,
    borderRadius: '50%',
    boxShadow: (t: Theme) => `0 2px 4px ${t.colors?.shadow}`,
  },

  '.react-colorful__interactive:focus .react-colorful__pointer': {
    transform: 'translate(-50%, -50%) scale(1.1)',
  },

  /* Chessboard-like pattern for alpha related elements */
  '.react-colorful__alpha, .react-colorful__alpha-pointer': {
    bg: 'white',
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>')`,
  },

  /* Display the saturation pointer over the hue one */
  '.react-colorful__saturation-pointer': {
    zIndex: 3,
  },

  /* Display the hue pointer over the alpha one */
  '.react-colorful__hue-pointer': {
    zIndex: 2,
  },
};

/**
 * Color control editor.
 */

export const ColorEditor: PropertyEditor = ({ name }) => {
  const [control, onChange] = useControl<ComponentControlColor>(name);
  const [isOpen, setIsOpen] = useState(false);
  const { kind } = control;
  const handleChange = (color: string) => {
    onChange(color);
  };
  let ColorPicker: typeof HexColorPicker;
  switch (kind) {
    case 'hex':
    default:
      ColorPicker = HexColorPicker;
      break;
    case 'rgb': {
      ColorPicker = RgbStringColorPicker;

      break;
    }
    case 'rgba': {
      ColorPicker = RgbaStringColorPicker;
      break;
    }
    case 'hsl': {
      ColorPicker = HslStringColorPicker;
      break;
    }
    case 'hsla': {
      ColorPicker = HslaStringColorPicker;
      break;
    }
  }

  return (
    <Popover
      trigger="click"
      placement="bottom"
      tooltipShown={isOpen}
      onVisibilityChange={(isVisible: boolean) => {
        setIsOpen(isVisible);
      }}
      tooltip={() => (
        <Box sx={{ p: 2 }}>
          <ColorPicker
            sx={sxProps}
            color={control.value}
            onChange={handleChange}
          />
        </Box>
      )}
    >
      <Button
        css={{
          paddingLeft: '10px',
          minHeight: '36px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
        }}
        aria-label="edit the selected color"
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
        {typeof control.value === 'string' && control.value}
        <Box />
      </Button>
    </Popover>
  );
};

addPropertyEditor(ControlTypes.COLOR, ColorEditor);
