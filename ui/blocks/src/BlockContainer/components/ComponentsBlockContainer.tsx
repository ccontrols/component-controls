import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';

import {
  getComponentName,
  hasControls,
  CURRENT_STORY,
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
} & Omit<ComponentsContainerProps, 'components'> &
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
  const [title, setTitle] = React.useState<string | undefined>();
  const components = useComponents({ of });
  const story = useStory({ id, name });
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
      components={components}
      onSelect={tabName =>
        userTitle === CURRENT_STORY ? setTitle(tabName) : undefined
      }
      {...rest}
    >
      {(component, otherProps) => {
        child = children(component, otherProps);
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
