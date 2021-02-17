import React, { FC } from 'react';
import { useComponent } from '@component-controls/store';
import { ComponentsBlockContainer } from '../BlockContainer/components/ComponentsBlockContainer';
import { ComponentLocalDependencies } from './ComponentLocalDependencies';
import { DependenciesProps } from './types';
import { useCustomProps } from '../context';

/**
 * Displays local dependencies for a component
 */

export const LocalDependencies: FC<DependenciesProps> = fullProps => {
  const props = useCustomProps<DependenciesProps>(
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
        <ComponentLocalDependencies component={component} {...rest} />
      )}
    </ComponentsBlockContainer>
  );
};
