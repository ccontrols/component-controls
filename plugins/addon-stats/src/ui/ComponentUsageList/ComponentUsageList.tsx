import React, { FC } from 'react';
import { BlockContainerProps } from '@component-controls/components';
import { StatsFilter } from '../../types';
import { useComponentUsageAggregate } from '../../hooks/components';
import { ComponentUsageDetails } from '../ComponentUsageDetails';

export type ComponentUsageListProps = {
  /**
   * filter which stories to apply
   */
  filter?: StatsFilter;
} & BlockContainerProps;

/**
 * Tables for all the filtered components
 */
export const ComponentUsageList: FC<ComponentUsageListProps> = ({
  filter,
  ...rest
}) => {
  const stats = useComponentUsageAggregate({ filter });
  return (
    <>
      {stats.data
        .filter(row => row.usedByCount)
        .sort((a, b) => b.usedByCount - a.usedByCount)
        .map(row => (
          <ComponentUsageDetails
            key={row.componentHash}
            stats={row.stats}
            {...rest}
          />
        ))}
    </>
  );
};
