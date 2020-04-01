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

import { Button } from 'theme-ui';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer';
import { StorySource } from '../StorySource';

export interface PlaygroundOwnProps {
  /**
   * whether to enable the zoom functionality in playground.
   */
  zoomEnabled?: boolean;
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
  Omit<StoryBlockContainerProps, 'children'> &
  Omit<ActionContainerProps, 'paddingTop'>;

export const Playground: FC<PlaygroundProps> = ({
  title,
  id,
  name,
  collapsible,
  dark,
  actions: userActions = [],
  children,
  openTab,
  zoomEnabled = true,
}) => {
  const [tabsIndex, setTabsIndex] = React.useState<number | undefined>(
    undefined,
  );
  const [scale, setScale] = React.useState(1);

  let storyId: string;
  const childArr = React.Children.toArray(children);
  if (childArr.length === 1) {
    //@ts-ignore
    storyId = childArr[0].props.id;
    userActions.push({
      title: 'source',
      id: 'source',
      'aria-label': 'display story source code',
      panel: (
        <StorySource dark={dark} sxStyle={{ mt: 0, mb: 0 }} id={storyId} />
      ),
    });
  }
  const panels: ActionItems = getSortedPanels(userActions);

  React.useEffect(() => {
    const index = panels.findIndex((p: ActionItem) => p.title === openTab);
    setTabsIndex(index > -1 ? index : undefined);
  }, [openTab]);
  const panelActions = userActions.map((panel: ActionItem) => {
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
  });

  const zoomActions = [
    {
      title: (
        <Button onClick={() => setScale(1)} aria-label="reset zoom">
          <Octicon icon={Sync} />
        </Button>
      ),
      id: 'zoomreset',
      group: 'zoom',
    },
    {
      title: (
        <Button onClick={() => setScale(scale / 2)} aria-label="zoom out">
          <Octicon icon={Dash} />
        </Button>
      ),
      id: 'zoomout',
      group: 'zoom',
    },
    {
      title: (
        <Button onClick={() => setScale(scale * 2)} aria-label="zoom in">
          <Octicon icon={Plus} />
        </Button>
      ),
      id: 'zoomin',
      group: 'zoom',
    },
  ];
  const actions: ActionItem[] = [];
  actions.push.apply(actions, panelActions);

  const actionsItems = zoomEnabled ? [...zoomActions, ...actions] : actions;
  return (
    <StoryBlockContainer
      name={name}
      title={title}
      id={id}
      collapsible={collapsible}
    >
      {() => (
        <ActionContainer plain={false} actions={actionsItems}>
          <Zoom scale={scale}>{children}</Zoom>
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
