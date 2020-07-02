import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';

import { getComponentName, hasControls } from '@component-controls/core';
import { CURRENT_STORY } from '../../utils';
import {
  ComponentsContainer,
  ComponentsContainerProps,
  useComponentsContext,
} from '../../context';

/**
 * component level visibility
 */
export type ComponentVisibility = 'controls' | 'info' | 'all';

export type ComponentsBlockContainerProps = {
  /**
   * by default will show both controls and props tables
   * user setting can display only props table or only controls
   */
  visibility?: ComponentVisibility;
} & ComponentsContainerProps &
  BlockContainerProps;

export const ComponentsBlockContainer: FC<ComponentsBlockContainerProps> = ({
  title: userTitle,
  collapsible,
  id,
  of,
  children,
  visibility,
  ...rest
}) => {
  const [title, setTitle] = React.useState<string | undefined>();
  const { components, story } = useComponentsContext({ of });

  React.useEffect(() => {
    const componentNames = Object.keys(components);
    setTitle(
      userTitle === CURRENT_STORY && componentNames.length
        ? getComponentName(components[componentNames[0]])
        : userTitle,
    );
  }, [userTitle, components]);

  const keys =
    components && visibility !== 'controls' ? Object.keys(components) : [];
  if (
    keys.length === 0 &&
    visibility !== 'info' &&
    hasControls(story?.controls)
  ) {
    keys.push('Controls');
  }

  if (keys.length === 0) {
    return null;
  }
  let child: React.ReactElement | null = null;
  const block = (
    <ComponentsContainer
      of={of}
      onSelect={tabName =>
        userTitle === CURRENT_STORY ? setTitle(tabName) : undefined
      }
      {...rest}
    >
      {(component, props, otherProps) => {
        child = children(component, props, otherProps);
        return child;
      }}
    </ComponentsContainer>
  );
  // console.log(child);
  return child ? (
    <BlockContainer title={title} collapsible={collapsible} id={id}>
      {block}
    </BlockContainer>
  ) : null;
};
