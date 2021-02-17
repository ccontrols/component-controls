import React from 'react';
import { Box } from 'theme-ui';
import { Document, Example } from '@component-controls/core';
import { Pagination } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  category: 'Navigation',
} as Document;

export const overview: Example = () => (
  <Box style={{ width: '100%' }}>
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
  </Box>
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
