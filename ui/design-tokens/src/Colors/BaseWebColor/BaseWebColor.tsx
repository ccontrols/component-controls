/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps } from '../../types';
import {
  TableContainerProps,
  TableContainer,
  TableRowContainer,
} from '../../containers';

/**
 * Color item displaying as a row, with color, name and hex value
 * Design inspired by [BaseWeb](https://baseweb.design/components/tokens/).
 */

export const BaseWebColor: FC<ColorBlockProps> = props => (
  <TableRowContainer>
    <BaseBaseWebColor {...props} />
  </TableRowContainer>
);

export const BaseBaseWebColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorValue = typeof color === 'string' ? color : color.value;
  const { hex } = colorToStr(colorValue);
  const hexValue = hex.toUpperCase();
  const textColor = mostReadable(hex);
  return (
    <tr>
      <td sx={{ width: 100 }}>
        <div
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <CopyContainer
            value={hexValue}
            name={name}
            sx={{
              fontSize: 2,
              width: 100,
              height: 50,
              bg: colorValue,
              color: textColor,
            }}
          />
        </div>
      </td>
      <td sx={{ borderBottom: `1px solid ${hex}` }}>
        <div sx={{ px: 2 }}> {name}</div>
      </td>
      <td sx={{ borderBottom: `1px solid ${hex}`, width: 100 }}>
        <div sx={{ px: 2 }}>{hexValue}</div>
      </td>
    </tr>
  );
};

/**
 *
 * palette displayed with BaseWebColor items
 * using a css flex display direction column
 */
export const BaseWebColorPalette: FC<
  Omit<TableContainerProps, 'children' | 'columns'>
> = props => (
  <TableContainer
    columns={[{ title: 'color' }, { title: 'name' }, { title: 'hex' }]}
    header={null}
    sx={{
      borderTop: 'none',
      '& > tbody > tr > td': {
        borderTop: 'none',
        p: 0,
      },
    }}
    {...props}
  >
    {({ name, value }) => (
      <BaseBaseWebColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </TableContainer>
);
