/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import {
  Story,
  Playground,
  Stories,
  Description,
  ComponentDeps,
  ComponentSource,
  PropsTable,
  PackageVersion,
} from '@component-controls/blocks';

export const ClassicPage: FC = () => (
  <div>
    <PackageVersion />
    <Description />
    <ComponentSource id="." title="Component" />
    <Playground title=".">
      <Story id="." />
    </Playground>
    <PropsTable of="." title="Properties" visibility="all" />
    <ComponentDeps id="." title="External dependencies" />
    <Stories dark={true} />
  </div>
);
