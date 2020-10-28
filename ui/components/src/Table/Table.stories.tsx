/* eslint-disable react/display-name */
import React from 'react';
import { Example, faker } from '@component-controls/core';
import { Table } from './Table';
import { ThemeProvider } from '../ThemeContext';

export default {
  title: 'Components/Table',
  component: Table,
};

const columns = [
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
    accessor: 'address.street',
  },
  {
    Header: 'City',
    accessor: 'address.city',
  },
  {
    Header: 'Zip Code',
    accessor: 'address.zipcode',
  },
];
const mockData = () => {
  let i = 10;
  faker.seed(123);
  // eslint-disable-next-line prefer-spread
  return Array.apply(null, Array(20)).map(() => ({
    id: i++,
    ...faker.helpers.userCard(),
    age: faker.random.number({ min: 21, max: 25 }),
    subRows: undefined,
  }));
};

export const overview: Example = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table hiddenColumns={['age']} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const noHeader: Example = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table
        header={false}
        hiddenColumns={['age']}
        columns={columns}
        data={data}
      />
    </ThemeProvider>
  );
};
export const sortable: Example = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table sorting={true} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const filterable: Example = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table filtering={true} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const grouping: Example = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table
        expanded={{ 'age:21': true }}
        groupBy={['age']}
        columns={columns}
        data={data}
      />
    </ThemeProvider>
  );
};

export const editing: Example = () => {
  const [data, setData] = React.useState([{ value: 'example' }]);
  const [skipPageReset, setSkipPageReset] = React.useState(false);
  React.useEffect(() => {
    setSkipPageReset(false);
  }, [data]);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Value',
        accessor: 'value',
        Cell: ({ cell: { value } }: any) => {
          return (
            <input
              value={value}
              onChange={e => {
                setSkipPageReset(true);
                setData([{ value: e.target.value }]);
              }}
            />
          );
        },
      },
    ],
    [],
  );

  return (
    <ThemeProvider>
      <Table skipPageReset={skipPageReset} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const rowSelect: Example = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table rowSelect={true} columns={columns} data={data} />
    </ThemeProvider>
  );
};
