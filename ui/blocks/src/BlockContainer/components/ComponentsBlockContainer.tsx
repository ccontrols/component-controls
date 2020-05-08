import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';

import { getComponentName } from '@component-controls/specification';
import { hasControls } from '@component-controls/core';
import { CURRENT_STORY } from '../../utils';
import {
  ComponentsContainer,
  ComponentsContainerProps,
  useComponentsContext,
} from '../../context';

export type ComponentsBlockContainerProps = ComponentsContainerProps &
  BlockContainerProps;

export const ComponentsBlockContainer: FC<ComponentsBlockContainerProps> = ({
  title: userTitle,
  collapsible,
  id,
  of,
  children,
  sxStyle,
  visibleOnControlsOnly,
  ...rest
}) => {
  const [title, setTitle] = React.useState<string | undefined>();
  const { components, story } = useComponentsContext({ of });
  const componentNames = Object.keys(components);
  React.useEffect(() => {
    setTitle(
      userTitle === CURRENT_STORY && componentNames.length
        ? getComponentName(components[componentNames[0]])
        : userTitle,
    );
  }, [userTitle]);

  if (
    !componentNames.length &&
    (visibleOnControlsOnly !== true || !hasControls(story?.controls))
  ) {
    //no components to display
    return null;
  }
  const block = (
    <ComponentsContainer
      of={of}
      onSelect={tabName =>
        userTitle === CURRENT_STORY ? setTitle(tabName) : undefined
      }
      visibleOnControlsOnly={visibleOnControlsOnly}
      {...rest}
    >
      {(component, props, otherProps) => children(component, props, otherProps)}
    </ComponentsContainer>
  );
  return block ? (
    <BlockContainer
      title={title}
      collapsible={collapsible}
      id={id}
      sxStyle={sxStyle}
    >
      {block}
    </BlockContainer>
  ) : null;
};
