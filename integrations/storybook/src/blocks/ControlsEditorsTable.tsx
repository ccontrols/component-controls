import React from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { SetControlValueFn } from '@component-controls/specification';
import {
  LoadedComponentControls,
  mergeControlValues,
} from '@component-controls/core';
import { CURRENT_SELECTION, DocsContext } from '@storybook/addon-docs/blocks';
import { ControlsTable } from '../shared/ControlsTable';

interface ControlsEditorsTableProps {
  title?: string;
  id?: string;
  name?: string;
}

const getPropertyProps = (
  props: ControlsEditorsTableProps,
  { id: currentId, storyStore, mdxStoryNameToKey, mdxComponentMeta }: any,
): {
  controls?: LoadedComponentControls;
  id: string | null;
  storyStore: any;
} | null => {
  const { id, name } = props;
  const inputId = id === CURRENT_SELECTION ? currentId : id;
  const previewId =
    inputId ||
    (mdxStoryNameToKey &&
      mdxComponentMeta &&
      name &&
      toId(
        mdxComponentMeta.id || mdxComponentMeta.title,
        storyNameFromExport(mdxStoryNameToKey[name]),
      ));
  if (!previewId) {
    return null;
  }
  const data = storyStore.fromId(previewId);

  const propsParam =
    (data && data.parameters && data.parameters.controls) || {};

  if (!data || propsParam.disable) {
    return null;
  }
  return {
    id: data.id,
    storyStore,
    controls: data.controls || data.parameters.controls,
  };
};
export const ControlsEditorsTable: React.FC<ControlsEditorsTableProps> = ({
  title = 'Property Editors',
  ...rest
}) => (
  <DocsContext.Consumer>
    {(context: any) => {
      const { controls, storyStore, id } =
        getPropertyProps(rest, context) || {};
      const api: any = (context as any).clientApi;
      const setControlValue: SetControlValueFn = api.setControlValue
        ? api.setControlValue
        : (storyId: string, propName: string | undefined, propValue: any) => {
            const story: any = storyStore._data[storyId];
            if (story) {
              story.parameters.controls = mergeControlValues(
                story.parameters.controls,
                propName,
                propValue,
              );
              context.channel.emit(FORCE_RE_RENDER);
            }
          };
      return id ? (
        <ControlsTable
          title={title}
          controls={controls}
          storyId={id}
          setControlValue={setControlValue}
          clickControl={api.clickControl}
        />
      ) : null;
    }}
  </DocsContext.Consumer>
);
