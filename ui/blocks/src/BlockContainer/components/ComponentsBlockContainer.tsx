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
  sxStyle,
  visibility,
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

  const block = (
    <ComponentsContainer
      of={of}
      onSelect={tabName =>
        userTitle === CURRENT_STORY ? setTitle(tabName) : undefined
      }
      {...rest}
    >
      {(component, props, otherProps) => {
        const child = children(component, props, otherProps);
        return child;
      }}
    </ComponentsContainer>
  );
  console.log(visibility, React.Children.count(block));
  return (
    <BlockContainer
      title={title}
      collapsible={collapsible}
      id={id}
      sxStyle={sxStyle}
    >
      {block}
    </BlockContainer>
  );
};
