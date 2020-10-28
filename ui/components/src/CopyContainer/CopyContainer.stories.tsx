import React from 'react';
import { Example } from '@component-controls/core';
import { CopyContainer } from '.';

export default {
  title: 'Components/CopyContainer',
  component: CopyContainer,
};

export const overview: Example = () => (
  <CopyContainer value="some text">
    <div style={{ border: '1px solid black', padding: '5px' }}>
      <p>some text.</p>
      <p>click to copy</p>
    </div>
  </CopyContainer>
);
