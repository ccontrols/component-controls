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
    var iframe = document.getElementById(
      'storybook-preview-iframe',
    ) as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      var node = iframe.contentWindow.document.getElementById(id);
      if (!node) {
        node = iframe.contentWindow.document.createElement('div');
        node.setAttribute('id', id);
        iframe.contentWindow.document.body.appendChild(node);
      }
      if (active) {
        node.removeAttribute('hidden');
      } else {
        node.setAttribute('hidden', 'true');
      }
      node.setAttribute('id', id);
      channel.postMessage({ id: id, active });
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
