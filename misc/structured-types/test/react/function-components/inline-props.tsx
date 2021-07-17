import React from 'react';

export const MyComponent = ({
  name = 'hello',
}: {
  name?: string;
}): React.ReactNode => <span>Hello, {name}!</span>;
