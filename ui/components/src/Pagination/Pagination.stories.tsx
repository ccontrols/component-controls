import React from 'react';
import { Pagination } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const overview = () => (
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

export const onlyPrev = () => (
  <Pagination
    prev={{
      link: '/',
      title: 'link to prev',
    }}
  />
);

export const onlyNext = () => (
  <Pagination
    next={{
      link: '/',
      title: 'link to next',
    }}
  />
);
