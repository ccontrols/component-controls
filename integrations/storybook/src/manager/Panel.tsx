import React from 'react';
import { styled } from '@storybook/theming';
import { LoadedComponentControls } from '@component-controls/core';
import { Combo, Consumer, API } from '@storybook/api';
import { ControlsTable } from '../shared/ControlsTable';
import { NoControls } from './NoControls';

interface StoryInput {
  id: string;
  controls: LoadedComponentControls;
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
  const { controls } = (state.storiesHash[state.storyId] as any) as StoryInput;
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
        return story && controls && Object.keys(controls).length ? (
          <Wrapper className="addon-controls-panel">
            <Container>
              <ControlsTable
                controls={controls}
                storyId={story.id}
                setControlValue={api.setControlValue}
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
