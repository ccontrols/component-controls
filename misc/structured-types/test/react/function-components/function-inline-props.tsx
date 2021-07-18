import React from 'react';

export function MyComponent({
  name = 'hello',
}: {
  name?: string;
}): React.ReactNode {
  return <span>Hello, {name}!</span>;
}
