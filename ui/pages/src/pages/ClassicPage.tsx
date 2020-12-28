/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, Fragment } from 'react';
import {
  Story,
  Playground,
  Stories,
  Description,
  ComponentExternalDependencies,
  ComponentLocalDependencies,
  ComponentJSX,
  ComponentSource,
  PropsTable,
  PackageVersion,
} from '@component-controls/blocks';
import { getControlsCount, TabConfiguration } from '@component-controls/core';
import {
  useCurrentStory,
  useStore,
  useCurrentPropsCount,
} from '@component-controls/store';

const ClassicPage: FC = () => {
  const store = useStore();
  const { controls: { threshold = 10 } = {} } = store.config;
  const story = useCurrentStory();
  const controlsCount = getControlsCount(story?.controls);
  const propsCount = useCurrentPropsCount();
  const splitControls =
    controlsCount > 0 &&
    controlsCount <= threshold &&
    (propsCount === 0 ||
      (controlsCount < propsCount && propsCount >= threshold));
  const mixedControls = !splitControls && controlsCount >= propsCount;
  return (
    <Fragment>
      <PackageVersion />
      <Description />
      <ComponentSource id="." title="Component" />
      <Playground title=".">
        <Story id="." />
      </Playground>
      {splitControls && (
        <PropsTable
          flat={controlsCount === propsCount}
          of="."
          title="Controls"
          visibility="controls"
        />
      )}
      {(propsCount > 0 || (!splitControls && controlsCount > 0)) && (
        <PropsTable
          of="."
          title={mixedControls ? 'Controls' : 'Properties'}
          flat={propsCount <= threshold && !mixedControls}
          visibility={splitControls ? 'info' : 'all'}
        />
      )}
      <ComponentExternalDependencies id="." title="External dependencies" />
      <ComponentLocalDependencies id="." title="Internal dependencies" />
      <ComponentJSX id="." title="Component JSX" />
      <Stories dark={true} />
    </Fragment>
  );
};

export default {
  title: 'Documentation',
  component: ClassicPage,
} as TabConfiguration;
