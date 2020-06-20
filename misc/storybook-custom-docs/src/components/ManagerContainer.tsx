import * as React from 'react';
import { API } from '@storybook/api';

interface ManagerContainerProps {
  active?: boolean;
  api: API;
  route: string;
  title: string;
}

export const ManagerContainer: React.FC<ManagerContainerProps> = props => {
  const { active, api, route } = props;
  const channel = React.useMemo(() => api.getChannel(), [api]);

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
  return null;
};
