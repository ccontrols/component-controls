import { Hooks } from 'react-table';

export function useTableLayout<D extends Record<string, unknown>>(
  hooks: Hooks<D>,
): void {
  hooks.getHeaderProps.push(getHeaderProps);
  hooks.getCellProps.push(getCellProps);
}

useTableLayout.pluginName = 'useTableLayout';

const getHeaderProps = (props: any, { column }: any) => [
  props,
  {
    style: {
      width: isNaN(column.totalWidth) ? column.width : `${column.totalWidth}px`,
    },
  },
];

const getCellProps = (props: any, { cell }: any) => {
  return [
    props,
    {
      style: {
        width: isNaN(cell.column.totalWidth)
          ? cell.column.width
          : `${cell.column.totalWidth}px`,
      },
    },
  ];
};
