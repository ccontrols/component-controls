/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useState, useMemo, useCallback } from 'react';
import { jsx, Link } from 'theme-ui';
import {
  TriangleRightIcon,
  TriangleDownIcon,
  UploadIcon,
} from '@primer/octicons-react';
import {
  Table,
  TableProps,
  Column,
  UseExpandedRowProps,
  Row,
} from '@component-controls/components';
import { ExampleControls } from '@component-controls/core';
import { StoryContextProvider } from '@component-controls/store';

type DataRow = { id: string } & ExampleControls;

export type BaseStoryDataProps = {
  storyId: string;
  values?: ExampleControls;
  pagination?: TableProps<DataRow>['pagination'];
};

/**
 * Displays data-drven table of data rows
 */
export const BaseStoryData: FC<BaseStoryDataProps> = ({
  storyId,
  values,
  pagination = true,
}) => {
  const [controlValues, setControlValues] = useState<ExampleControls>();
  const columns = useMemo(() => {
    const columns = [
      {
        Header: 'select',
        id: '__data_row_select',
        Cell: ({ row: { original } }: { row: Row<DataRow> }) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { id, ...data } = original;
          return (
            <Link
              title="click to select this row of values"
              href="#"
              onClick={e => {
                e.preventDefault();
                setControlValues(data);
              }}
            >
              <UploadIcon />
            </Link>
          );
        },
      },
      {
        Header: '#',
        accessor: '__data_row_id',
        Cell: ({
          row: {
            original: { id },
            isExpanded,
            getToggleRowExpandedProps,
          },
        }: {
          row: UseExpandedRowProps<DataRow> & Row<DataRow>;
        }) => {
          return (
            <div
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              {...getToggleRowExpandedProps()}
            >
              {id}
              <div>
                {isExpanded ? (
                  <TriangleDownIcon size={24} />
                ) : (
                  <TriangleRightIcon size={24} />
                )}
              </div>
            </div>
          );
        },
      },
    ];
    if (values) {
      const keys = Object.keys(values);
      if (keys.length > 0) {
        Object.keys(values[keys[0]]).forEach(key => {
          columns.push({
            Header: key,
            accessor: key,
            Cell: ({
              row: { original, getToggleRowExpandedProps },
            }: {
              row: UseExpandedRowProps<DataRow> & Row<DataRow>;
            }) => {
              return (
                <div
                  sx={{
                    whiteSpace: 'nowrap',
                    maxWidth: '450px',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {typeof original[key] !== 'object' ? (
                    original[key]
                  ) : (
                    <div {...getToggleRowExpandedProps()}>...</div>
                  )}
                </div>
              );
            },
          });
        });
      }
    }
    return columns as Column<DataRow>[];
  }, [values]);
  const data = useMemo(() => {
    if (values) {
      const fields = Object.keys(values);
      return fields.reduce((acc: DataRow[], key: string) => {
        const v = values?.[key] || {};
        return [
          ...acc,
          {
            id: key,
            ...Object.keys(v).reduce(
              (accValues, valueKey) => ({
                ...accValues,
                [valueKey]: v[valueKey],
              }),
              {},
            ),
          },
        ];
      }, []);
    }
    return [];
  }, [values]);

  if (!values) {
    return null;
  }
  const renderRowSubComponent = useCallback(({ row }) => {
    return (
      <div sx={{ pre: { maxWidth: 'unset' }, px: 2 }}>
        <pre>{JSON.stringify(row.original, null, 2)}</pre>
      </div>
    );
  }, []);
  return (
    <StoryContextProvider storyId={storyId} values={controlValues}>
      <Table<DataRow>
        itemsLabel="data"
        sorting={true}
        data={data}
        columns={columns}
        pagination={pagination}
        renderRowSubComponent={renderRowSubComponent}
      />
    </StoryContextProvider>
  );
};
