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
  ({ onChange, checked }, ref: Ref<HTMLInputElement>) => {
    return (
      <Label>
        <Checkbox ref={ref} onChange={onChange} checked={checked} />
      </Label>
    );
  },
);
export const useRowSelectionColumn = (
  hooks: UseTableHooks<Record<string, unknown>>,
): void => {
  hooks.visibleColumns.push(columns => [
    {
      id: 'selection',
      width: 30,
      Header: ({
        getToggleAllRowsSelectedProps,
      }: UseRowSelectInstanceProps<{}>) => (
        <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
      ),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }: { row: UseRowSelectRowProps<{}> }) => (
        <div>
          <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
        </div>
      ),
    },
    ...columns,
  ]);
};
