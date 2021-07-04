import React, { FC } from 'react';
import { ComponentProps } from './utility-files/type-props';
import { InterfaceProps } from './utility-files/interafce-props';

export const ComponentFC: FC<ComponentProps> = props => <div {...props} />;

export const ComponentReactFunctionalComponent: React.FunctionComponent<ComponentProps> = props => (
  <div {...props} />
);

export const ComponentUntyped = (props: ComponentProps) => <div {...props} />;

export const ComponentEnhancedProps = (props: ComponentProps) => (
  <div {...props} />
);

export const ComponentInterfaceProps = (props: InterfaceProps) => (
  <div {...props} />
);

export default ComponentFC;
