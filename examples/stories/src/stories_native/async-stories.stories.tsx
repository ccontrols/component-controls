/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';

export default {
  title: 'Introduction/Async stories',
  author: 'atanasster',
};

export const asyncStory = async () => {
  const response = await fetch(
    'http://dummy.restapiexample.com/api/v1/employee/1',
  );
  const { data } = await response.json();
  return () => <h2>{`Hello, my name is ${data.employee_name}.`}</h2>;
};

asyncStory.description = 'Async story, can fetch data or other async activity.';

export const hooksStory = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    const data = async () => {
      const response = await fetch(
        'http://dummy.restapiexample.com/api/v1/employee/1',
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
export const asyncDecorators = async () => {
  const response = await fetch(
    'http://dummy.restapiexample.com/api/v1/employee/1',
  );
  const { data } = await response.json();
  return () => <h2>{`Hello, my name is ${data.employee_name}.`}</h2>;
};

asyncDecorators.description =
  'Decorators can also be async functions - if you have storyes that are async, you will need to await call them.';
asyncDecorators.decorators = [
  async (controls, context) => {
    const { renderFn } = context;
    const next = await renderFn(controls, context);
    return () => <div style={{ background: 'lightpink' }}>{next}</div>;
  },
];
