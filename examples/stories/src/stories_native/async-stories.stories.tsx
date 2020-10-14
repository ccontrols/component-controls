/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';

export default {
  title: 'Introduction/Async stories',
  author: 'atanasster',
};

export const asyncStory = async () => {
  const response = await fetch(
    'https://dummy.restapiexample.com/api/v1/employee/1',
  );
  const { data } = await response.json();
  return () => <h2>{`Hello, my name is ${data.employee_name}.`}</h2>;
};

asyncStory.description =
  'Async story, can *fetch* data or other async activity.';

export async function asyncFunction() {
  const response = await fetch(
    'https://dummy.restapiexample.com/api/v1/employee/1',
  );
  const { data } = await response.json();
  return () => <h2>{`Hello, my name is ${data.employee_name}.`}</h2>;
}

asyncFunction.description =
  'Async exported function, can fetch data or other async activity.';

export const hooksStory = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    const data = async () => {
      const response = await fetch(
        'https://dummy.restapiexample.com/api/v1/employee/1',
      );
      const employee = await response.json();
      setName(employee.data.employee_name);
    };
    data();
  }, []);
  return <h2>{`Hello, my name is ${name}.`}</h2>;
};

hooksStory.description = 'Story fetching data with react hooks/useEffect.';
hooksStory.decorators = [
  (controls, context) => {
    const { renderFn } = context;
    return (
      <div style={{ background: 'lightblue' }}>
        {renderFn(controls, context)}
      </div>
    );
  },
];

export const asyncDecorators = (_, { employee }) => {
  return <h2>{`Hello, my name is ${employee.employee_name}.`}</h2>;
};

asyncDecorators.description =
  'Decorators can also be async functions - if you have storyes that are async, you will need to await call them.';
asyncDecorators.decorators = [
  (controls, context) => {
    const [employee, setEmployee] = useState({});
    useEffect(() => {
      const data = async () => {
        const response = await fetch(
          'https://dummy.restapiexample.com/api/v1/employee/1',
        );
        const { data } = await response.json();
        setEmployee(data);
      };
      data();
    }, []);

    const { renderFn } = context;
    return (
      <div style={{ background: 'lightpink' }}>
        {renderFn(controls, { ...context, employee })}
      </div>
    );
  },
];
