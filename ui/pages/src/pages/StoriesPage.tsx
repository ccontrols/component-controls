/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, Fragment } from 'react';
import { TabConfiguration } from '@component-controls/core';
import {
  Story,
  Playground,
  Stories,
  Description,
} from '@component-controls/blocks';

const StoriesPage: FC = () => (
  <Fragment>
    <Description />
    <Playground title=".">
      <Story id="." />
    </Playground>
    <Stories dark={true} />
  </Fragment>
);

export default {
  title: 'Stories',
  component: StoriesPage,
} as TabConfiguration;
