import React, { FC, MouseEvent } from 'react';
import Octicon, { Plus, Dash, Sync } from '@primer/octicons-react';
import { Global, css } from '@emotion/core';
import {
  Collapsible,
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from '@component-controls/components';

import { Button } from 'theme-ui';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import {
  getSortedPanels,
  ActionItems,
  ActionItem,
  ActionContainer,
  ActionContainerProps,
} from '@component-controls/components';
import { StorySource } from '../StorySource';

export interface TransformOptions {
  limitToBounds?: boolean;
  transformEnabled?: boolean;
  disabled?: boolean;
  limitToWrapper?: boolean;
}

export interface PanOptions {
  disabled?: boolean;
  lockAxisX?: boolean;
  lockAxisY?: boolean;
  velocityEqualToMove?: boolean;
  velocity?: boolean;
}

export interface PinchOptions {
  disabled?: boolean;
}
export interface DoubleClickOptions {
  disabled?: boolean;
}

export interface WheelOptions {
  wheelEnabled?: boolean;
  touchPadEnabled?: boolean;
  limitsOnWheel?: boolean;
}
export interface PlaygroundZoomProps {
  zoomPanEnabled?: boolean;

  pinchEnabled?: boolean;
  dbClickEnabled?: boolean;
  enableWheel?: boolean;
  enableTouchPadPinch?: boolean;
  limitsOnWheel?: boolean;
}

export interface PlaygroundTransformOptions {
  options?: TransformOptions;
  pan?: PanOptions;
  pinch?: PinchOptions;
  doubleClick?: DoubleClickOptions;
  wheel?: WheelOptions;
}
export interface PlaygroundOwnProps {
  transform?: PlaygroundTransformOptions;
}
export type PlaygroundProps = PlaygroundOwnProps &
  Omit<ActionContainerProps, 'paddingTop'>;

export const Playground: FC<PlaygroundProps> = ({
  transform,
  actions: userActions = [],
  children,
}) => {
  const [tabsIndex, setTabsIndex] = React.useState<number | undefined>(
    undefined,
  );
  const childStories = <>{children}</>;
  const zoomEnabled = !transform?.options?.disabled;

  let storyId: string;
  const childArr = React.Children.toArray(children);
  if (childArr.length === 1) {
    //@ts-ignore
    storyId = childArr[0].props.id;
    userActions.push({
      title: 'source',
      id: 'source',
      'aria-label': 'display story source code',
      panel: <StorySource id={storyId} />,
    });
  }
  const panels: ActionItems = getSortedPanels(userActions);
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

  const panelsElement = (
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
              <Tab key={`playground_tab_${panel.title}`}>{panel.title}</Tab>
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
  );
  return !zoomEnabled ? (
    <ActionContainer actions={panelActions}>
      {children}
      {panelsElement}
    </ActionContainer>
  ) : (
    <ActionContainer>
      <Global
        styles={css`
          .react-transform-component,
          .react-transform-element {
            width: 100%;
          }
        `}
      />
      <TransformWrapper {...transform}>
        {({ zoomIn, zoomOut, resetTransform }: any) => {
          const zoomActions = [
            {
              title: (
                <Button onClick={resetTransform} aria-label="reset zoom">
                  <Octicon icon={Sync} />
                </Button>
              ),
              id: 'zoomreset',
              group: 'zoom',
            },
            {
              title: (
                <Button onClick={zoomOut} aria-label="zoom out">
                  <Octicon icon={Dash} />
                </Button>
              ),
              id: 'zoomout',
              group: 'zoom',
            },
            {
              title: (
                <Button
                  onClick={e => {
                    zoomIn(e);
                  }}
                  aria-label="zoom in"
                >
                  <Octicon icon={Plus} />
                </Button>
              ),
              id: 'zoomin',
              group: 'zoom',
            },
          ];
          const actions: ActionItem[] = [];
          actions.push.apply(actions, panelActions);
          const actionsItems = zoomEnabled
            ? [...zoomActions, ...actions]
            : actions;
          return (
            <ActionContainer plain={true} actions={actionsItems}>
              <TransformComponent>{childStories}</TransformComponent>
            </ActionContainer>
          );
        }}
      </TransformWrapper>
      {panelsElement}
    </ActionContainer>
  );
};

Playground.defaultProps = {
  transform: {
    options: {
      limitToBounds: true,
      transformEnabled: true,
      disabled: false,
      limitToWrapper: false,
    },
    pan: {
      disabled: false,
      lockAxisX: false,
      lockAxisY: false,
      velocityEqualToMove: true,
      velocity: true,
    },
    pinch: {
      disabled: false,
    },
    doubleClick: {
      disabled: false,
    },
    wheel: {
      wheelEnabled: true,
      touchPadEnabled: true,
      limitsOnWheel: false,
    },
  },
};
