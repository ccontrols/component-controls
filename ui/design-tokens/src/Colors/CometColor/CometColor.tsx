/** @jsx jsx */
import { FC } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
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
 * Color item displaying as a row, with color, name sass variable name and AA/AAA tests
 * Design inspired by [Comet](https://comet.discoveryeducation.com/visual-language/color.html).
 */

export const CometColor: FC<ColorBlockProps> = props => (
  <TableRowContainer>
    <BaseCometColor {...props} />
  </TableRowContainer>
);

export const BaseCometColor: FC<ColorBlockProps> = ({
  name,
  color,
  blackTextColor = defaultBlackTextColor,
  whiteTextColor = defaultWhiteTextColor,
}) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color, name } : color;
  const { value: colorValue, name: colorName = name, sass } = colorObj;

  const { hex } = colorToStr(colorValue);
  const contrastColor = mostReadable(hex, blackTextColor, whiteTextColor);
  const contrast = tinycolor.readability(hex, contrastColor);

  let accessibilityTest;
  const testProps: SxStyleProp = {
    ml: 3,
    width: '40px',
    textAlign: 'center',
    color: 'black',
    fontSize: 1,
  };
  const grade = contrastGrade(contrast);
  switch (grade) {
    case 'AAA':
      accessibilityTest = <div sx={{ ...testProps, bg: 'gray' }}>AAA</div>;
      break;
    case 'AA':
      accessibilityTest = <div sx={{ ...testProps, bg: 'gray' }}>AA</div>;
      break;
    case 'AA':
      accessibilityTest = <div sx={{ ...testProps, bg: '#e6c719' }}>AA18</div>;
      break;
    default:
      accessibilityTest = (
        <div sx={{ ...testProps, bg: '##b42818', color: 'white' }}>DNP</div>
      );
  }
  return (
    <tr sx={{ fontSize: 1, bg: colorValue, color: contrastColor }}>
      <td sx={{ width: '30%' }}>
        <div
          sx={{
            fontWeight: 'bold',
            fontSize: 2,
          }}
        >
          {colorName}
        </div>
      </td>
      <td>{sass}</td>
      <td sx={{ width: 120 }}>
        <CopyContainer
          value={hex}
          name={name}
          sx={{ textAlign: 'right', width: '100%' }}
        >
          {hex.toUpperCase()}
        </CopyContainer>
      </td>
      <td sx={{ width: 80 }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {accessibilityTest}
        </div>
      </td>
    </tr>
  );
};

/**
 *
 * palette displayed with CometColor items
 * using a css flex display direction column
 */

export const CometColorPalette: FC<ThemeColorProps &
  Omit<TableContainerProps, 'children' | 'columns'>> = props => {
  const { blackTextColor, whiteTextColor, ...rest } = props;
  return (
    <TableContainer
      columns={[
        { title: 'name' },
        { title: 'sass' },
        { title: 'hex' },
        { title: 'AA' },
      ]}
      header={null}
      sx={{
        borderTop: 'none',
        '& > tbody > tr > td': {
          borderTop: 'none',
          p: 3,
        },
      }}
      {...rest}
    >
      {({ name, value }) => (
        <BaseCometColor
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
