import { Components, Document, Stories } from '@component-controls/core';
import { parseStories } from '@component-controls/instrument';
import { loadStore } from '@component-controls/store';

export const getStore = async ({
  storyPath,
  bundle,
  name,
}: {
  storyPath: string;
  bundle?: string;
  name?: string;
}): Promise<
  | {
      doc: Document;
      stories: Stories;
      components: Components;
      storeName: string;
    }
  | undefined
> => {
  if (bundle) {
    if (!name) {
      throw new Error(
        'When using a bundle, you must specify the document title/name as name (-n) parameter',
      );
    }
    const loadedStore = require(bundle);
    const store = loadStore(loadedStore);
    const doc = store.docs[name];
    if (!doc) {
      throw new Error(
        `Could not find document ${name} in the specified bundle`,
      );
    }
    if (!doc.stories) {
      throw new Error(`Invalid document ${name} with no stories`);
    }
    if (doc.isMDXComponent || !doc.stories.length) {
      return undefined;
    }

    return {
      doc,
      stories: doc.stories.reduce((acc, id) => {
        return { ...acc, [id]: store.stories[id] };
      }, {}),
      components: store.components,
      storeName: 'bundle',
    };
  } else {
    const { doc, stories, components = {} } = await parseStories(storyPath);
    if (!doc || !stories) {
      throw new Error(`Invalid story path ${storyPath}`);
    }
    if (doc.isMDXComponent || !Object.keys(stories).length) {
      return undefined;
    }
    return { doc, stories, components, storeName: 'imports' };
  }
};
