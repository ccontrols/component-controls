import React from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import { LoadedComponentControls } from '@component-controls/core';
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
): { controls?: LoadedComponentControls; id: string | null } | null => {
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
    controls: data.controls,
  };
};
export const ControlsEditorsTable: React.FC<ControlsEditorsTableProps> = ({
  title = 'Property Editors',
  ...rest
}) => (
  <DocsContext.Consumer>
    {(context: any) => {
      const { controls, id } = getPropertyProps(rest, context) || {};
      const api: any = (context as any).clientApi;
      return id ? (
        <ControlsTable
          title={title}
          controls={controls}
          storyId={id}
          setControlValue={api.setControlValue}
          resetControlValue={api.resetControlValue}
          clickControl={api.clickControl}
        />
      ) : null;
    }}
  </DocsContext.Consumer>
);
