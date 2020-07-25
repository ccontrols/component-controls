/* eslint-disable react/display-name */
import React, { FC, useMemo } from 'react';
import { Flex, Box } from 'theme-ui';
import { ImportName, defaultExport } from '@component-controls/core';
import { Table, Tag, ExternalLink } from '@component-controls/components';

export interface Dependency {
  /**
   * import name (can include /dist/ folders)
   */
  name: string;
  /**
   * imported names
   */
  imports: ImportName[];
  /**
   * optional version, if available from package.json
   */
  version?: string;
  /**
   * the package name, as listed in package,json
   */
  packageName?: string;
  /**
   * if true, listed in peerDependencies
   */
  peer: boolean;
}
export interface DependenciesProps {
  /**
   * list of dependencies to display
   */
  dependencies: Dependency[];
}

/**
 * table component to display a list of dependencies
 */
export const Dependencies: FC<DependenciesProps> = ({ dependencies }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'package',
        accessor: 'name',
        Cell: ({
          row: {
            original: { name, packageName, version },
          },
        }: any) => {
          const el = <Box css={{ whiteSpace: 'nowrap' }}>{name}</Box>;
          if (!packageName) {
            return el;
          }
          const baseVersion = version.replace(/[\^=~]/, '');
          return (
            <ExternalLink
              href={`https://npmjs.com/package/${packageName}/v/${baseVersion}`}
            >
              {el}
            </ExternalLink>
          );
        },
      },
      {
        Header: 'imports',
        accessor: 'imports',
        width: '70%',
        Cell: ({ value }: { value: ImportName[] }) => (
          <Flex
            css={{
              flexWrap: 'wrap',
            }}
          >
            {value.map(v => (
              <Tag
                variant="tag.rightmargin"
                key={`${v.name}`}
                borderSize={1}
                color={v.importedName === defaultExport ? 'green' : 'lightgrey'}
              >
                {v.importedName === defaultExport ? v.name : v.importedName}
              </Tag>
            ))}
          </Flex>
        ),
      },
      {
        Header: 'version',
        accessor: 'version',
      },
      {
        Header: 'peer',
        accessor: 'peer',
        Cell: ({ value }: { value: boolean }) => (value ? '*' : ''),
      },
    ],
    [],
  );
  if (!dependencies) {
    return null;
  }

  return (
    <Table data-testid="dependencies" data={dependencies} columns={columns} />
  );
};
