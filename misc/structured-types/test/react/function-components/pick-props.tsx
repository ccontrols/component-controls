import React, { BaseHTMLAttributes } from 'react';
/**
 * MyComponent special component
 */

export const MyComponent = (
  props: Pick<BaseHTMLAttributes<HTMLDivElement>, 'style'>,
) => <div {...props}>Hello</div>;
