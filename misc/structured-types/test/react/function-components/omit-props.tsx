import React from 'react';

interface PrimitmiveProps {
  stringProp: string;
  boolProp: boolean;
}
type OmitProps = Omit<PrimitmiveProps, 'boolProp'>;
type ComponentProps = OmitProps & {
  prop1?: 'this' | 'that';
};

export const MyComponent: React.FC<ComponentProps> = props => {
  return <span>Hello, {props.stringProp}!</span>;
};
