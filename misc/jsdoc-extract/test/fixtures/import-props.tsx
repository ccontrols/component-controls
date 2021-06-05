import React, { FC } from 'react';
import { ComponentProps } from './utility-files/type-props';
import { InterfaceProps } from './utility-files/interafce-props';

export const ComponentReactFunctionalComponent: React.FunctionComponent<ComponentProps> = props => (
  <div {...props} />
);
