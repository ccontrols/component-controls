import React from 'react';

/**
 * special react component
 */
export const MyComponent: React.FC<{
  /**
   * optional string prop
   */
  name?: string;
  /**
   * a required number prop
   */
  numProp: number;
}> = ({ name = 'hello' }) => <span>Hello, {name}!</span>;
