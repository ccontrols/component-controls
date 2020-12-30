import React, { FC, ReactElement, useState, useEffect } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';

import {
  getComponentName,
  getControlsCount,
  CURRENT_STORY,
  Story,
  Component,
} from '@component-controls/core';
import {
  useComponents,
  ComponentInputProps,
  useStory,
} from '@component-controls/store';
import {
  ComponentsContainer,
  ComponentsContainerProps,
} from './ComponentsContainer';

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

  children: (
    component: Component,
    props: any,
    story?: Story,
  ) => ReactElement | null;
} & Omit<ComponentsContainerProps, 'components' | 'children'> &
  ComponentInputProps &
  BlockContainerProps;

export const ComponentsBlockContainer: FC<ComponentsBlockContainerProps> = ({
  title: userTitle,
  collapsible,
  name,
  id,
  of,
  children,
  visibility,
  'data-testid': dataTestid,
  ...rest
}) => {
  const [title, setTitle] = useState<string | undefined>();
  const components = useComponents({ of });
  const story = useStory({ id, name });
  useEffect(() => {
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
    getControlsCount(story?.controls) > 0
  ) {
    keys.push('Controls');
  }
  if (keys.length === 0) {
    return null;
  }
  let child: ReactElement | null = null;
  const block = (
    <ComponentsContainer
      components={components}
      onSelect={tabName =>
        userTitle === CURRENT_STORY ? setTitle(tabName) : undefined
      }
      {...rest}
    >
      {(component, otherProps) => {
        child = children(component, otherProps, story);
        return child;
      }}
    </ComponentsContainer>
  );
  // console.log(child);
  return (
    <BlockContainer
      data-testid={dataTestid}
      title={title}
      collapsible={collapsible}
      id={id}
    >
      {block}
    </BlockContainer>
  );
};
