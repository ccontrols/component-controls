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
}
channel.onmessage = ({ id, active }: MessageProps) => {
  var node = document.getElementById(id);
  if (!node) {
    node = document.createElement('div');
    node.setAttribute('id', id);
    document.body.appendChild(node);
  }
  if (active) {
    ReactDOM.render(
      <PageContainer active={active}>
        <DocsPage />
      </PageContainer>,
      document.getElementById(id),
    );
    node.removeAttribute('hidden');
  } else {
    node.setAttribute('hidden', 'true');
    ReactDOM.unmountComponentAtNode(node);
  }
};
