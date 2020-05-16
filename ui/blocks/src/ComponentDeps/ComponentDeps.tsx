import React, { FC } from 'react';

import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { BaseComponentDeps } from './BaseComponentDeps';

export type ComponentDepsProps = Omit<
  ComponentsBlockContainerProps,
  'children'
>;
/**
 * Displays external dependencies for a component
 */

export const ComponentDeps: FC<ComponentDepsProps> = ({ ...rest }) => {
  return (
    <ComponentsBlockContainer visibility="info" {...rest}>
      {(component, { componentPackage }) => (
        <BaseComponentDeps
          component={component}
          componentPackage={componentPackage}
        />
      )}
    </ComponentsBlockContainer>
  );
};
