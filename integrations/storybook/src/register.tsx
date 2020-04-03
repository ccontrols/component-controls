/* eslint-disable react/display-name */
import React from 'react';
import { BroadcastChannel } from 'broadcast-channel';
import { API } from '@storybook/api';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './page/constants';

interface AddonPanelProps {
  active?: boolean;
  id: string;
  api: API;
}

const AddonPanel: React.FC<AddonPanelProps> = ({ active, id, api }) => {
  const channel = React.useMemo(
    () => new BroadcastChannel('attach_docs_page'),
    [],
  );
  React.useEffect(() => {
    const iframe = document.getElementById(
      'storybook-preview-iframe',
    ) as HTMLIFrameElement;
    const wrapper = document.getElementById('storybook-preview-wrapper');
    if (iframe && iframe.contentDocument) {
      const updateDOM = () => {
        const story = api.getCurrentStoryData();
        channel.postMessage({ id: id, active, storyId: story?.id });
        if (wrapper) {
          wrapper.removeAttribute('hidden');
        }
      };

      if (!iframe.contentDocument.getElementById('root')) {
        iframe.onload = () => {
          updateDOM();
        };
      } else {
        updateDOM();
      }
    }
  }, [active]);
  return null;
};
addons.register(ADDON_ID, api => {
  const title = 'Page';
  const key = title.toLowerCase();
  addons.add(PANEL_ID, {
    type: types.TAB,
    title,
    route: ({ storyId }) => `/${key}/${storyId}`,
    match: ({ viewMode }) => viewMode === key,
    render: ({ active }) => (
      <AddonPanel active={active} id={`controls-docs-page-${key}`} api={api} />
    ),
  });
});
