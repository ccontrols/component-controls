import React from 'react';
import memoize from 'fast-memoize';
import matchSorter from 'match-sorter';
import { Input, Flex, Label } from 'theme-ui';
import {
  Row,
  UseFiltersColumnProps,
  UseGlobalFiltersOptions,
  UseGlobalFiltersInstanceProps,
  FilterValue,
} from 'react-table';

function fuzzyTextFilterFn(rows: Row[], id: string, filterValue: FilterValue) {
  return matchSorter(rows, filterValue, {
    keys: [(row: Row) => row.values[id]],
  });
}

fuzzyTextFilterFn.autoRemove = (val: any) => !val;

export const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}: {
  column: UseFiltersColumnProps<any>;
}) => {
  const count = preFilteredRows.length;

  return (
    <Input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

// Our table component
export const filterTypes = memoize(() => ({
  // Add a new fuzzyTextFilterFn filter type.
  fuzzyText: fuzzyTextFilterFn,
  // Or, override the default text filter to use
  // "startWith"
  text: (rows: Row[], id: string, filterValue: FilterValue) => {
    return rows.filter(row => {
      const rowValue = row.values[id];
      return rowValue !== undefined
        ? String(rowValue)
            .toLowerCase()
            .startsWith(String(filterValue).toLowerCase())
        : true;
    });
  },
}));

export const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  itemsLabel,
}: Pick<
  UseGlobalFiltersInstanceProps<any>,
  'preGlobalFilteredRows' | 'setGlobalFilter'
> &
  Pick<UseGlobalFiltersOptions<any>, 'globalFilter'> & {
    itemsLabel: string;
  }) => {
  const count = preGlobalFilteredRows.length;

  return (
    <Flex
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        mr: 3,
      }}
    >
      <Label
        sx={{
          mr: 3,
          width: 'auto',
          color: 'fadedText',
        }}
      >
        search:
      </Label>
      <Input
        value={typeof globalFilter === 'string' ? globalFilter : ''}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`${count} ${itemsLabel}...`}
      />
    </Flex>
  );
};
