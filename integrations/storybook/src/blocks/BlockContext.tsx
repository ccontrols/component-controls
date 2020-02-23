import React from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import myStoryStore from '@component-controls/loader/story-store-data';
import { Story, StoryArguments } from '@component-controls/specification';
import { LoadedComponentControls } from '@component-controls/core';
import { CURRENT_SELECTION, DocsContext } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from '../shared/ThemeProvider';

export interface BlockContextProps {
  controls: LoadedComponentControls;
  args?: StoryArguments;
  story: any;
  api?: any;
  id?: string;
  channel: any;
  source?: string;
  fileSource?: string;
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
  // console.log(myStoryStore);
  const myStory: Story = myStoryStore && myStoryStore.stories[previewId];
  const kindTitle =
    myStoryStore &&
    myStoryStore.kinds &&
    Object.keys(myStoryStore.kinds).find(key => {
      const k = myStoryStore.kinds[key];
      return k.stories.indexOf(previewId) > -1;
    });
  const kind = kindTitle ? myStoryStore.kinds[kindTitle] : undefined;
  const source: string | undefined = myStory ? myStory.source : undefined;
  return (
    <BlockContext.Provider
      value={{
        api: clientApi,
        id: story.id,
        story,
        channel,
        source,
        fileSource: kind ? kind.source : undefined,
        args: myStory.arguments,
        controls: story.controls || story.parameters.controls,
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </BlockContext.Provider>
  );
};
