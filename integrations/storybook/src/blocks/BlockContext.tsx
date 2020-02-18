import React from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import { LoadedComponentControls } from '@component-controls/core';
import { CURRENT_SELECTION, DocsContext } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export interface BlockContextProps {
  controls: LoadedComponentControls;
  story: any;
  api?: any;
  id?: string;
  channel: any;
  source?: string;
}
export const BlockContext = React.createContext<BlockContextProps>({
  controls: {},
  story: {},
  channel: {},
  source: '',
});

export interface BlockContextProviderProps {
  /** id of the story */
  id?: string;
  /** name of the story */
  name?: string;
}

export const BlockContextProvider: React.FC<BlockContextProviderProps> = ({
  id,
  name,
  children,
}) => {
  const context = React.useContext(DocsContext);
  const {
    id: currentId,
    clientApi,
    storyStore,
    mdxStoryNameToKey,
    mdxComponentMeta,
    channel,
  } = context as any;
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
  const story = storyStore.fromId(previewId) || {};
  const { parameters = {} } = story;
  let source: string | undefined;
  if (parameters.mdxSource) {
    source = parameters.mdxSource;
  } else if (parameters.storySource) {
    const { source: code, locationsMap } = parameters.storySource;
    if (locationsMap) {
      const location = locationsMap[previewId];
      if (location) {
        const { startBody: start, endBody: end } = location;
        const lines = code.split('\n');
        const startLine = lines[start.line - 1];
        const endLine = lines[end.line - 1];
        if (startLine !== undefined && endLine !== undefined) {
          source = [
            startLine.substring(start.col),
            ...lines.slice(start.line, end.line - 1),
            endLine.substring(0, end.col),
          ].join('\n');
        }
      }
    }
  }
  return (
    <BlockContext.Provider
      value={{
        api: clientApi,
        id: story.id,
        story,
        channel,
        source,
        controls: story.controls || story.parameters.controls,
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </BlockContext.Provider>
  );
};
