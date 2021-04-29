/* eslint-disable react/display-name */
/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx, Checkbox, Label } from 'theme-ui';
import { FC, forwardRef, Ref } from 'react';
import {
  UseTableHooks,
  UseRowSelectInstanceProps,
  TableToggleAllRowsSelectedProps,
  UseRowSelectRowProps,
} from 'react-table';

const IndeterminateCheckbox: FC<TableToggleAllRowsSelectedProps> = forwardRef(
  function IndeterminateCheckbox(
    { onChange, checked },
    ref: Ref<HTMLInputElement>,
  ) {
    return (
      <Label>
        <Checkbox
          ref={ref}
          onChange={onChange}
          checked={checked}
          aria-label={`click to ${checked ? 'un-' : ''}select row`}
        />
      </Label>
    );
  },
);
export const useRowSelectionColumn = <D extends Record<string, unknown>>(
  hooks: UseTableHooks<D>,
): void => {
  hooks.visibleColumns.push(columns => [
    {
      id: 'selection',
      width: 30,
      Header: ({
        getToggleAllRowsSelectedProps,
      }: UseRowSelectInstanceProps<D>) => (
        <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
      ),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }: { row: UseRowSelectRowProps<D> }) => (
        <div>
          <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
        </div>
      ),
    },
    ...columns,
  ]);
};
