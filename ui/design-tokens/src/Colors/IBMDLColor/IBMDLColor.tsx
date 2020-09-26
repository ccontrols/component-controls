/** @jsx jsx */
import { FC, ReactNode, useState } from 'react';
import { jsx } from 'theme-ui';
import {
  CopyContainer,
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from '@component-controls/components';
import simpleColorConverter from 'simple-color-converter';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { FlexContainerProps, FlexContainer } from '../../components';

export const COLOR_OPTIONS = ['hex', 'rgb', 'pms', 'cmyk'] as const;

type ColorDisplayTuple = typeof COLOR_OPTIONS;
export type ColorDisplay = ColorDisplayTuple[number];

export type IBMDLColorProps = ColorBlockProps & { display: ColorDisplay };
/**
 * Color item displaying the color as a row with the color name and display option of hex, rgb, pms or cmyk color display.
 * Design inspired from IBM's [Design Language](https://www.ibm.com/design/language/color).
 */

export const IBMDLColor: FC<IBMDLColorProps> = ({
  name,
  color,
  display = 'hex',
}) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue } = colorObj;

  const { hex, rgba } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  const displayColor = () => {
    switch (display) {
      case 'hex':
        return hex.split('#')[1];
      case 'rgb':
        return `r${rgba.r} g${rgba.g} b${rgba.b}${
          rgba.a !== 1 ? ` a${rgba.a.toFixed(2)}` : ''
        }`;
      case 'pms':
        const { color: pms } = new simpleColorConverter({
          rgba,
          to: 'pantone',
        });
        return pms.split('C')[0];
      case 'cmyk':
        const { color: cmyk } = new simpleColorConverter({
          rgba,
          to: 'cmyk',
        });
        return `c${cmyk.c} m${cmyk.m} y${cmyk.y} k${cmyk.k}`;
    }
  };
  return (
    <div sx={{ display: 'flex', flex: '1' }}>
      <CopyContainer value={hex} name={name} sxStyle={{ width: '100%' }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            bg: colorValue,
            color: textColor,
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 1,
            transition: 'all .2s',
            px: 3,
          }}
        >
          <div>{name}</div>
          <div>{displayColor()}</div>
        </div>
      </CopyContainer>
    </div>
  );
};

/**
 *
 * palette displayed with FishTankColor items
 * using a css flex display direction column
 */
export const IBMDLColorPalette: FC<Omit<
  FlexContainerProps,
  'children' | 'direction'
> & { display: ColorDisplay }> = ({ display, ...props }) => (
  <FlexContainer direction="column" {...props}>
    {({ name, value }) => (
      <IBMDLColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
        display={display}
      />
    )}
  </FlexContainer>
);

export const ColorTabs: FC<{
  children: (display: ColorDisplay) => ReactNode;
}> = ({ children }) => {
  const [display, setDisplay] = useState(0);
  return (
    <Tabs selectedIndex={display} onSelect={index => setDisplay(index)}>
      <TabList>
        {COLOR_OPTIONS.map(display => (
          <Tab key={`tab_${display}`}>{display.toUpperCase()}</Tab>
        ))}
      </TabList>
      {COLOR_OPTIONS.map(display => (
        <TabPanel key={`tab_panel_${display}`} />
      ))}
      {children(COLOR_OPTIONS[display])}
    </Tabs>
  );
};
