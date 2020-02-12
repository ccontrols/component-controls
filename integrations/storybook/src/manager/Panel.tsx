import React from 'react';
import { styled } from '@storybook/theming';
import { useStorybookState } from '@storybook/api';
import {
  LoadedComponentControls,
  mergeControlValues,
} from '@component-controls/core';
import { SetControlValueFn } from '@component-controls/specification';

import { API } from '@storybook/api';
//@ts-ignore
import { SET_DATA_MSG } from '../shared/shared.ts';

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

interface WrappedControlsTableProps {
  story: StoryInput | undefined;
  api: any;
}

const WrappedControlsTable: React.FC<WrappedControlsTableProps> = ({
  story,
  api,
}) => {
  const [controls, setControls] = React.useState<LoadedComponentControls>(
    story?.controls || story?.parameters.controls,
  );
  React.useEffect(() => {
    setControls(story?.controls || story?.parameters.controls);
  }, [JSON.stringify(story?.controls || story?.parameters.controls || {})]);

  const setControlValue: SetControlValueFn = api.setControlValue
    ? api.setControlValue
    : (storyId: string, propName: string, propValue: any) => {
        if (story && controls) {
          const updated = mergeControlValues(controls, propName, propValue);
          story.parameters.controls = updated;
          setControls(updated);
          api.emit(SET_DATA_MSG, { storyId, controls: updated });
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
};
export const PropsPanel: React.FC<PropsPanelProps> = ({
  api,
  active: panelActive,
}: PropsPanelProps) => {
  const { storyId: id } = useStorybookState();
  const channel = api.getChannel();
  React.useEffect(() => {
    const onNewData = ({
      storyId,
      controls,
    }: {
      storyId: string;
      controls: LoadedComponentControls;
    }) => {
      const story = api.getData(storyId);
      if (story) {
        story.parameters.controls = controls;
      }
    };
    channel.on(SET_DATA_MSG, onNewData);
    return () => {
      channel.removeListener(SET_DATA_MSG, onNewData);
    };
  }, []);
  if (!panelActive) {
    return null;
  }
  return <WrappedControlsTable story={api.getData(id) as any} api={api} />;
};
