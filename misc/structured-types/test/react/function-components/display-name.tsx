import React, { FC } from 'react';
/**
 * MyComponent properties.
 */
type OwnProps = {
  /** stringProp description */
  stringProp?: string;

  /** numberProp description */
  numberProp: number;
};

/**
 * MyComponent special component
 */
const MyComponent: FC<OwnProps> = ({ stringProp }) => <div>{stringProp}</div>;

MyComponent.displayName = 'CustomComponentName';

export default MyComponent;
