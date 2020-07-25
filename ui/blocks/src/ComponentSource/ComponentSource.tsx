import React, { FC } from 'react';
import { SourceProps } from '@component-controls/components';
import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';

import { BaseComponentSource } from './BaseComponentSource';

export type ComponentSourceProps = Omit<
  ComponentsBlockContainerProps,
  'children'
> &
  Omit<SourceProps, 'children'>;

/**
 * Displays import statement for a component as well as the component file source code
 * Optionally also displays some repository information from the component's package.json
 */

export const ComponentSource: FC<ComponentSourceProps> = props => {
  return (
    <ComponentsBlockContainer visibility="info" {...props}>
      {(component, sourceProps) => (
        <BaseComponentSource component={component} {...sourceProps} />
      )}
    </ComponentsBlockContainer>
  );
};
