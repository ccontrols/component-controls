import React from 'react';
import { Input, Flex, Label } from 'theme-ui';
import {
  UseGlobalFiltersOptions,
  UseGlobalFiltersInstanceProps,
} from 'react-table';

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
          color: 'muted',
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
