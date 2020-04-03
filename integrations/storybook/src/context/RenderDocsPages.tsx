import React from 'react';
import ReactDOM from 'react-dom';
import { BroadcastChannel } from 'broadcast-channel';
import { DocsPage } from '../page/DocsPage';

const ATTACH_DOCS_PAGE = 'attach_docs_page';
const channel = new BroadcastChannel(ATTACH_DOCS_PAGE);

channel.onmessage = (message: { id: string; active: boolean }) => {
  if (message.active) {
    ReactDOM.render(
      <DocsPage active={message.active} />,
      document.getElementById(message.id),
    );
  } else {
    const node = document.getElementById(message.id);
    if (node) {
      ReactDOM.unmountComponentAtNode(node);
    }
  }
};
