import React from 'react';
import faker from 'faker';
import { Table } from './Table';
import { ThemeProvider } from '../ThemeContext';

export default {
  title: 'Components/Table',
  component: Table,
};

const columns = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'User Name',
        accessor: 'username',
      },
    ],
  },
  {
    Header: 'Address',
    columns: [
      {
        Header: 'Street',
        accessor: 'address.street',
      },
      {
        Header: 'Suite',
        accessor: 'address.suite',
      },
      {
        Header: 'City',
        accessor: 'address.city',
      },
      {
        Header: 'Zip Code',
        accessor: 'address.zipcode',
      },
    ],
  },
];
const mockData = () =>
  Array.apply(null, Array(20)).map(() => ({
    ...faker.helpers.userCard(),
    subRows: undefined,
  }));

export const main = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const sortable = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table sorting={true} columns={columns} data={data} />
    </ThemeProvider>
  );
};
