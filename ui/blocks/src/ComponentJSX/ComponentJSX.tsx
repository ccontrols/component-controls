import React, { FC } from 'react';
import { useComponent } from '@component-controls/store';
import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { ComponentJSXTree } from './ComponentJSXTree';
import { useCustomProps } from '../context';

export type ComponentJSXProps = {} & Omit<
  ComponentsBlockContainerProps,
  'children'
>;

const NAME = 'component_jsx';
/**
 * Displays external dependencies for a component
 */

export const ComponentJSX: FC<ComponentJSXProps> = fullProps => {
  const props = useCustomProps<ComponentJSXProps>(NAME, fullProps);
  const component = useComponent({ of: props.of });
  if (!component?.jsx) {
    return null;
  }
  return (
    <ComponentsBlockContainer {...props}>
      {(component, rest) => (
        <ComponentJSXTree component={component} {...rest} />
      )}
    </ComponentsBlockContainer>
  );
};
