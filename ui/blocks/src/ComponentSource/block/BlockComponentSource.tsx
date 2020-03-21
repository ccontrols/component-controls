import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import {
  ComponentSource,
  ComponentSourceProps,
} from '../plain/ComponentSource';

export type BlockComponentSourceProps = ComponentSourceProps &
  BlockContainerProps;

/**
 * Displays import statement for a component as well as the component file source code
 * Optionally also displays some repository information from the component's package.json
 */

export const BlockComponentSource: FC<BlockComponentSourceProps> = ({
  title,
  ...rest
}) => {
  return (
    <BlockContainer title={title}>
      <ComponentSource {...rest} />
    </BlockContainer>
  );
};
