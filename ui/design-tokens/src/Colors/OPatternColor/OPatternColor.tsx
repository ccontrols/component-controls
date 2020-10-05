/** @jsx jsx */
import { FC, Fragment } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import simpleColorConverter from 'simple-color-converter';
import { colorToStr } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import {
  TableContainerProps,
  TableContainer,
  TableRowContainer,
} from '../../containers';

/**
 * Color item displaying as a table row, with color block, sass name, and hex, RGB, and CMYK color values.
 * Design inspired by [OPattern](https://ux.opower.com/opattern/color.html).
 */

export const OPatternColor: FC<ColorBlockProps> = props => (
  <TableRowContainer>
    <BaseOPatternColor {...props} />
  </TableRowContainer>
);

const BaseOPatternColor: FC<ColorBlockProps> = ({ name, color }) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const {
    value: colorValue,
    name: colorName = name,
    sass,
    description,
  } = colorObj;
  const { hex, rgba } = colorToStr(colorValue);
  const { color: cmyk } = new simpleColorConverter({
    rgba,
    to: 'cmyk',
  });

  return (
    <tr>
      <td sx={{ border: 'none !important' }}>
        <CopyContainer
          value={hex}
          name={colorName}
          sx={{ bg: colorValue, width: '100%', minWidth: 100, height: '100%' }}
        />
      </td>
      <td>
        <code sx={{ bg: 'gray' }}>{sass}</code>
      </td>
      {description ? (
        <td colSpan={3}>{description}</td>
      ) : (
        <Fragment>
          <td>
            <div>{hex.toUpperCase()}</div>
          </td>
          <td>
            <div>{`${rgba.r}, ${rgba.g}, ${rgba.b}${
              rgba.a !== 1 ? `, ${rgba.a}` : ''
            }`}</div>
          </td>
          <td>{`${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`}</td>
        </Fragment>
      )}
    </tr>
  );
};

/**
 *
 * palette displayed with OPatternColor items
 * using a css flex display direction column
 */
export const OPatternColorPalette: FC<Omit<
  TableContainerProps,
  'children' | 'columns'
>> = props => (
  <TableContainer
    columns={[
      { title: 'Color', sx: { width: '25%' } },
      { title: 'Variable', sx: { width: '30%' } },
      { title: 'Hex', sx: { width: '15%' } },
      { title: 'RGB', sx: { width: '15%' } },
      { title: 'CMYK', sx: { width: '15%' } },
    ]}
    sx={{
      '& > tbody > tr > td': {
        height: 80,
        px: 2,
        py: 0,
      },
      '& > tbody > tr': {
        fontSize: 0,
      },
      '& > thead > tr > th': {
        textAlign: 'left',
        fontSize: 1,
        fontWeight: 'bold',
        pb: 2,
        px: 2,
      },
    }}
    {...props}
  >
    {({ name, value }) => (
      <BaseOPatternColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
      />
    )}
  </TableContainer>
);
