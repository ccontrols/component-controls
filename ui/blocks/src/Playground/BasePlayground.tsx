import React, { FC } from 'react';
import { PlusIcon, DashIcon, SyncIcon } from '@primer/octicons-react';
import { Box } from 'theme-ui';
import { Story } from '@component-controls/core';
import {
  PanelContainer,
  Zoom,
  ActionItems,
  BackgroundType,
  DirectionType,
  IconButton,
  PanelContainerProps,
  Source,
} from '@component-controls/components';

import { PlaygroundContext } from './PlaygroundContext';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer';
import { useCustomProps } from '../context';
export const NAME = 'playground';

export interface PlaygroundOwnProps {
  /**
   * default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.
   */
  scale?: number;
  /**
   * playground source option - this when a Story is not embedded inside the Playground.
   */
  source?: string;

  /**
   * whether to use the dark theme for the story source component.
   */
  dark?: boolean;
}
export type PlaygroundProps = PlaygroundOwnProps &
  StoryBlockContainerProps &
  PanelContainerProps;

export type BasePlaygroundProps = PlaygroundProps & {
  story?: Story;
  isDark?: boolean;
  wrapper?: boolean;
};

export const BasePlayground: FC<BasePlaygroundProps> = ({
  children,
  story,
  isDark,
  wrapper = true,
  source,
  ...props
}) => {
  const custom = useCustomProps<PlaygroundProps>(NAME, props);
  const {
    title,
    collapsible,
    description,
    scale: userScale = 1,
    actions: userActions = [],
    openTab,
    visibleTabs = false,
  } = custom;
  const [scale, setScale] = React.useState(userScale);
  const [background, setBackground] = React.useState<BackgroundType>('light');
  const [direction, setDirection] = React.useState<DirectionType>('ltr');
  let tab = openTab;
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
  const layoutActions: ActionItems = [
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
  const sourceActions = [];
  if (source && !story) {
    sourceActions.push({
      node: 'source',
      id: 'source',
      group: 'panels',
      'aria-label': 'display playground source code',
      panel: (
        <Source language="javascript" dark={isDark}>
          {source}
        </Source>
      ),
    });
    if (tab === undefined) {
      tab = 'source';
    }
  }
  const actionsItems = userScale
    ? [...layoutActions, ...zoomActions, ...sourceActions, ...userActions]
    : [...layoutActions, ...sourceActions, ...userActions];
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
        openTab={tab}
        visibleTabs={visibleTabs}
        background={background}
        direction={direction}
      >
        <Zoom scale={scale || 1}>
          <PlaygroundContext.Provider value={{ useDescription: true }}>
            {wrapper ? (
              <Box variant="playground.container">{children}</Box>
            ) : (
              children
            )}
          </PlaygroundContext.Provider>
        </Zoom>
      </PanelContainer>
    </StoryBlockContainer>
  );
};
