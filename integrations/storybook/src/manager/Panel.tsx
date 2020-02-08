import React from 'react';
import { styled } from '@storybook/theming';
import { LoadedComponentControls } from '@component-controls/specification';
import { Combo, Consumer, API, StoryInput } from '@storybook/api';
import { ControlsTable } from '../shared/ControlsTable';
import { NoControls } from './NoControls';

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
  const { controls } = state.storiesHash[state.storyId] as StoryInput;
  return { story: state.storiesHash[storyId] as StoryInput, controls };
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
                resetControlValue={api.resetControlValue}
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
