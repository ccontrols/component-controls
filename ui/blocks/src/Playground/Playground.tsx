import React, { FC, Children, useContext } from 'react';
import Octicon, { Plus, Dash, Sync } from '@primer/octicons-react';
import { useThemeUI } from 'theme-ui';
import {
  BackgroundType,
  DirectionType,
  PanelContainer,
  PanelContainerProps,
  IconButton,
  Zoom,
} from '@component-controls/components';
import { BlockDataContext } from '../context';

import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer';
import { StoryConfig } from '../StoryConfig';
import { StorySource } from '../StorySource';

export interface PlaygroundOwnProps {
  /**
   * default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.
   */
  scale?: number;

  /**
   * whether to use the dark theme for the story source component.
   */
  dark?: boolean;
}
export type PlaygroundProps = PlaygroundOwnProps &
  StoryBlockContainerProps &
  PanelContainerProps;

export const Playground: FC<PlaygroundProps> = ({
  title,
  id,
  name,
  collapsible,
  dark,
  actions: userActions = [],
  children,
  openTab,
  visibleTabs = false,
  description,
  scale: userScale = 1,
}) => {
  const { theme } = useThemeUI();

  const [scale, setScale] = React.useState(userScale);
  const [background, setBackground] = React.useState<BackgroundType>('light');
  const [direction, setDirection] = React.useState<DirectionType>('ltr');
  const { storyIdFromName, getStoryData } = useContext(BlockDataContext);
  React.useEffect(() => setScale(userScale), [userScale]);
  const zoomActions = React.useMemo(
    () => [
      {
        title: (
          <IconButton onClick={() => setScale(1)} aria-label="reset zoom">
            <Octicon icon={Sync} />
          </IconButton>
        ),
        id: 'zoomreset',
        group: 'zoom',
      },
      {
        title: (
          <IconButton
            onClick={() => setScale(Math.max(0.5, scale - 0.2))}
            aria-label="zoom out"
          >
            <Octicon icon={Dash} />
          </IconButton>
        ),
        id: 'zoomout',
        group: 'zoom',
      },
      {
        title: (
          <IconButton
            onClick={() => setScale(Math.min(3, scale + 0.2))}
            aria-label="zoom in"
          >
            <Octicon icon={Plus} />
          </IconButton>
        ),
        id: 'zoomin',
        group: 'zoom',
      },
    ],
    [scale],
  );
  const childArr = Children.toArray(children);
  const isDark =
    dark === undefined ? theme.initialColorModeName === 'dark' : dark;

  if (childArr.length === 1) {
    //@ts-ignore
    const childProps = childArr[0].props;
    if (childProps) {
      const storyId = childProps.name
        ? storyIdFromName(childProps.name)
        : id || childProps.id;
      const { story } = getStoryData(storyId);
      if (!story) {
        return null;
      }
      userActions.push({
        title: 'source',
        id: 'source',
        group: 'panels',
        'aria-label': 'display story source code',
        panel: (
          <StorySource dark={isDark} sxStyle={{ mt: 0, mb: 0 }} id={storyId} />
        ),
      });
      userActions.push({
        title: 'config',
        id: 'config',
        group: 'panels',
        'aria-label': 'display story configuration object',
        panel: (
          <StoryConfig dark={isDark} sxStyle={{ mt: 0, mb: 0 }} id={storyId} />
        ),
      });
    }
  }

  const storyActions = [
    {
      title: background === 'light' ? 'dark' : 'light',
      id: 'background',
      group: 'story',
      onClick: () => setBackground(background === 'light' ? 'dark' : 'light'),
    },
    {
      title: direction === 'rtl' ? 'LTR' : 'RTL',
      id: 'direction',
      group: 'story',
      onClick: () => setDirection(direction === 'rtl' ? 'ltr' : 'rtl'),
    },
  ];
  const actionsItems = userScale
    ? [...storyActions, ...zoomActions, ...userActions]
    : [...storyActions, ...userActions];
  return (
    <StoryBlockContainer
      description={description}
      useStoryDescription={true}
      name={name}
      title={title}
      id={id}
      collapsible={collapsible}
    >
      {() => (
        <PanelContainer
          plain={false}
          actions={actionsItems}
          openTab={openTab}
          visibleTabs={visibleTabs}
          background={background}
          direction={direction}
        >
          <Zoom scale={scale || 1}>{children}</Zoom>
        </PanelContainer>
      )}
    </StoryBlockContainer>
  );
};
