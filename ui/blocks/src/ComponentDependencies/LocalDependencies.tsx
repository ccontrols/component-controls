/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx, Flex, Text } from 'theme-ui';
import { Component, JSXNode } from '@component-controls/core';
import { Table } from '@component-controls/components';
import { LocalImport } from '../PackageLink';
export interface LocalDependenciesProps {
  component?: Component;
}

type TableImportType = {
  from: string;
  imports: Omit<JSXNode, 'from'>[];
}[];

/**
 * base component dependencies
 */

export const LocalDependencies: FC<LocalDependenciesProps> = ({
  component,
}) => {
  const imports: TableImportType = useMemo(() => {
    const { localDependencies } = component || {};
    return localDependencies
      ? Object.keys(localDependencies).reduce(
          (acc: TableImportType, key: string) => [
            ...acc,
            {
              from: key,
              imports: localDependencies[key],
            },
          ],
          [],
        )
      : [];
  }, [component]);
  const columns = useMemo(
    () => [
      {
        Header: 'file',
        accessor: 'name',
        Cell: ({
          row: {
            original: { from },
          },
        }: any) => (
          <Text
            sx={{
              fontSize: 1,
              lineHeight: '1.2rem',
              whiteSpace: 'nowrap',
            }}
          >{`"${from}"`}</Text>
        ),
      },
      {
        Header: 'imports',
        accessor: 'imports',
        Cell: ({ value }: { value: JSXNode[] }) => (
          <Flex
            sx={{
              flexWrap: 'wrap',
            }}
          >
            {value.map(node => (
              <LocalImport key={`${node.name}`} node={node} />
            ))}
          </Flex>
        ),
      },
    ],
    [],
  );

  if (!imports) {
    return null;
  }

  return (
    <Table data-testid="local-dependencies" data={imports} columns={columns} />
  );
};
