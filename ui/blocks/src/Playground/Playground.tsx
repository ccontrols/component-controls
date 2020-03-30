import React, { FC } from 'react';
import Octicon, { Plus, Dash, Sync } from '@primer/octicons-react';
import { Global, css } from '@emotion/core';

import { Button } from 'theme-ui';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import {
  ActionContainer,
  ActionContainerProps,
} from '@component-controls/components';

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
export type PlaygroundProps = { transform: PlaygroundTransformOptions } & Omit<
  ActionContainerProps,
  'paddingTop'
>;

export const Playground: FC<PlaygroundProps> = ({
  transform,
  actions,
  children,
}) => {
  const childStories = <>{children}</>;

  return (
    <>
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
              <TransformComponent>{childStories}</TransformComponent>
            </ActionContainer>
          );
        }}
      </TransformWrapper>
    </>
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
