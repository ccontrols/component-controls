/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import { Document, Example, useAsync } from '@component-controls/core';

export default {
  title: 'ESM/Async stories',
  author: 'atanasster',
  order: 10,
} as Document;

const fetchData = async () => {
  const response = await fetch('//dummy.restapiexample.com/api/v1/employee/1');
  const { data } = await response.json();
  return data;
};

const storyTemplate = employee => (
  <h2>{`Hello, my name is ${
    employee ? employee.employee_name : 'loading...'
  }.`}</h2>
);
export const asyncStory: Example = () => {
  const { value } = useAsync(fetchData);
  return storyTemplate(value);
};

asyncStory.description =
  'Stories can invoke async operations using the useAsync hook.';

export const hooksStory: Example = () => {
  const [employee, setEmployee] = useState('');
  useEffect(() => {
    const data = async () => {
      const employee = await fetchData();
      setEmployee(employee);
    };
    data();
  }, []);
  return storyTemplate(employee);
};

hooksStory.description =
  'Story fetching data with regular react hooks/useEffect.';
hooksStory.decorators = [
  (controls, context) => {
    const { renderFn } = context;
    const story = typeof renderFn === 'function' ? renderFn : controls;
    return (
      <div style={{ background: 'lightblue' }}>{story(controls, context)}</div>
    );
  },
];

export const asyncDecorators = (_, { employee }) => storyTemplate(employee);

asyncDecorators.description =
  'Decorators can also fetch async data using the useAsync hook.';
asyncDecorators.decorators = [
  (controls, context) => {
    const { value } = useAsync(fetchData);
    const { renderFn } = context;
    const story = typeof renderFn === 'function' ? renderFn : controls;
    return (
      <div style={{ background: 'lightpink' }}>
        {story(controls, { ...context, employee: value })}
      </div>
    );
  },
];

export const asyncHooksDecorators = (_, { employee }) =>
  storyTemplate(employee);

asyncHooksDecorators.description =
  'Decorators can also fetch async data using react hooks/useEffect.';
asyncHooksDecorators.decorators = [
  (controls, context) => {
    const [employee, setEmployee] = useState({});
    useEffect(() => {
      const data = async () => {
        const employee = await fetchData();
        setEmployee(employee);
      };
      data();
    }, []);

    const { renderFn } = context;
    const story = typeof renderFn === 'function' ? renderFn : controls;
    return (
      <div style={{ background: 'lightpink' }}>
        {story(controls, { ...context, employee })}
      </div>
    );
  },
];
