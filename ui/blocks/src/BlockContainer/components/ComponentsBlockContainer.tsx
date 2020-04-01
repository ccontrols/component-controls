import React, { FC } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import { CURRENT_STORY, getComponentName } from '../../utils';
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
  ...rest
}) => {
  const [title, setTitle] = React.useState<string | undefined>();
  const { components } = useComponentsContext({ of });
  const componentNames = Object.keys(components);
  React.useEffect(() => {
    setTitle(
      userTitle === CURRENT_STORY && componentNames.length
        ? getComponentName(components[componentNames[0]])
        : userTitle,
    );
  }, [userTitle]);
  if (!componentNames.length) {
    //no components to display
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
      {(component, props, otherProps) => children(component, props, otherProps)}
    </ComponentsContainer>
  );
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
