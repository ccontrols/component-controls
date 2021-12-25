/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import {
  TableContainerProps,
  TableContainer,
  TableRowContainer,
} from '../../containers';

export type CedarColorProps = ColorBlockProps & {
  index?: number;
};
/**
 * Color item displaying as a row, with color, name, description and hex value
 * Design inspired by REI's [Cedar](https://rei.github.io/rei-cedar-docs/foundation/color/).
 */

export const CedarColor: FC<CedarColorProps> = props => (
  <TableRowContainer>
    <BaseCedarColor {...props} />
  </TableRowContainer>
);

export const BaseCedarColor: FC<CedarColorProps> = ({
  name,
  color,
  index = 0,
}) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, name: colorName, description } = colorObj;

  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  return (
    <tr sx={{ bg: index % 2 ? undefined : 'gray' }}>
      <td sx={{ width: 70, p: 2 }}>
        <div
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <CopyContainer value={hex} name={name}>
            <div
              sx={{
                width: 50,
                height: 50,
                bg: colorValue,
                color: textColor,
              }}
            />
          </CopyContainer>
        </div>
      </td>
      <td>
        <div sx={{ display: 'flex', flexDirection: 'column', fontSize: 1 }}>
          <div sx={{ fontWeight: 'bold' }}>{colorName}</div>
          <div>{description}</div>
        </div>
      </td>
      <td sx={{ width: 120 }}>
        <div sx={{ fontSize: 0 }}>{hex}</div>
      </td>
    </tr>
  );
};

/**
 *
 * palette displayed with CedarColor items
 * using a css flex display direction column
 */

export const CedarColorPalette: FC<
  Omit<TableContainerProps, 'children' | 'columns'>
> = props => (
  <TableContainer
    columns={[{ title: 'color' }, { title: 'name' }, { title: 'hex' }]}
    header={null}
    sx={{
      borderTop: 'none',
      '& > tbody > tr > td': {
        borderTop: 'none',
        px: 2,
      },
    }}
    {...props}
  >
    {({ name, value, index }) => (
      <BaseCedarColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
        index={index}
      />
    )}
  </TableContainer>
);
