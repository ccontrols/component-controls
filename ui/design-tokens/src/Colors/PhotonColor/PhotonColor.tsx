/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import tinycolor from 'tinycolor2';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable, contrastGrade } from '../utils';
import {
  ColorBlockProps,
  ColorValue,
  defaultBlackTextColor,
  defaultWhiteTextColor,
  ThemeColorProps,
} from '../../types';
import {
  TableContainerProps,
  TableContainer,
  TableRowContainer,
} from '../../containers';

/**
 * Color item displaying as a row, with a color block, name, hex value and AA/AAA tests for text and backgorund.
 * Design inspired by Firefox's [Photon Design System](https://design.firefox.com/photon/visuals/color.html).
 */
export const PhotonColor: FC<ColorBlockProps> = props => (
  <TableRowContainer>
    <BasePhotonColor {...props} />
  </TableRowContainer>
);

const BasePhotonColor: FC<ColorBlockProps> = ({
  name,
  color,
  blackTextColor = defaultBlackTextColor,
  whiteTextColor = defaultWhiteTextColor,
}) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color, name } : color;
  const { value: colorValue, name: colorName = name } = colorObj;

  const { hex } = colorToStr(colorValue);
  const contrastColor = mostReadable(hex);
  const contrast = tinycolor.readability(hex, blackTextColor);
  const grade = contrastGrade(contrast);
  const contrastText = tinycolor.readability(whiteTextColor, hex);
  const gradeText = contrastGrade(contrastText);

  return (
    <tr>
      <td>
        <CopyContainer
          value={hex}
          name={name}
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <div
            sx={{
              height: 35,
              width: 35,
              bg: colorValue,
              mr: 2,
            }}
          />
          <div>{colorName}</div>
        </CopyContainer>
      </td>
      <td>
        <CopyContainer value={hex} name={name}>
          <code
            sx={{
              bg: 'gray',
              border: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
              px: 1,
            }}
          >
            {hex}
          </code>
        </CopyContainer>
      </td>
      <td>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div sx={{ bg: hex, color: contrastColor, px: 1 }}>{grade}</div>
        </div>
      </td>
      <td>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div sx={{ bg: 'white', color: hex, px: 1 }}>{gradeText}</div>
        </div>
      </td>
    </tr>
  );
};

/**
 *
 * palette displayed with PhotonColor items
 * using a css flex display direction column
 */
export const PhotonColorPalette: FC<ThemeColorProps &
  Omit<TableContainerProps, 'children' | 'columns'>> = props => {
  const { blackTextColor, whiteTextColor, ...rest } = props;
  return (
    <TableContainer
      columns={[
        { title: 'color' },
        { title: 'name' },
        { title: 'text' },
        { title: 'bkg' },
      ]}
      header={null}
      sx={{
        borderLeft: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
        borderRight: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
        '& > tbody > tr > td': {
          p: 2,
        },
        borderTop: 'none',
      }}
      {...rest}
    >
      {({ name, value }) => (
        <BasePhotonColor
          key={`color_item_${name}}`}
          name={name}
          color={value}
          blackTextColor={blackTextColor}
          whiteTextColor={whiteTextColor}
        />
      )}
    </TableContainer>
  );
};
