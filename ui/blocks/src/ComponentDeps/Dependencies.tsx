/* eslint-disable react/display-name */
import React, { FC, useMemo } from 'react';
import { Flex, Box } from 'theme-ui';
import { ImportName } from '@component-controls/specification';
import { Table, Tag, ExternalLink } from '@component-controls/components';

const defaultExport = 'default';
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
            {value
              .sort((a, b) => {
                if (a.importedName === defaultExport) {
                  return -1;
                } else if (b.importedName === defaultExport) {
                  return 1;
                }
                if (a.importedName > b.importedName) {
                  return -1;
                } else if (a.importedName < b.importedName) {
                  return 1;
                }
                return 0;
              })
              .map(v => (
                <Tag
                  key={`${v.name}`}
                  color={
                    v.importedName === defaultExport ? 'green' : 'lightgrey'
                  }
                  sx={{
                    mr: 1,
                    mb: 1,
                  }}
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

  return <Table data={dependencies} columns={columns} />;
};
