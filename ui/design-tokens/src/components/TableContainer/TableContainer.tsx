/** @jsx jsx */
import { FC, ReactNode, useState } from 'react';
import { jsx, SxStyleProp, Theme } from 'theme-ui';
import { ContainerProps } from '../../types';

export interface TableColumn {
  sx?: SxStyleProp;
  title: ReactNode;
  name?: string;
  render?: (value: any) => ReactNode;
}
export interface TableContainerOwnProps {
  columns: TableColumn[];
}

export type TableContainerProps = TableContainerOwnProps & ContainerProps;

export const TableContainer: FC<TableContainerProps> = ({
  columns,
  palette,
  children,
  ...rest
}) => {
  const [hover, setHover] = useState(false);
  return (
    <table
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      sx={{
        bg: 'background',
        borderSpacing: 0,
        borderCollapse: 'separate',
        borderTop: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
        borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
        '& > tbody > tr > td': {
          borderTop: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
          borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
        },
      }}
      {...rest}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={`table_${
                typeof column.title === 'string' ? column.title : ''
              }_${index}`}
              sx={{
                mx: 1,
                textOverflow: 'ellipsis',
                fontSize: 1,
                ...column.sx,
              }}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(palette).map((color, index) =>
          children({ name: color, value: palette[color], hover, index }),
        )}
      </tbody>
    </table>
  );
};
