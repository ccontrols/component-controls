/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import {
  TableContainerProps,
  TableContainer,
  TableRowContainer,
} from '../../containers';

/**
 * Color item displaying as a table row, with color block, color name and rgb value.
 * Design inspired by [Uniform](http://uniform.hudl.com/guidelines/colors/brand/design).
 */

export const UniformColor: FC<ColorBlockProps> = props => (
  <TableRowContainer>
    <BaseUniformColor {...props} />
  </TableRowContainer>
);

const BaseUniformColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, name: colorName = name } = colorObj;
  const { hex, rgba } = colorToStr(colorValue);

  return (
    <tr sx={{ fontSize: 1 }}>
      <td>
        <div
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <CopyContainer
            value={hex}
            name={colorName}
            sx={{ bg: colorValue, minWidth: 24, width: '100%', height: 24 }}
          />
        </div>
      </td>
      <td>
        <code sx={{ bg: 'gray' }}>{colorName}</code>
      </td>
      <td>
        <div>{`${rgba.r},  ${rgba.g},  ${rgba.b}${
          rgba.a !== 1 ? `,  ${rgba.a}` : ''
        }`}</div>
      </td>
    </tr>
  );
};

/**
 *
 * palette displayed with UniformColor items
 * using a css flex display direction column
 */
export const UniformColorPalette: FC<
  Omit<TableContainerProps, 'children' | 'columns'>
> = props => (
  <TableContainer
    columns={[
      { title: 'Color', sx: { width: '10%' } },
      { title: 'Name', sx: { width: '45%' } },
      { title: 'RGBA', sx: { width: '45%' } },
    ]}
    sx={{
      border: 'none',
      '& > tbody > tr > td': {
        px: 2,
        py: 2,
      },
      '& > thead > tr > th': {
        textAlign: 'left',
        fontSize: 0,
        px: 2,
      },
    }}
    {...props}
  >
    {({ name, value }) => (
      <BaseUniformColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </TableContainer>
);
