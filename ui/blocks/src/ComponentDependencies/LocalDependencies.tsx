/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx, Flex, Box } from 'theme-ui';
import {
  Component,
  defaultExport,
  ImportType,
  getStoryPath,
} from '@component-controls/core';
import { Table, Tag, Link } from '@component-controls/components';
import { useStore } from '@component-controls/store';

export interface LocalDependenciesProps {
  component?: Component;
}

type TableImportType = {
  from: string;
  imports: Omit<ImportType, 'from'>[];
}[];

/**
 * base component dependencies
 */

export const LocalDependencies: FC<LocalDependenciesProps> = ({
  component,
}) => {
  const store = useStore();
  const imports: TableImportType = useMemo(() => {
    const { localDependencies } = component || {};
    return localDependencies
      ? Object.keys(localDependencies).reduce(
          (acc: TableImportType, key: string) => [
            ...acc,
            {
              from: key,
              imports: localDependencies[key].map(local => {
                if (local.key) {
                  const componentHash = local.key;
                  const docId = Object.keys(store.docs).find(id => {
                    const doc = store.docs[id];
                    return doc?.componentsLookup
                      ? Object.values(doc?.componentsLookup).includes(
                          componentHash,
                        )
                      : false;
                  });
                  if (docId) {
                    const doc = store.docs[docId];
                    let storyId = undefined;
                    if (doc?.stories?.length) {
                      storyId = doc?.stories[0];
                    }
                    return { ...local, doc, storyId };
                  }
                }
                return local;
              }),
            },
          ],
          [],
        )
      : [];
  }, [component, store]);
  const columns = useMemo(
    () => [
      {
        Header: 'file',
        accessor: 'name',
        Cell: ({
          row: {
            original: { from },
          },
        }: any) => <Box sx={{ whiteSpace: 'nowrap' }}>{from}</Box>,
      },
      {
        Header: 'imports',
        accessor: 'imports',
        Cell: ({
          value,
        }: {
          value: (ImportType & { storyId?: string; doc: Document })[];
        }) => (
          <Flex
            sx={{
              flexWrap: 'wrap',
            }}
          >
            {value.map(({ name, importedName, storyId, doc }) => {
              const storypath =
                (storyId || doc) && getStoryPath(storyId, doc, store);
              const importName =
                importedName === defaultExport ? name : importedName;
              return (
                <Tag
                  variant="tag.rightmargin"
                  key={`${name}`}
                  borderSize={1}
                  color={storypath ? 'red' : 'lightgrey'}
                >
                  {storypath ? (
                    <Link href={storypath}>{importName}</Link>
                  ) : (
                    importName
                  )}
                </Tag>
              );
            })}
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
    <Table
      data-testid="external-dependencies"
      data={imports}
      columns={columns}
    />
  );
};
