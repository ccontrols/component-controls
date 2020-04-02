/* eslint-disable react/display-name */
import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './page/constants';

interface AddonPanelProps {
  active?: boolean;
  id?: string;
}

const AddonPanel: React.FC<AddonPanelProps> = ({ active, id }) => {
  const channel = React.useMemo(
    () => new BroadcastChannel('attach_docs_page'),
    [],
  );
  React.useEffect(() => {
    console.log('will post message');
    channel.postMessage({ id: id, active });
  }, [active]);
  return <div id={id} />;
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
