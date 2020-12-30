import React, { FC } from 'react';
import { useComponent } from '@component-controls/store';
import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { ExternalDependencies } from './ExternalDependencies';
import { LocalDependencies } from './LocalDependencies';
import { useCustomProps } from '../context';

export type ComponentDepsProps = {} & Omit<
  ComponentsBlockContainerProps,
  'children'
>;
/**
 * Displays external dependencies for a component
 */

export const ComponentExternalDependencies: FC<ComponentDepsProps> = fullProps => {
  const props = useCustomProps<ComponentDepsProps>(
    'external_dependencies',
    fullProps,
  );

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
      {(component, rest) => (
        <ExternalDependencies component={component} {...rest} />
      )}
    </ComponentsBlockContainer>
  );
};

/**
 * Displays local dependencies for a component
 */

export const ComponentLocalDependencies: FC<ComponentDepsProps> = fullProps => {
  const props = useCustomProps<ComponentDepsProps>(
    'local_dependencies',
    fullProps,
  );
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
      {(component, rest) => (
        <LocalDependencies component={component} {...rest} />
      )}
    </ComponentsBlockContainer>
  );
};
