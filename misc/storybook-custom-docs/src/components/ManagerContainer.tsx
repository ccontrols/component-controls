import React from 'react';
import { API } from '@storybook/api';

interface ManagerContainerProps {
  active?: boolean;
  api: API;
  route: string;
  title: string;
}

export const ManagerContainer: React.FC<ManagerContainerProps> = props => {
  const { active, api, route } = props;
  const ATTACH_DOCS_PAGE = `attach_docs_page_${route}`;
  const channel = React.useMemo(() => api.getChannel(), []);
  const sendMessage = () => {
    const story = api.getCurrentStoryData();
    channel.emit(ATTACH_DOCS_PAGE, { active, storyId: story?.id });
  };

  React.useEffect(() => {
    const wrapper = document.getElementById('storybook-preview-wrapper');
    const updateDOM = () => {
      sendMessage();
      if (wrapper) {
        wrapper.removeAttribute('hidden');
      }
    };
    updateDOM();
  }, [active]);
  return null;
};
