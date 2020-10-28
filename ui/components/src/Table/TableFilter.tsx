import React, { FC } from 'react';
import { Input, Flex, Label } from 'theme-ui';
import {
  UseGlobalFiltersOptions,
  UseGlobalFiltersInstanceProps,
} from 'react-table';

export const GlobalFilter: FC<Pick<
  UseGlobalFiltersInstanceProps<any>,
  'preGlobalFilteredRows' | 'setGlobalFilter'
> &
  Pick<UseGlobalFiltersOptions<any>, 'globalFilter'> & {
    itemsLabel: string;
  }> = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  itemsLabel,
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
          color: 'mutedText',
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
