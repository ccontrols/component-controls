import React, { FC } from 'react';
import { BlockContainerProps } from '@component-controls/components';
import { StatsFilter } from '../../types';
import { useAttributesUsageAggregate } from '../../hooks/components';
import { AttributesUsageDetails } from '../AttributesUsageDetails';

export type AttributesUsageListProps = {
  /**
   * filter which stories to apply
   */
  filter?: StatsFilter;
} & BlockContainerProps;

/**
 * Tables for all the filtered attributes, and the components using them
 */
export const AttributesUsageList: FC<AttributesUsageListProps> = ({
  filter,
  ...rest
}) => {
  const stats = useAttributesUsageAggregate({ filter });
  return (
    <>
      {stats.data
        .sort((a, b) => b.usedByCount - a.usedByCount)
        .map(row => (
          <AttributesUsageDetails key={row.attribute} stats={row} {...rest} />
        ))}
    </>
  );
};
