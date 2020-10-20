/** @jsx jsx */
import React, { ReactNode } from 'react';
import {
  HexColorPicker,
  HslaColorPicker,
  HslColorPicker,
  RgbColorPicker,
  RgbaColorPicker,
} from 'react-colorful';
import { jsx, Button, Box, SxStyleProp } from 'theme-ui';
import tinycolor from 'tinycolor2';
import { Popover } from '@component-controls/components';
import { ComponentControlColor, ControlTypes } from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { PropertyEditor } from '../types';
import { addPropertyEditor } from '../prop-factory';

const sxProps: SxStyleProp = {
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
    borderBottom: '12px solid #000',
    borderRadius: '8px 8px 0 0',
    backgroundImage:
      'linear-gradient(to top, #000, rgba(0, 0, 0, 0)), linear-gradient(to right, #fff, rgba(255, 255, 255, 0));',
  },
  '.react-colorful__alpha>div': {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  '.react-colorful__alpha:after, .react-colorful__saturation-pointer>div, .react-colorful__hue-pointer>div, .react-colorful__alpha-pointer>div': {
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
  '.react-colorful__alpha:after, .react-colorful__saturation': {
    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.05)',
  },

  '.react-colorful__hue, .react-colorful__alpha': {
    position: 'relative',
    height: 24,
  },

  '.react-colorful__hue': {
    background:
      'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
  },

  /* Round bottom corners of the last element: `Hue` for `ColorPicker` or `Alpha` for `AlphaColorPicker` */
  '.react-colorful__lastControl': {
    borderRadius: '0 0 8px 8px',
  },

  'div[role=slider]': {
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

  'div[role=slider]:focus .react-colorful__saturation-pointer, div[role=slider]:focus .react-colorful__hue-pointer, div[role=slider]:focus .react-colorful__alpha-pointer': {
    transform: 'translate(-50%, -50%) scale(1.1)',
  },

  '.react-colorful__saturation-pointer, .react-colorful__hue-pointer, .react-colorful__alpha-pointer': {
    position: 'absolute',
    zIndex: 1,
    boxSizing: 'border-box',
    width: 28,
    height: 28,
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    border: '2px solid #fff',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },

  /* Chessboard-like pattern for alpha related elements */
  '.react-colorful__alpha': {
    backgroundColor: '#fff',
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
  const [isOpen, setIsOpen] = React.useState(false);
  const { kind } = control;
  const handleChange = (color: string) => {
    onChange(color);
  };
  const color = tinycolor(control.value);
  let colorPicker: ReactNode;
  switch (kind) {
    case 'hex':
    default:
      colorPicker = (
        <HexColorPicker
          sx={sxProps}
          color={control.value}
          onChange={handleChange}
        />
      );

      break;
    case 'rgb': {
      colorPicker = (
        <RgbColorPicker
          sx={sxProps}
          color={color.toRgb()}
          onChange={({ r, g, b }) =>
            handleChange(
              `rgb(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`,
            )
          }
        />
      );

      break;
    }
    case 'rgba': {
      colorPicker = (
        <RgbaColorPicker
          sx={sxProps}
          color={color.toRgb()}
          onChange={({ r, g, b, a }) =>
            handleChange(
              `rgba(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(
                0,
              )}, ${a.toFixed(2)})`,
            )
          }
        />
      );
      break;
    }
    case 'hsl': {
      const hsl = color.toHsl();
      colorPicker = (
        <HslColorPicker
          sx={sxProps}
          color={{ h: hsl.h, s: hsl.s * 100, l: hsl.l * 100 }}
          onChange={({ h, s, l }) =>
            handleChange(
              `hsl(${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%)`,
            )
          }
        />
      );
      break;
    }
    case 'hsla': {
      const hsl = color.toHsl();
      colorPicker = (
        <HslaColorPicker
          sx={sxProps}
          color={{ h: hsl.h, s: hsl.s * 100, l: hsl.l * 100, a: hsl.a }}
          onChange={({ h, s, l, a }) =>
            handleChange(
              `hsla(${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(
                0,
              )}%, ${a.toFixed(2)})`,
            )
          }
        />
      );
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
      tooltip={() => <Box sx={{ p: 2 }}>{colorPicker}</Box>}
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
