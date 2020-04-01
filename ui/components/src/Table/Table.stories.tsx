/* eslint-disable react/display-name */
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
];
const mockData = () => {
  let i = 10;
  return Array.apply(null, Array(20)).map(() => ({
    id: i++,
    ...faker.helpers.userCard(),
    age: faker.random.number({ min: 21, max: 25 }),
    subRows: undefined,
  }));
};

export const overview = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table hiddenColumns={['age']} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const noHeader = () => {
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
export const sortable = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table sorting={true} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const filteravle = () => {
  const data = React.useMemo(mockData, []);
  return (
    <ThemeProvider>
      <Table filtering={true} columns={columns} data={data} />
    </ThemeProvider>
  );
};

export const grouping = () => {
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

export const editing = () => {
  const [value, setValue] = React.useState('example');
  const [skipPageReset, setSkipPageReset] = React.useState(false);
  React.useEffect(() => {
    setSkipPageReset(false);
  }, [value]);
  return (
    <ThemeProvider>
      <Table
        skipPageReset={skipPageReset}
        columns={[
          {
            Header: 'Value',
            accessor: 'value',
            Cell: ({
              row: {
                original: { value: cellValue },
              },
            }: any) => (
              <input
                value={cellValue}
                onChange={e => {
                  setSkipPageReset(true);
                  setValue(e.target.value);
                }}
              />
            ),
          },
        ]}
        data={[
          {
            value,
          },
          ,
        ]}
      />
    </ThemeProvider>
  );
};
