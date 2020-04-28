/* eslint-disable react/display-name */
import React from 'react';
import { future } from '@theme-ui/presets';
import { Store } from '@component-controls/store';
import { PageContainer, PageContainerProps } from '.';
import { Title } from '../Title';
import { PropsTable } from '../PropsTable';
import { Playground } from '../Playground';
import { Story } from '../Story';

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

export const dark = () => (
  <MockPageContainer dark={true} storyId="id-of-story">
    <Title />
    <Playground title="Custom playground title" openTab="source">
      <Story id="." />
    </Playground>
    <PropsTable />
  </MockPageContainer>
);

export const theme = () => (
  <MockPageContainer theme={future} storyId="id-of-story">
    <Title />
    <Playground title="Custom playground title" openTab="source">
      <Story id="." />
    </Playground>
    <PropsTable />
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
