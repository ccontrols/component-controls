import React from 'react';
import { Resizer } from '.';

export default {
  title: 'App components/Resizer',
  component: Resizer,
};

export const overview = () => (
  <Resizer>
    <div style={{ height: '100px', backgroundColor: 'grey' }} />
    <div style={{ height: '100px', backgroundColor: 'red' }} />
  </Resizer>
);

export const minSize = () => (
  <Resizer sectionOneProps={{ minSize: '100px' }}>
    <div style={{ height: '100px', backgroundColor: 'grey' }} />
    <div style={{ height: '100px', backgroundColor: 'red' }} />
  </Resizer>
);

export const barSize = () => (
  <Resizer barProps={{ size: 20 }}>
    <div style={{ height: '100px', backgroundColor: 'grey' }} />
    <div style={{ height: '100px', backgroundColor: 'red' }} />
  </Resizer>
);

export const onAfterResize = () => (
  <Resizer containerProps={{ afterResizing: () => alert('After resize') }}>
    <div style={{ height: '100px', backgroundColor: 'grey' }} />
    <div style={{ height: '100px', backgroundColor: 'red' }} />
  </Resizer>
);
