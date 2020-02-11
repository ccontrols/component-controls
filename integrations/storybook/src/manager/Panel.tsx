import React from 'react';
import { styled } from '@storybook/theming';
import {
  LoadedComponentControls,
  mergeControlValues,
} from '@component-controls/core';
import { SetControlValueFn } from '@component-controls/specification';

import { Combo, Consumer, API } from '@storybook/api';
//@ts-ignore
import { ControlsTable } from '../shared/ControlsTable.tsx';
//@ts-ignore
import { NoControls } from './NoControls.tsx';

interface StoryInput {
  id: string;
  controls: LoadedComponentControls;
  parameters: any;
}

const Wrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'start',
  padding: '10px 25px 0',
  flexDirection: 'column',
}));

const Container = styled.div(() => ({
  minWidth: '500px',
}));

interface PropsPanelProps {
  active: boolean;
  api: API;
}

interface MapperReturnProps {
  story?: StoryInput;
  controls?: LoadedComponentControls;
}
const mapper = ({ state }: Combo): MapperReturnProps => {
  const { storyId } = state;
  if (!state.storiesHash[storyId]) {
    return {};
  }
  const story = (state.storiesHash[state.storyId] as any) as StoryInput;
  const controls = story.controls || story.parameters.controls;
  return { story: (state.storiesHash[storyId] as any) as StoryInput, controls };
};

export const PropsPanel: React.FC<PropsPanelProps> = ({
  api,
  active: panelActive,
}: PropsPanelProps) => {
  if (!panelActive) {
    return null;
  }
  return (
    <Consumer filter={mapper}>
      {(p: any) => {
        const { controls, story } = p as MapperReturnProps;
        const setControlValue: SetControlValueFn = api.setControlValue
          ? api.setControlValue
          : (storyId: string, propName: string, propValue: any) => {
              if (story && controls) {
                story.parameters.controls = mergeControlValues(
                  controls,
                  propName,
                  propValue,
                );
              }
            };
        return story && controls && Object.keys(controls).length ? (
          <Wrapper className="addon-controls-panel">
            <Container>
              <ControlsTable
                controls={controls}
                storyId={story.id}
                setControlValue={setControlValue}
                clickControl={api.clickControl}
              />
            </Container>
          </Wrapper>
        ) : (
          <NoControls />
        );
      }}
    </Consumer>
  );
};
