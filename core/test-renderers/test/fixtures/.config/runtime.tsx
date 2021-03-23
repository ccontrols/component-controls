import React from 'react';
import { RunOnlyConfiguration } from '@component-controls/core';

const config: RunOnlyConfiguration = {
  analytics: 'UA-172446254-1',
  title: `Component controls`,
  description: `A next-generation tool to create blazing-fast documentation sites`,
  language: `en`,
  author: `@component-controls`,
  decorators: [
    (controls, context) => {
      const { renderFn } = context;
      const story = typeof renderFn === 'function' ? renderFn : controls;
      return (
        <div style={{ background: 'lightblue' }}>
          {story(controls, context)}
        </div>
      );
    },
  ],
};

export default config;
