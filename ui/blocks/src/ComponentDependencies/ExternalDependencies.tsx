/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx, Flex } from 'theme-ui';
import { defaultExport, Component, ImportType } from '@component-controls/core';
import { usePackage } from '@component-controls/store';
import { Table, Tag } from '@component-controls/components';
import { PackageLink } from '../PackageLink/PackageLink';
export interface ExternalDependenciesProps {
  component?: Component;
}

/**
 * base component dependencies
 */

export const ExternalDependencies: FC<ExternalDependenciesProps> = ({
  component,
}) => {
  const componentPackage = usePackage(component?.package);
  const { dependencies = {}, devDependencies = {}, peerDependencies = {} } =
    componentPackage || {};
  const { externalDependencies: imports = {} } = component || {};
  const columns = useMemo(
    () => [
      {
        Header: 'package',
        accessor: 'name',
        Cell: ({
          row: {
            original: { name },
          },
        }: any) => (
          <PackageLink
            name={name}
            dependencies={dependencies}
            devDependencies={devDependencies}
          />
        ),
      },
      {
        Header: 'imports',
        accessor: 'imports',
        width: '70%',
        Cell: ({ value }: { value: ImportType[] }) => (
          <Flex
            sx={{
              flexWrap: 'wrap',
            }}
          >
            {value.map(v => (
              <Tag
                variant="tag.rightmargin"
                key={`${v.name}`}
                borderSize={1}
                color={
                  v.importedName === defaultExport ? 'orange' : 'lightgrey'
                }
              >
                {v.importedName === defaultExport ? v.name : v.importedName}
              </Tag>
            ))}
          </Flex>
        ),
      },
      {
        Header: 'peer',
        accessor: 'peer',
        Cell: ({ value }: { value: boolean }) => (value ? '*' : ''),
      },
    ],
    [dependencies, devDependencies],
  );
  const rows = useMemo(() => {
    const dependenciesKeys = Object.keys(dependencies);
    const devDependenciesKeys = Object.keys(devDependencies);
    const peerDependenciesKeys =
      peerDependencies && Object.keys(peerDependencies);
    return Object.keys(imports)
      .map(name => {
        const packageName: string | undefined =
          (dependenciesKeys &&
            dependenciesKeys.find(packageName =>
              name.startsWith(packageName),
            )) ||
          (devDependenciesKeys &&
            devDependenciesKeys.find(packageName =>
              name.startsWith(packageName),
            ));
        return {
          name,
          imports: [...(imports[name] as ImportType[])].sort((a, b) => {
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
          }),
          peer: packageName
            ? peerDependenciesKeys.includes(packageName)
            : false,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [dependencies, devDependencies, imports, peerDependencies]);
  if (!imports) {
    return null;
  }

  return <Table data={rows} columns={columns} />;
};
