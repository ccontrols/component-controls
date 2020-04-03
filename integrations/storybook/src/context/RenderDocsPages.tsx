import React from 'react';
import ReactDOM from 'react-dom';
import { BroadcastChannel } from 'broadcast-channel';
import { PageContainer } from '../page/PageContainer';
import { DocsPage } from '../page/DocsPage';

const ATTACH_DOCS_PAGE = 'attach_docs_page';
const channel = new BroadcastChannel(ATTACH_DOCS_PAGE);

interface MessageProps {
  id: string;
  active: boolean;
  storyId: string;
}
channel.onmessage = ({ id, active, storyId }: MessageProps) => {
  var node = document.getElementById(id);
  if (!node) {
    node = document.createElement('div');
    node.setAttribute('id', id);
    document.body.appendChild(node);
  }
  const root = document.getElementById('root');
  if (active) {
    if (root) {
      root.style.setProperty('display', 'none');
    }
    node.removeAttribute('hidden');
    ReactDOM.render(
      <PageContainer active={active} storyId={storyId}>
        <DocsPage />
      </PageContainer>,
      document.getElementById(id),
    );
  } else {
    node.setAttribute('hidden', 'true');
    if (root) {
      root.style.removeProperty('display');
    }
    ReactDOM.unmountComponentAtNode(node);
  }
};
