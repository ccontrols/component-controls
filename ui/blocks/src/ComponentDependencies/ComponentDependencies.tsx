import React, { FC } from 'react';
import { useComponent } from '@component-controls/store';
import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { ExternalDependencies } from './ExternalDependencies';
import { LocalDependencies } from './LocalDependencies';

export type ComponentDepsProps = {} & Omit<
  ComponentsBlockContainerProps,
  'children'
>;
/**
 * Displays external dependencies for a component
 */

export const ComponentExternalDependencies: FC<ComponentDepsProps> = props => {
  const component = useComponent({ of: props.of });
  if (!component) {
    return null;
  }
  const { externalDependencies } = component;
  if (!externalDependencies || !Object.keys(externalDependencies).length) {
    return null;
  }
  return (
    <ComponentsBlockContainer {...props}>
      {(component, rest) => {
        return externalDependencies &&
          Object.keys(externalDependencies).length ? (
          <ExternalDependencies component={component} {...rest} />
        ) : null;
      }}
    </ComponentsBlockContainer>
  );
};

/**
 * Displays local dependencies for a component
 */

export const ComponentLocalDependencies: FC<ComponentDepsProps> = props => {
  const component = useComponent({ of: props.of });
  if (!component) {
    return null;
  }
  const { localDependencies } = component;
  if (!localDependencies || !Object.keys(localDependencies).length) {
    return null;
  }

  return (
    <ComponentsBlockContainer visibility="info" {...props}>
      {(component, rest) => {
        const { localDependencies } = component;
        return localDependencies && Object.keys(localDependencies).length ? (
          <LocalDependencies component={component} {...rest} />
        ) : null;
      }}
    </ComponentsBlockContainer>
  );
};
