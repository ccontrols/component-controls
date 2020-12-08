/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import {
  Table,
  Column,
  BlockContainer,
  BlockContainerProps,
  ProgressIndicator,
} from '@component-controls/components';
import { LocalImport } from '@component-controls/blocks';

import { AttributeAggregateRow } from '../../types';

export type AttributesUsageDetailsProps = {
  stats: AttributeAggregateRow;
} & BlockContainerProps;

export const AttributesUsageDetails: FC<AttributesUsageDetailsProps> = ({
  stats,
  ...rest
}) => {
  type DataType = {
    componentHash: string;
    usedCount: number;
    name: string;
  };
  const { data, maxUsed } = useMemo(() => {
    const data = Object.keys(stats.components).map(key => {
      const component = stats.components[key];
      return {
        componentHash: key,
        usedCount: component.count,
        name: component.name,
      };
    });
    const maxUsed = data.reduce((acc, row) => Math.max(acc, row.usedCount), 0);
    return { data, maxUsed };
  }, [stats]);
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
    <BlockContainer
      title={stats.attribute}
      id={`attribute-${stats.attribute}`}
      {...rest}
    >
      <Table<DataType>
        sorting={true}
        data={data}
        sortBy={[{ id: 'usedCount', desc: true }]}
        columns={columns}
      />
    </BlockContainer>
  );
};
