/* eslint-disable react/display-name */
import React from 'react';
import { DocumentItem } from '.';
import { BlockContext } from '../context';
import { MockContext } from '../test/MockContext';

export default {
  title: 'Blocks/DocumentItem',
  component: DocumentItem,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <BlockContext.Consumer>
      {({ storeProvider }) => {
        const page = storeProvider.getStoryDoc('Story');
        return page ? (
          <DocumentItem
            config={storeProvider.config}
            link={storeProvider.getPagePath(page.type, page.title)}
            doc={page}
          />
        ) : null;
      }}
    </BlockContext.Consumer>
  </MockContext>
);
