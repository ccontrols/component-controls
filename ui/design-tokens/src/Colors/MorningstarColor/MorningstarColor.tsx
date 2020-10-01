/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import { TableContainerProps, TableContainer } from '../../components';

/**
 * Color item displaying as a table row, with color, name, sass variable name and hex value.
 * Design inspired by [Morningstar Design System](https://designsystem.morningstar.com/visual-language/color/?version=3.0.4&tab=backgrounds).
 */

export const MorningstarColor: FC<ColorBlockProps> = props => (
  <table>
    <tbody>
      <BaseMorningstarColor {...props} />
    </tbody>
  </table>
);

const BaseMorningstarColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, name: colorName = name, sass } = colorObj;
  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <tr
      sx={{
        fontSize: 0,
        bg: hex,
        '& > td ': {
          p: 2,
        },
      }}
    >
      <td>
        <div sx={{ fontSize: 1, fontWeight: 'bold', color: textColor }}>
          {colorName}
        </div>
      </td>
      <td>
        <div
          sx={{
            bg: 'background',
            color: 'text',
            px: 2,
            border: (t: Theme) => `1px solid ${t.colors?.shadow}`,
          }}
        >
          {sass}
        </div>
      </td>
      <td>
        <CopyContainer
          name={colorName}
          value={hex}
          sx={{
            bg: 'background',
            color: 'text',
            px: 2,
            border: (t: Theme) => `1px solid ${t.colors?.shadow}`,
          }}
        >
          {hex}
        </CopyContainer>
      </td>
    </tr>
  );
};

/**
 *
 * palette displayed with MorningstarColor items
 * using a css flex display direction column
 */
export const MorningstarColorPalette: FC<Omit<
  TableContainerProps,
  'children' | 'columns'
>> = props => (
  <TableContainer
    sx={{
      border: 'none',
      '& > thead > tr > th': {
        fontSize: 0,
        bg: 'background',
        textAlign: 'left',
        pb: 2,
        pl: 2,
      },
    }}
    columns={[
      { title: 'Name', sx: { width: '35%' } },
      { title: 'Constant', sx: { width: '50%' } },
      { title: 'Color', sx: { width: '15%' } },
    ]}
    {...props}
  >
    {({ name, value }) => (
      <BaseMorningstarColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
      />
    )}
  </TableContainer>
);
