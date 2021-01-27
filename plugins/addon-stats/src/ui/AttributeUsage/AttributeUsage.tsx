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
import { StatsFilter, AttributeAggregateRow } from '../../types';
import { useAttributesUsageAggregate } from '../../hooks/components';

export type AttributeUsageProps = {
  /**
   * filter which stories to apply
   */
  filter?: StatsFilter;
  linkAttributes?: boolean;
} & BlockContainerProps;

/**
 * Table of all the used attributes, with their components
 */
export const AttributeUsage: FC<AttributeUsageProps> = ({
  filter,
  linkAttributes = true,
  ...rest
}) => {
  const { data, maxUsed, maxComponentsCount } = useAttributesUsageAggregate({
    filter,
  });
  const columns = useMemo(
    () =>
      [
        {
          Header: 'attribute',
          accessor: 'attribute',
          Cell: ({
            row: {
              original: { attribute },
            },
          }) => (
            <Tag
              variant="tag.small"
              key={`${attribute}`}
              borderSize={0}
              color="lightgrey"
            >
              {linkAttributes ? (
                <Link href={`#attribute-${attribute}`}>{attribute}</Link>
              ) : (
                attribute
              )}
            </Tag>
          ),
        },
        {
          Header: 'components',
          width: '40%',
          accessor: 'components',
          Cell: ({
            row: {
              original: { components },
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
              {Object.keys(components).map(key => (
                <LocalImport
                  key={key}
                  name={components[key].name}
                  componentHash={key}
                />
              ))}
            </Box>
          ),
        },
        {
          Header: '#used',
          accessor: 'componentsCount',
          isSortedDesc: true,
          isSorted: true,
          Cell: ({
            row: {
              original: { componentsCount },
            },
          }) => (
            <ProgressIndicator
              value={componentsCount}
              max={maxComponentsCount}
            />
          ),
        },
        {
          Header: '#total used',
          accessor: 'usedByCount',
          isSortedDesc: true,
          isSorted: true,
          Cell: ({
            row: {
              original: { usedByCount },
            },
          }) => <ProgressIndicator value={usedByCount} max={maxUsed} />,
        },
      ] as Column<AttributeAggregateRow>[],
    [maxUsed, maxComponentsCount, linkAttributes],
  );
  return (
    <BlockContainer title="Attributes usage" {...rest}>
      <Table<AttributeAggregateRow>
        sorting={true}
        data={data}
        sortBy={[{ id: 'usedByCount', desc: true }]}
        columns={columns}
      />
    </BlockContainer>
  );
};
