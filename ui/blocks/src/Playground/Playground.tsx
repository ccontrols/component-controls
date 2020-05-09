import React, { FC, MouseEvent } from 'react';
import Octicon, { Plus, Dash, Sync } from '@primer/octicons-react';
import {
  Collapsible,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  getSortedPanels,
  ActionItems,
  ActionItem,
  ActionContainer,
  ActionContainerProps,
  Zoom,
} from '@component-controls/components';

import { Button, ButtonProps, useThemeUI } from 'theme-ui';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer';
import { StoryConfig } from '../StoryConfig';
import { StorySource } from '../StorySource';

const IconButton = (props: ButtonProps) => (
  <Button style={{ paddingTop: '3px', paddingBottom: '3px' }} {...props} />
);

export interface PlaygroundOwnProps {
  /**
   * default scale for the zoom feature. If scale is set to 0, the zoom feature will be disabled.
   */
  scale?: number;
  /**
   * by default, which tab to have open.
   */
  openTab?: React.ReactNode;

  /**
   * whether to use the dark theme for the story source component.
   */
  dark?: boolean;
}
export type PlaygroundProps = PlaygroundOwnProps &
  StoryBlockContainerProps &
  ActionContainerProps;

export const Playground: FC<PlaygroundProps> = ({
  title,
  id,
  name,
  collapsible,
  dark,
  actions: userActions = [],
  children,
  openTab,
  scale: userScale = 1,
}) => {
  const [tabsIndex, setTabsIndex] = React.useState<number | undefined>(
    undefined,
  );
  const { theme } = useThemeUI();
  const [scale, setScale] = React.useState(userScale);
  React.useEffect(() => setScale(userScale), [userScale]);
  let storyId: string;
  const childArr = React.Children.toArray(children);
  const isDark =
    dark === undefined ? theme.initialColorModeName === 'dark' : dark;
  if (childArr.length === 1) {
    //@ts-ignore
    storyId = childArr[0].props.id;
    userActions.push({
      title: 'source',
      id: 'source',
      'aria-label': 'display story source code',
      panel: (
        <StorySource dark={isDark} sxStyle={{ mt: 0, mb: 0 }} id={storyId} />
      ),
    });
    userActions.push({
      title: 'config',
      id: 'config',
      'aria-label': 'display story configuration object',
      panel: (
        <StoryConfig dark={isDark} sxStyle={{ mt: 0, mb: 0 }} id={storyId} />
      ),
    });
  }
  const panels: ActionItems = getSortedPanels(userActions);

  React.useEffect(() => {
    const index = panels.findIndex((p: ActionItem) => p.title === openTab);
    setTabsIndex(index > -1 ? index : undefined);
  }, [openTab]);
  const panelActions = React.useMemo(
    () =>
      userActions.map((panel: ActionItem) => {
        return panel.panel
          ? {
              ...panel,
              onClick: (e: MouseEvent<HTMLButtonElement>) => {
                const index = panels.findIndex(
                  (p: ActionItem) => p.title === panel.title,
                );
                if (index < 0) {
                  return undefined;
                }
                if (tabsIndex === index) {
                  setTabsIndex(undefined);
                } else {
                  if (panel.onClick) {
                    const ret = panel.onClick(e);
                    if (ret === true) {
                      setTabsIndex(index);
                      return ret;
                    } else if (ret === false) {
                      setTabsIndex(undefined);
                      return ret;
                    }
                  }
                  setTabsIndex(index);
                }
                return undefined;
              },
            }
          : panel;
      }),
    [userActions],
  );
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
  const actionsItems = userScale
    ? [...zoomActions, ...panelActions]
    : panelActions;
  return (
    <StoryBlockContainer
      useStoryDescription={true}
      name={name}
      title={title}
      id={id}
      collapsible={collapsible}
    >
      {() => (
        <ActionContainer plain={false} actions={actionsItems}>
          <Zoom scale={scale || 1}>{children}</Zoom>
          <Collapsible isOpen={tabsIndex !== undefined}>
            {panels.length === 1 ? (
              panels[0].panel
            ) : (
              <Tabs
                selectedIndex={tabsIndex || 0}
                onSelect={(index: number) => setTabsIndex(index)}
              >
                <TabList
                  style={{
                    textAlign: 'right',
                  }}
                >
                  {panels.map((panel: ActionItem) => (
                    <Tab key={`playground_tab_${panel.title}`}>
                      {panel.title}
                    </Tab>
                  ))}
                </TabList>
                {panels.map((panel: ActionItem) => (
                  <TabPanel key={`playground_panel_${panel.title}`}>
                    {panel.panel}
                  </TabPanel>
                ))}
              </Tabs>
            )}
          </Collapsible>
        </ActionContainer>
      )}
    </StoryBlockContainer>
  );
};
