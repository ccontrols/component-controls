/** @jsx jsx */
import { FC } from 'react';
import { jsx, Theme } from 'theme-ui';
import { ColorBlockProps, ColorValue } from '../../types';
import {
  TableContainerProps,
  TableContainer,
  TableRowContainer,
  TableColumn,
} from '../../containers';

export type LightningFontProps = {
  columns?: TableColumn[];
} & ColorBlockProps;
/**
 * Color item displaying as a table row, with color, name, description, and allows for custom columns.
 * Design inspired by Oracle's [Lightning Design System](https://www.lightningdesignsystem.com/design-tokens/#category-color).
 */

export const LightningFont: FC<LightningFontProps> = props => (
  <TableRowContainer>
    <BaseLightningFont {...props} />
  </TableRowContainer>
);

const BaseLightningFont: FC<LightningFontProps> = ({
  name,
  color,
  columns,
}) => {
  const colorObj: ColorValue =
    typeof color === 'string' ? { value: color } : color;
  const { name: colorName = name, description, sass } = colorObj;
  return (
    <tr
      sx={{
        fontSize: 0,
        color: 'primary',
        bg: 'background',
        '& > td ': {
          py: 3,
          borderTop: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
          borderBottom: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
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
export const LightningFontTheme: FC<
  Optional<Omit<TableContainerProps, 'children'>, 'columns'>
> = ({ columns = [], ...props }) => (
  <TableContainer
    sx={{
      '& > thead > tr > th': {
        textAlign: 'left',
        fontSize: 0,
        bg: 'gray',
        borderTop: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
        borderBottom: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
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
      <BaseLightningFont
        key={`color_item_${name}}`}
        name={name}
        color={value}
        columns={columns}
      />
    )}
  </TableContainer>
);
