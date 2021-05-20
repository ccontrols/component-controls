/* eslint-disable react/display-name */
import React, { useMemo, useState, useEffect } from 'react';
import { Document, Example, faker } from '@component-controls/core';
import { Table, Column } from './Table';
import { TablePaginationProps } from './TablePagination';
import { ThemeProvider } from '../ThemeContext';

export default {
  title: 'Components/Table',
  component: Table,
  category: 'Display',
} as Document;

type DataType = {
  age: number;
  name: string;
  username: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
};
const columns: Column<DataType>[] = [
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'User Name',
    accessor: 'username',
    width: '20%',
  },
  {
    Header: 'Street',
    accessor: 'address.street' as any,
  },
  {
    Header: 'City',
    accessor: 'address.city' as any,
  },
  {
    Header: 'Zip Code',
    accessor: 'address.zipcode' as any,
  },
];
const mockDataGenerator = (count = 20): DataType[] => {
  let i = 10;
  faker.seed(123);
  // eslint-disable-next-line prefer-spread
  return Array.apply(null, Array(count)).map(() => ({
    id: i++,
    ...faker.helpers.userCard(),
    age: faker.random.number({ min: 21, max: 25 }),
    subRows: undefined,
  }));
};

const mockData = () => mockDataGenerator(5);
export const overview: Example = () => {
  const data = useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table<DataType> hiddenColumns={['age']} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const noHeader: Example = () => {
  const data = useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table<DataType>
        header={false}
        hiddenColumns={['age']}
        columns={columns}
        data={data}
      />
    </ThemeProvider>
  );
};
export const sortable: Example = () => {
  const data = useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table<DataType>
        sorting={true}
        columns={columns}
        data={data}
        sortBy={[
          {
            id: 'age',
            desc: true,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export const filterable: Example = () => {
  const data = useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table filtering={true} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const grouping: Example = () => {
  const data = useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table<DataType>
        expanded={{ 'age:21': true }}
        groupBy={['age']}
        columns={columns}
        data={data}
      />
    </ThemeProvider>
  );
};

export const editing: Example = () => {
  const [data, setData] = useState([{ value: 'example' }]);
  const [skipPageReset, setSkipPageReset] = useState(false);
  useEffect(() => {
    setSkipPageReset(false);
  }, [data]);
  const columns = useMemo(
    () =>
      [
        {
          Header: 'Value',
          accessor: 'value',
          Cell: ({ cell: { value } }: any) => {
            return (
              <input
                aria-label="edit table value"
                value={value}
                onChange={e => {
                  setSkipPageReset(true);
                  setData([{ value: e.target.value }]);
                }}
              />
            );
          },
        },
      ] as Column<{ value: string }>[],
    [],
  );

  return (
    <ThemeProvider>
      <Table<{ value: string }>
        skipPageReset={skipPageReset}
        columns={columns}
        data={data}
      />
    </ThemeProvider>
  );
};

export const rowSelect: Example = () => {
  const data = useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table<DataType> rowSelect={true} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const pagination: Example<TablePaginationProps> = ({
  totalCountVisible,
  totalCountTemplate,
  pageIndex,
  pageSize,
  pageTemplate,
  pageVisible,
  pageSizeTemplate,
  pageSizeVisible,
  goToPageVisible,
  goToPageTemplate,
}) => {
  const data = useMemo(mockDataGenerator, []);
  return (
    <ThemeProvider>
      <Table<DataType>
        pagination={{
          totalCountVisible,
          totalCountTemplate,
          pageIndex,
          pageSize,
          pageTemplate,
          pageVisible,
          pageSizeTemplate,
          pageSizeVisible,
          goToPageVisible,
          goToPageTemplate,
        }}
        columns={columns}
        data={data}
      />
    </ThemeProvider>
  );
};

pagination.controls = {
  totalCountVisible: true,
  totalCountTemplate: 'Total: ${totalData} records',
  pageIndex: 0,
  pageSize: 10,
  pageTemplate: 'Page ${pageIndex} of ${pageLength}',
  pageVisible: false,
  pageSizeTemplate: '${pageSize} rows',
  pageSizeVisible: false,
  goToPageVisible: false,
  goToPageTemplate: 'Go to page:',
};
