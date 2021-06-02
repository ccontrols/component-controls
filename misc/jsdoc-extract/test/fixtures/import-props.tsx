import React, { FC } from 'react';
import { ComponentProps } from './type-props';

export const ComponentFC: FC<ComponentProps> = props => <div {...props} />;

export const ComponentReactFunctionalComponent: React.FunctionComponent<ComponentProps> = props => (
  <div {...props} />
);

export const ComponentUntyped = (props: ComponentProps) => <div {...props} />;

export const ComponentEnhancedProps = (props: ComponentProps) => (
  <div {...props} />
);

export default ComponentFC;
