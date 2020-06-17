/* eslint-disable react/display-name */
import React from 'react';
import { Store } from '@component-controls/store';
import { PageContainer, PageContainerProps } from '.';
import { Title } from '../Title';

import { store } from '../test/storyStore';

export default {
  title: 'Blocks/PageContainer',
  component: PageContainer,
};

const MockPageContainer: React.FC<Omit<
  PageContainerProps,
  'store'
>> = props => {
  const storyStore = React.useMemo(
    () => new Store({ store, updateLocalStorage: false }),
    [],
  );
  return <PageContainer store={storyStore} {...props} />;
};
export const overview = () => (
  <MockPageContainer storyId="id-of-story">
    <Title />
  </MockPageContainer>
);

export const components = () => (
  <MockPageContainer
    storyId="mdx-story"
    components={{ h1: props => <div {...props} /> }}
  >
    <Title />
  </MockPageContainer>
);
