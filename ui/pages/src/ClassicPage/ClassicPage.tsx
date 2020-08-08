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
import { getControlsCount } from '@component-controls/core';
import {
  useCurrentStory,
  useStore,
  useCurrentPropsCount,
} from '@component-controls/store';

export const ClassicPage: FC = () => {
  const store = useStore();
  const { controls: { threshold = 10 } = {} } = store.config;
  const story = useCurrentStory();
  const controlsCount = getControlsCount(story?.controls);
  const propsCount = useCurrentPropsCount({ of: '.' });
  const splitControls =
    controlsCount > 0 &&
    controlsCount <= threshold &&
    (propsCount === 0 ||
      (controlsCount < propsCount && propsCount >= threshold));
  const mixedControls = !splitControls && controlsCount >= propsCount;
  return (
    <div>
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
      <PropsTable
        of="."
        title={mixedControls ? 'Controls' : 'Properties'}
        flat={propsCount <= threshold && !mixedControls}
        visibility={splitControls ? 'info' : 'all'}
      />
      <ComponentDeps id="." title="External dependencies" />
      <Stories dark={true} />
    </div>
  );
};
