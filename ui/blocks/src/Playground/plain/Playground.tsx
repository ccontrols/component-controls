import React, { FC } from 'react';
import Octicon, { Plus, Dash, Sync } from '@primer/octicons-react';
import { Button } from 'theme-ui';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import {
  ActionContainer,
  ActionContainerProps,
} from '@component-controls/components';

export interface PlaygroundZoomProps {
  zoomPanEnabled?: boolean;
  limitToBounds?: boolean;
  panningEnabled?: boolean;
  transformEnabled?: boolean;
  pinchEnabled?: boolean;
  limitToWrapper?: boolean;
  disabled?: boolean;
  dbClickEnabled?: boolean;
  lockAxisX?: boolean;
  lockAxisY?: boolean;
  velocityEqualToMove?: boolean;
  enableWheel?: boolean;
  enableTouchPadPinch?: boolean;
  enableVelocity?: boolean;
  limitsOnWheel?: boolean;
}

export type PlaygroundProps = PlaygroundZoomProps &
  Omit<ActionContainerProps, 'paddingTop'>;

export const Playground: FC<PlaygroundProps> = ({
  zoomPanEnabled = true,
  limitToBounds = true,
  panningEnabled = true,
  transformEnabled = true,
  pinchEnabled = true,
  limitToWrapper = false,
  disabled = false,
  dbClickEnabled = true,
  lockAxisX = false,
  lockAxisY = false,
  velocityEqualToMove = true,
  enableWheel = true,
  enableTouchPadPinch = true,
  enableVelocity = true,
  limitsOnWheel = false,
  actions,
  children,
}) => {
  const childStories = <div>{children}</div>;

  return zoomPanEnabled ? (
    <div style={{ paddingTop: '20px' }}>
      <TransformWrapper
        options={{
          limitToBounds,
          transformEnabled,
          disabled,
          limitToWrapper,
        }}
        pan={{
          disabled: !panningEnabled,
          lockAxisX,
          lockAxisY,
          velocityEqualToMove,
          velocity: enableVelocity,
        }}
        pinch={{ disabled: !pinchEnabled }}
        doubleClick={{ disabled: !dbClickEnabled }}
        wheel={{
          wheelEnabled: enableWheel,
          touchPadEnabled: enableTouchPadPinch,
          limitsOnWheel,
        }}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }: any) => {
          const actionsItems = [
            {
              title: (
                <Button onClick={resetTransform} aria-label="reset zoom">
                  <Octicon icon={Sync} />
                </Button>
              ),
              id: 'zoomreset',
            },
            {
              title: (
                <Button onClick={zoomOut} aria-label="zoom out">
                  <Octicon icon={Dash} />
                </Button>
              ),
              id: 'zoomout',
            },
            {
              title: (
                <Button
                  onClick={e => {
                    console.log(rest);
                    zoomIn(e);
                  }}
                  aria-label="zoom in"
                >
                  <Octicon icon={Plus} />
                </Button>
              ),
              id: 'zoomin',
            },

            ...(Array.isArray(actions) ? [...actions] : []),
          ];
          return (
            <ActionContainer actions={actionsItems}>
              <div>
                <TransformComponent>{childStories}</TransformComponent>
              </div>
            </ActionContainer>
          );
        }}
      </TransformWrapper>
    </div>
  ) : (
    childStories
  );
};
