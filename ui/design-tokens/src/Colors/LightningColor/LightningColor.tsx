/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { CopyContainer } from '@component-controls/components';
import { colorToStr } from '../utils';
import { ColorBlockProps, ColorValue } from '../../types';
import {
  TableContainerProps,
  TableContainer,
  TableColumn,
} from '../../components';

export type LightningColorProps = {
  columns?: TableColumn[];
} & ColorBlockProps;
/**
 * Color item displaying as a row, with color, name, description, var and sas variables and contrast ratio. allows for custom columns.
 * Design inspired from racle's [Lightning Design System](https://www.lightningdesignsystem.com/design-tokens/#category-color).
 */

export const LightningColor: FC<LightningColorProps> = props => (
  <table>
    <tbody>
      <BaseLightningColor {...props} />
    </tbody>
  </table>
);

const BaseLightningColor: FC<LightningColorProps> = ({
  name,
  color,
  columns,
}) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const {
    value: colorValue,
    name: colorName = name,
    description,
    sass,
  } = colorObj;
  const { hex, rgba } = colorToStr(colorValue);
  return (
    <tr
      sx={{
        fontSize: 0,
        color: 'primary',
        bg: 'background',
        '& > td ': {
          py: 3,
          borderTop: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
          borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
        },
      }}
    >
      <td>
        <div sx={{ display: 'flex', flexDirection: 'column', px: 1 }}>
          <div sx={{ my: 1, color: 'text' }}>{sass}</div>
          <p sx={{ m: 0 }}> {description}</p>
        </div>
      </td>
      <td>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 1,
            whiteSpace: 'nowrap',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          }}
        >
          <CopyContainer value={hex} name={colorName}>
            <div
              sx={{
                height: 50,
                bg: colorValue,
                mr: 3,
              }}
            />
          </CopyContainer>

          <div sx={{ mr: 3 }}>{`rgb${rgba.a !== 1 ? 'a' : ''}(${rgba.r}, ${
            rgba.g
          }, ${rgba.b}${rgba.a !== 1 ? `, ${rgba.a}` : ''})`}</div>
          <div sx={{ mr: 3 }}>{hex}</div>
          <div>{colorName}</div>
        </div>
      </td>
      {columns &&
        columns.map((column, index) => (
          <td
            key={`table_row_${
              typeof column.title === 'string' ? column.title : ''
            }_${index}`}
          >
            {column.name && colorObj[column.name] !== undefined
              ? column.render
                ? column.render(colorObj[column.name])
                : colorObj[column.name].toString()
              : ''}
          </td>
        ))}
    </tr>
  );
};

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;

/**
 *
 * palette displayed with LightningColor items
 * using a css flex display direction column
 */
export const LightningColorPalette: FC<Optional<
  Omit<TableContainerProps, 'children'>,
  'columns'
>> = ({ columns = [], ...props }) => (
  <TableContainer
    sx={{
      '& > thead > tr > th': {
        textAlign: 'left',
        fontSize: 0,
        bg: 'gray',
        borderTop: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
        borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
      },
    }}
    columns={[
      { title: 'Token', sx: { width: '45%' } },
      { title: 'Example' },
      ...columns,
    ]}
    {...props}
  >
    {({ name, value }) => (
      <BaseLightningColor
        key={`color_item_${name}}`}
        name={name}
        color={value}
        columns={columns}
      />
    )}
  </TableContainer>
);
