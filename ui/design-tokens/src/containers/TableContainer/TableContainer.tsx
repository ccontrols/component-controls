/** @jsx jsx */
import {
  FC,
  ReactNode,
  useState,
  DetailedHTMLProps,
  ThHTMLAttributes,
} from 'react';
import { jsx, BoxProps, Theme } from 'theme-ui';
import { ContainerProps } from '../../types';

export interface TableColumn {
  sx?: BoxProps['sx'];
  props?: DetailedHTMLProps<
    ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  >;
  title: ReactNode;
  name?: string;
  render?: (value: any) => ReactNode;
}
export interface TableContainerOwnProps {
  header?: ReactNode;
  columns: TableColumn[];
  sx?: BoxProps['sx'];
}

export type TableContainerProps = TableContainerOwnProps & ContainerProps;

export type TableContainerHeaderProps = Pick<TableContainerProps, 'columns'>;
export const TableContainerHeader: FC<TableContainerHeaderProps> = ({
  columns,
}) => (
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
            whiteSpace: 'nowrap',
            fontSize: 1,
            ...column.sx,
          }}
          {...column.props}
        >
          {column.title}
        </th>
      ))}
    </tr>
  </thead>
);
export const TableContainer: FC<TableContainerProps> = ({
  columns,
  palette,
  children,
  header,
  sx,
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
        tableLayout: 'fixed',
        width: '100%',
        borderTop: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
        borderBottom: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
        '& > tbody > tr > td': {
          borderTop: (t: Theme) => `1px solid  ${t.colors?.shadow}`,
        },
        ...sx,
      }}
      {...rest}
    >
      <colgroup>
        {columns.map((column, index) => (
          <col
            key={`column_${
              typeof column.title === 'string' ? column.title : ''
            }_${index}`}
            span={column.props?.colSpan || 1}
          />
        ))}
      </colgroup>
      {header === undefined ? (
        <TableContainerHeader columns={columns} />
      ) : (
        header
      )}
      <tbody>
        {Object.keys(palette).map((color, index) =>
          children({ name: color, value: palette[color], hover, index }),
        )}
      </tbody>
    </table>
  );
};

export const TableRowContainer: FC = ({ children }) => (
  <table
    sx={{
      width: '100%',
      borderSpacing: 0,
      borderCollapse: 'separate',
      tableLayout: 'fixed',
    }}
  >
    <tbody>{children}</tbody>
  </table>
);
