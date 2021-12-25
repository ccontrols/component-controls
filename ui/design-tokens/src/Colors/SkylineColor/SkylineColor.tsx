/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import tinycolor from 'tinycolor2';
import { CheckIcon, XIcon } from '@primer/octicons-react';

import { colorToStr, mostReadable } from '../utils';
import { ColorBlockProps, ColorValue, colorContrast } from '../../types';
import {
  TableContainerProps,
  TableContainer,
  TableRowContainer,
} from '../../containers';

/**
 * Color item displaying as a row, with color name, custom columns for contrast checks scss variable name and color block.
 * Design inspired by [Skyline](https://skyline.benevity.org/design-language/color/#hues).
 */

export const SkylineColor: FC<ColorBlockProps> = props => (
  <TableRowContainer>
    <BaseSkylineColor {...props} />
  </TableRowContainer>
);

const PassTag: FC<{ contrast: number }> = ({ contrast }) => {
  const pass = contrast > colorContrast.small.ratio;
  return (
    <div
      sx={{
        px: 2,
        py: 1,
        width: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        fontSize: 0,
        fontWeight: 'thin',
        borderRadius: '1rem',
        border: `1px solid ${pass ? '#1a801b' : '#ce3232'}`,
      }}
    >
      {pass ? (
        <CheckIcon sx={{ color: '#1a801b' }} />
      ) : (
        <XIcon sx={{ color: '#ce3232' }} />
      )}
      <div sx={{ ml: 2 }}>{pass ? 'Yes' : 'No'}</div>
    </div>
  );
};

export type ContrastColor = {
  name: string;
  color: string;
};

export type ContrastColors = ContrastColor[];

export const defaultContrastColors: ContrastColors = [
  { name: 'Use on White', color: '#ffffff' },
  { name: 'Use on Gray 200', color: '#f5f5f5' },
];
export type SkylineColorProps = {
  contrastColors?: ContrastColors;
} & ColorBlockProps;

const BaseSkylineColor: FC<SkylineColorProps> = ({
  name,
  color,
  contrastColors = defaultContrastColors,
}) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { value: colorValue, name: colorName = name, scss } = colorObj;
  const { hex } = colorToStr(colorValue);
  const textColor = mostReadable(hex);
  const contrasts = contrastColors.map(contrastColor =>
    tinycolor.readability(hex, contrastColor.color),
  );
  return (
    <tr>
      <td>
        <div sx={{ fontSize: 1 }}>{colorName}</div>
      </td>
      {contrasts.map((contrastRatio, index) => (
        <td key={`contrast_cell_${contrastColors[index].name}`}>
          <PassTag contrast={contrastRatio} />
        </td>
      ))}
      <td>
        {scss && (
          <CopyContainer value={scss} name={colorName}>
            <code
              sx={{
                my: 1,
                bg: '#deeff8',
                border: `1px dashed #106fa4`,
                whiteSpace: 'nowrap',
                px: 2,
                py: 1,
              }}
            >
              {scss}
            </code>
          </CopyContainer>
        )}
      </td>
      <td>
        <CopyContainer value={hex} name={colorName}>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              minWidth: 100,
              bg: colorValue,
              fontSize: 1,
              color: textColor,
            }}
          >
            <div>{hex}</div>
          </div>
        </CopyContainer>
      </td>
    </tr>
  );
};

/**
 *
 * palette displayed with SkylineColor items
 * using a css flex display direction column
 */
export const SkylineColorPalette: FC<
  { contrastColors?: ContrastColors } & Omit<
    TableContainerProps,
    'children' | 'columns'
  >
> = ({ contrastColors = defaultContrastColors, ...props }) => (
  <TableContainer
    columns={[
      { title: 'Name' },
      ...contrastColors.map(contrastColor => ({ title: contrastColor.name })),
      { title: 'Scss', sx: { width: '30%' } },
      { title: 'Example' },
    ]}
    sx={{
      border: 'none',
      '& > tbody > tr > td': {
        p: 2,
      },
      '& > thead > tr > th': {
        textAlign: 'left',
        fontSize: 1,
        fontWeight: 'heading',
        py: 2,
      },
    }}
    {...props}
  >
    {({ name, value }) => (
      <BaseSkylineColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
        contrastColors={contrastColors}
      />
    )}
  </TableContainer>
);
