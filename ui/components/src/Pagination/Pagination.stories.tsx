import React from 'react';
import { Example } from '@component-controls/core';
import { Pagination } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const overview: Example = () => (
  <Pagination
    prev={{
      link: '/',
      title: 'link to prev',
    }}
    next={{
      link: '/',
      title: 'link to prev',
    }}
  />
);

export const onlyPrev: Example = () => (
  <Pagination
    prev={{
      link: '/',
      title: 'link to prev',
    }}
  />
);

export const onlyNext: Example = () => (
  <Pagination
    next={{
      link: '/',
      title: 'link to next',
    }}
  />
);
