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
  useComponents,
  useStore,
  useCurrentDocument,
} from '@component-controls/store';

export const ClassicPage: FC = () => {
  const store = useStore();
  const { controls: { threshold = 10 } = {} } = store.config;
  const story = useCurrentStory();
  const doc = useCurrentDocument();
  const controlsCount = getControlsCount(story?.controls);
  const components = useComponents({ of: '.' });
  const propsCount =
    components && doc
      ? Object.keys(components).reduce((acc, key) => {
          const component = store.components[doc.componentsLookup[key]];
          return acc + Object.keys(component.info?.props || {}).length;
        }, 0)
      : 0;
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
        <PropsTable of="." title="Controls" visibility="controls" />
      )}
      <PropsTable
        of="."
        title={mixedControls ? 'Controls' : 'Properties'}
        flat={propsCount <= threshold || mixedControls}
        visibility={splitControls ? 'info' : 'all'}
      />
      <ComponentDeps id="." title="External dependencies" />
      <Stories dark={true} />
    </div>
  );
};
