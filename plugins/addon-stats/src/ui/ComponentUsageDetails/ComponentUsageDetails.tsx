/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import { useStore } from '@component-controls/store';
import {
  Table,
  Column,
  BlockContainer,
  BlockContainerProps,
  ProgressIndicator,
} from '@component-controls/components';
import { LocalImport } from '@component-controls/blocks';
import { ComponentStats } from '../../types';

export type ComponentUsageDetailsProps = {
  /**
   * a row of usage statistics
   */

  stats: ComponentStats;
} & BlockContainerProps;

/**
 * Table to display the components usage, with a % progress indicator
 */
export const ComponentUsageDetails: FC<ComponentUsageDetailsProps> = ({
  stats,
  ...rest
}) => {
  type DataType = {
    componentHash: string;
    usedCount: number;
    name: string;
  };
  const store = useStore();
  const { data, maxUsed } = useMemo(() => {
    const data = Object.keys(stats.usedBy).map(key => {
      const component = store.components[key];
      return {
        componentHash: key,
        usedCount: stats.usedBy[key].count,
        name: component.name,
      };
    });
    const maxUsed = data.reduce((acc, row) => Math.max(acc, row.usedCount), 0);
    return { data, maxUsed };
  }, [store, stats]);
  const columns = useMemo(
    () =>
      [
        {
          Header: 'component',
          accessor: 'name',
          Cell: ({
            row: {
              original: { name, componentHash },
            },
          }) => <LocalImport name={name} componentHash={componentHash} />,
        },
        {
          Header: '#used',
          accessor: 'usedCount',
          Cell: ({
            row: {
              original: { usedCount },
            },
          }) => (
            <ProgressIndicator value={usedCount} max={maxUsed} color="accent" />
          ),
        },
      ] as Column<DataType>[],
    [maxUsed],
  );
  return (
    <BlockContainer title={stats.name} id={`attribute-${stats.name}`} {...rest}>
      <Table
        sorting={true}
        data={data}
        sortBy={[{ id: 'usedCount', desc: true }]}
        columns={columns}
      />
    </BlockContainer>
  );
};
