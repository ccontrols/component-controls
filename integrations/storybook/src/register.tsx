/* eslint-disable react/display-name */
import React from 'react';
import { BroadcastChannel } from 'broadcast-channel';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './page/constants';

interface AddonPanelProps {
  active?: boolean;
  id: string;
}

const AddonPanel: React.FC<AddonPanelProps> = ({ active, id }) => {
  const channel = React.useMemo(
    () => new BroadcastChannel('attach_docs_page'),
    [],
  );
  React.useEffect(() => {
    const iframe = document.getElementById(
      'storybook-preview-iframe',
    ) as HTMLIFrameElement;
    const wrapper = document.getElementById('storybook-preview-wrapper');
    if (wrapper && iframe && iframe.contentDocument) {
      const updateDOM = () => {
        const root = iframe.contentDocument?.getElementById('root');
        if (root) {
          if (active) {
            root.style.setProperty('display', 'none');
          } else {
            root.style.removeProperty('display');
          }
        }

        channel.postMessage({ id: id, active });
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
addons.register(ADDON_ID, () => {
  const title = 'Page';
  const key = title.toLowerCase();
  addons.add(PANEL_ID, {
    type: types.TAB,
    title,
    route: ({ storyId }) => `/${key}/${storyId}`,
    match: ({ viewMode }) => viewMode === key,
    render: ({ active }) => (
      <AddonPanel active={active} id={`controls-docs-page-${key}`} />
    ),
  });
});
