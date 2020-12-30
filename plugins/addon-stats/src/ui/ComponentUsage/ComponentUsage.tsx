/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx, Box } from 'theme-ui';

import {
  Table,
  Column,
  BlockContainer,
  BlockContainerProps,
  ProgressIndicator,
  Tag,
  Link,
} from '@component-controls/components';
import { LocalImport } from '@component-controls/blocks';
import { ComponentAggregateRow, StatsFilter } from '../../types';
import { useComponentUsageAggregate } from '../../hooks/components';

export type ComponentUsageProps = {
  filter?: StatsFilter;
  linkAttributes?: boolean;
} & BlockContainerProps;

export const ComponentUsage: FC<ComponentUsageProps> = ({
  filter,
  linkAttributes = true,
  ...rest
}) => {
  const { data, maxStories, maxUsed } = useComponentUsageAggregate({ filter });
  const columns = useMemo(
    () =>
      [
        {
          Header: 'component',
          accessor: 'component.name' as any,
          Cell: ({
            row: {
              original: {
                component: { name },
                componentHash,
              },
            },
          }: {
            row: { original: ComponentAggregateRow };
          }) => <LocalImport name={name} componentHash={componentHash} />,
        },
        {
          Header: 'attributes',
          accessor: 'attributesCount',
          width: '40%',
          Cell: ({
            row: {
              original: {
                stats: { attributes },
              },
            },
          }) => (
            <Box
              sx={{
                pr: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                color: 'primary',
                flexWrap: 'wrap',
              }}
            >
              {Object.keys(attributes).map(attr => (
                <Tag
                  variant="tag.small"
                  key={`${attr}`}
                  borderSize={0}
                  color="lightgrey"
                >
                  {linkAttributes ? (
                    <Link href={`#attribute-${attr}`}>{attr}</Link>
                  ) : (
                    attr
                  )}
                </Tag>
              ))}
            </Box>
          ),
        },
        {
          Header: '#stories',
          id: 'storiesCount',
          accessor: 'storiesCount',
          Cell: ({
            row: {
              original: { storiesCount },
            },
          }) => (
            <ProgressIndicator
              value={storiesCount}
              max={maxStories}
              color="accent"
            />
          ),
        },
        {
          Header: '#used in',
          accessor: 'usedByCount',
          isSortedDesc: true,
          isSorted: true,
          Cell: ({
            row: {
              original: { usedByCount },
            },
          }) => <ProgressIndicator value={usedByCount} max={maxUsed} />,
        },
      ] as Column<ComponentAggregateRow>[],
    [maxStories, maxUsed, linkAttributes],
  );
  return (
    <BlockContainer title="Components usage" {...rest}>
      <Table<ComponentAggregateRow>
        sorting={true}
        data={data}
        sortBy={[{ id: 'usedByCount', desc: true }]}
        columns={columns}
      />
    </BlockContainer>
  );
};
