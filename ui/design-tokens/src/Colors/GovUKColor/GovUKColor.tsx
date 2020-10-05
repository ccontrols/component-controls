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
 * Color item displaying the color as a row with a color circle and the sass var name and hex color.
 * Design inspired by [GOV.UK Design System](https://design-system.service.gov.uk/styles/colour/).
 */

export const GovUKColor: FC<ColorBlockProps> = props => (
  <TableRowContainer>
    <BaseGovUKColor {...props} />
  </TableRowContainer>
);

export const BaseGovUKColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, sass, varName } = colorObj;

  const { hex } = colorToStr(colorValue);
  return (
    <tr>
      <td sx={{ width: 60 }}>
        <CopyContainer
          value={hex}
          name={name}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bg: colorValue,
            }}
          />
        </CopyContainer>
      </td>
      <td>
        <div>{sass || varName}</div>
      </td>
      <td sx={{ width: 100 }}>
        <div>{hex}</div>
      </td>
    </tr>
  );
};

/**
 *
 * palette displayed with GovUKDS items
 * using a css flex display direction column
 */

export const GovUKColorPalette: FC<Omit<
  TableContainerProps,
  'children' | 'columns'
>> = props => (
  <TableContainer
    columns={[{ title: 'color' }, { title: 'sass' }, { title: 'hex' }]}
    header={null}
    sx={{
      borderTop: 'none',
      '& > tbody > tr > td': {
        borderTop: 'none',
        p: 2,
      },
    }}
    {...props}
  >
    {({ name, value }) => (
      <BaseGovUKColor key={`color_item_${name}}`} name={name} color={value} />
    )}
  </TableContainer>
);
