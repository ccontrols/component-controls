import React from 'react';
import { BroadcastChannel } from 'broadcast-channel';
import { API } from '@storybook/api';

interface ManagerContainerProps {
  active?: boolean;
  id: string;
  api: API;
  title: string;
}
const activePages: string[] = [];
export const ManagerContainer: React.FC<ManagerContainerProps> = ({
  active,
  id,
  api,
  title,
}) => {
  const channel = React.useMemo(
    () => new BroadcastChannel(`attach_docs_page_${title}`),
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
        const root = iframe?.contentDocument?.getElementById('root');
        if (wrapper && root) {
          const pageIndex = activePages.indexOf(id);
          if (active) {
            if (pageIndex < 0) {
              activePages.push(id);
            }
            root.style.setProperty('display', 'none');
            wrapper.removeAttribute('hidden');
          } else if (pageIndex >= 0) {
            activePages.splice(pageIndex, 1);
            if (activePages.length === 0) {
              root.style.removeProperty('display');
            }
          }
        }
      };

      if (!iframe.contentDocument.getElementById('root')) {
        const saveOnLoad = iframe.onload;
        iframe.onload = e => {
          updateDOM();
          if (saveOnLoad) {
            //@ts-ignore
            saveOnLoad(e);
          }
        };
      } else {
        updateDOM();
      }
    }
  }, [active]);
  return null;
};
