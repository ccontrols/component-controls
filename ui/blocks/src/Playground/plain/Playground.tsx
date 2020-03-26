import React, { FC } from 'react';
import Octicon, { Plus, Dash, Sync } from '@primer/octicons-react';
import { Button } from 'theme-ui';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import {
  ActionContainer,
  ActionContainerProps,
} from '@component-controls/components';

export interface PlaygroundZoomProps {
  limitToBounds?: true;
  panningEnabled?: true;
  transformEnabled?: true;
  pinchEnabled?: true;
  limitToWrapper?: false;
  disabled?: false;
  dbClickEnabled?: true;
  lockAxisX?: false;
  lockAxisY?: false;
  velocityEqualToMove?: true;
  enableWheel?: true;
  enableTouchPadPinch?: true;
  enableVelocity?: true;
  limitsOnWheel?: false;
}

export type PlaygroundProps = PlaygroundZoomProps &
  Omit<ActionContainerProps, 'paddingTop'>;
export const Playground: FC<PlaygroundProps> = ({
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
  return (
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
                <TransformComponent>{children}</TransformComponent>
              </div>
            </ActionContainer>
          );
        }}
      </TransformWrapper>
    </div>
  );
};
