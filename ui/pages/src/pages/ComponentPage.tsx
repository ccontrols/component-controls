/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, FC } from 'react';
import { TabConfiguration } from '@component-controls/core';
import {
  Story,
  Playground,
  Description,
  ComponentExternalDependencies,
  ComponentLocalDependencies,
  ComponentJSX,
  ComponentSource,
  PropsTable,
  PackageVersion,
} from '@component-controls/blocks';

const ComponentPage: FC = () => {
  return (
    <Fragment>
      <PackageVersion />
      <Description />
      <Playground title=".">
        <Story id="." />
      </Playground>
      <ComponentSource id="." title="Component" />
      <PropsTable of="." title={'Properties'} visibility={'info'} />
      <ComponentExternalDependencies id="." title="External dependencies" />
      <ComponentLocalDependencies id="." title="Internal dependencies" />
      <ComponentJSX id="." title="Component JSX" />
    </Fragment>
  );
};

export default {
  title: 'Component',
  component: ComponentPage,
} as TabConfiguration;
