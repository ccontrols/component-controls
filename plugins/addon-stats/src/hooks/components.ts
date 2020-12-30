import { useMemo } from 'react';
import { useStore } from '@component-controls/store';
import {
  getComponentUsageAggregate,
  getComponentUsageStats,
  getAttributeUsageAggregate,
} from '../api/components';
import {
  StatsFilter,
  ComponentAggregateStats,
  AttributeAggregateStats,
} from '../types';

export const useComponentUsageAggregate = ({
  filter,
}: {
  filter?: StatsFilter;
}): ComponentAggregateStats => {
  const store = useStore();
  const stats = useMemo(() => {
    const stats = getComponentUsageStats(store, filter);
    return getComponentUsageAggregate(store, stats);
  }, [filter, store]);
  return stats;
};

export const useAttributesUsageAggregate = ({
  filter,
}: {
  filter?: StatsFilter;
}): AttributeAggregateStats => {
  const store = useStore();
  const stats = useMemo(() => {
    const stats = getComponentUsageStats(store, filter);
    return getAttributeUsageAggregate(store, stats);
  }, [filter, store]);
  return stats;
};
