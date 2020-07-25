import React, { FC, Children } from 'react';
import { PlusIcon, DashIcon, SyncIcon } from '@primer/octicons-react';
import { Story } from '@component-controls/core';
import { getStoryIdFromName, useGetStory } from '@component-controls/store';

import {
  BackgroundType,
  DirectionType,
  PanelContainer,
  PanelContainerProps,
  IconButton,
  Zoom,
  useTheme,
  ActionItems,
} from '@component-controls/components';
import { useCustomProps } from '../context';
import { PlaygroundContext } from './PlaygroundContext';

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

const NAME = 'playground';

/**
 * Component to display a live playground of component examples. Has custom actions for zooming, switch direction, review story source and configuration.
 */
export const Playground: FC<PlaygroundProps> = ({ children, ...props }) => {
  const theme = useTheme();
  const custom = useCustomProps<PlaygroundProps>(NAME, props);
  const {
    id,
    title,
    collapsible,
    dark,
    actions: userActions = [],
    openTab,
    visibleTabs = false,
    description,
    scale: userScale = 1,
  } = custom;

  const [scale, setScale] = React.useState(userScale);
  const [background, setBackground] = React.useState<BackgroundType>('light');
  const [direction, setDirection] = React.useState<DirectionType>('ltr');
  React.useEffect(() => setScale(userScale), [userScale]);
  const zoomActions: ActionItems = React.useMemo(
    () => [
      {
        node: (
          <IconButton onClick={() => setScale(1)} aria-label="reset zoom">
            <SyncIcon />
          </IconButton>
        ),
        id: 'zoomreset',
        group: 'zoom',
      },
      {
        node: (
          <IconButton
            onClick={() => setScale(Math.max(0.5, scale - 0.2))}
            aria-label="zoom out"
          >
            <DashIcon />
          </IconButton>
        ),
        id: 'zoomout',
        group: 'zoom',
      },
      {
        node: (
          <IconButton
            onClick={() => setScale(Math.min(3, scale + 0.2))}
            aria-label="zoom in"
          >
            <PlusIcon />
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
  let story: Story | undefined = undefined;
  const storyIdFromName = getStoryIdFromName();
  const getStory = useGetStory();
  if (childArr.length === 1) {
    //@ts-ignore
    const childProps = childArr[0].props;
    if (childProps) {
      const storyId = childProps.name
        ? storyIdFromName(childProps.name)
        : id || childProps.id;
      story = getStory({ id: storyId });
      if (!story) {
        return null;
      }
      userActions.push({
        node: 'source',
        id: 'source',
        group: 'panels',
        'aria-label': 'display story source code',
        panel: (
          <StorySource
            sourceProps={{ dark: isDark }}
            sxStyle={{ mt: 0, mb: 0 }}
            id={storyId}
          />
        ),
      });
      userActions.push({
        node: 'config',
        id: 'config',
        group: 'panels',
        'aria-label': 'display story configuration object',
        panel: (
          <StoryConfig
            sourceProps={{ dark: isDark }}
            sxStyle={{ mt: 0, mb: 0 }}
            id={storyId}
          />
        ),
      });
    }
  }

  const storyActions: ActionItems = [
    {
      node: background === 'light' ? 'dark' : 'light',
      id: 'background',
      group: 'story',
      onClick: () => setBackground(background === 'light' ? 'dark' : 'light'),
    },
    {
      node: direction === 'rtl' ? 'LTR' : 'RTL',
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
      story={story}
      data-testid={NAME}
      description={description}
      useStoryDescription={true}
      title={title}
      collapsible={collapsible}
    >
      <PanelContainer
        plain={false}
        actions={actionsItems}
        openTab={openTab}
        visibleTabs={visibleTabs}
        background={background}
        direction={direction}
      >
        <Zoom scale={scale || 1}>
          <PlaygroundContext.Provider value={{ useDescription: true }}>
            {children}
          </PlaygroundContext.Provider>
        </Zoom>
      </PanelContainer>
    </StoryBlockContainer>
  );
};
