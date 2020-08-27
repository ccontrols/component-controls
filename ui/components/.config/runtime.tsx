import React from 'react';
import { ThemeProvider } from '../src/ThemeContext/ThemeContext'
export default {
  decorators: [
  (controls, context) => {
    const { renderFn } = context;
    return (
      <ThemeProvider>
        {renderFn(controls, context)}
      </ThemeProvider>
    );
  },
  ]
}