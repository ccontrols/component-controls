import * as React from 'react';
import { API, Consumer, Combo } from '@storybook/api';
import { UPDATE_STORY_CONTEXT } from '../types';

interface ManagerContainerProps {
  active?: boolean;
  api: API;
  route: string;
  title: string;
}

export const ManagerContainer: React.FC<ManagerContainerProps> = props => {
  const { active, api, route } = props;
  const channel = React.useMemo(() => api.getChannel(), [api]);
  const storyRef = React.useRef('');
  React.useEffect(() => {
    const ATTACH_DOCS_PAGE = `attach_docs_page_${route}`;

    const sendMessage = () => {
      const story = api.getCurrentStoryData();
      channel.emit(ATTACH_DOCS_PAGE, { active, storyId: story?.id });
    };

    const wrapper = document.getElementById('storybook-preview-wrapper');
    const updateDOM = () => {
      sendMessage();
      if (wrapper) {
        wrapper.removeAttribute('hidden');
      }
    };
    updateDOM();
  }, [active, api, route, channel]);

  return (
    <Consumer>
      {({ state }: Combo) => {
        if (state.storyId !== storyRef.current) {
          storyRef.current = state.storyId;
          channel.emit(UPDATE_STORY_CONTEXT, state);
        }
        return null;
      }}
    </Consumer>
  );
};
