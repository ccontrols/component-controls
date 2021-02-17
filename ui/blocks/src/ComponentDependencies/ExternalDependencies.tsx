import React, { FC } from 'react';
import { useComponent } from '@component-controls/store';
import { ComponentsBlockContainer } from '../BlockContainer/components/ComponentsBlockContainer';
import { ComponentExternalDependencies } from './ComponentExternalDependencies';
import { DependenciesProps } from './types';
import { useCustomProps } from '../context';

/**
 * Displays external dependencies for a component
 */

export const ExternalDependencies: FC<DependenciesProps> = fullProps => {
  const props = useCustomProps<DependenciesProps>(
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
        <ComponentExternalDependencies component={component} {...rest} />
      )}
    </ComponentsBlockContainer>
  );
};
