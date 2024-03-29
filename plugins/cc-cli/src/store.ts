import {
  Components,
  Document,
  Stories,
  BuildConfiguration,
  deepmerge,
} from '@component-controls/core';
import {
  InstrumentOptions,
  parseStories,
} from '@component-controls/instrument';
import { loadStore } from '@component-controls/store';
interface StoreResults {
  doc: Document;
  stories: Stories;
  components: Components;
  storeName: string;
}
const cache: {
  storyPath: Record<string, StoreResults>;
  bundle: Record<string, StoreResults>;
} = {
  storyPath: {},
  bundle: {},
};
export const getStore = async (
  {
    storyPath,
    bundle,
    name,
  }: {
    storyPath: string;
    bundle?: string;
    name?: string;
    config?: BuildConfiguration;
  },
  configuration?: BuildConfiguration,
): Promise<StoreResults | undefined> => {
  if (bundle) {
    if (!name) {
      throw new Error(
        'When using a bundle, you must specify the document title/name as name (-n) parameter',
      );
    }
    if (cache.bundle[bundle]) {
      return cache.bundle[bundle];
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
    cache.bundle[bundle] = {
      doc,
      stories: doc.stories.reduce((acc, id) => {
        return { ...acc, [id]: store.stories[id] };
      }, {}),
      components: store.components,
      storeName: 'bundle',
    };
    return cache.bundle[bundle];
  } else {
    if (cache.storyPath[storyPath]) {
      return cache.storyPath[storyPath];
    }
    const options: InstrumentOptions = deepmerge(
      {
        propsLoaders: [
          {
            name: '@component-controls/react-docgen-info',
            test: /\.(js|jsx)$/,
          },
          {
            name: '@component-controls/react-docgen-typescript-info',
            test: /\.(ts|tsx)$/,
          },
        ],
        components: {
          sourceFiles: false,
        },
      },
      configuration?.instrument || {},
    );
    const {
      doc,
      stories,
      components = {},
    } = await parseStories(storyPath, undefined, { ...options, jest: false });
    if (!doc || !stories) {
      throw new Error(`Invalid story path ${storyPath}`);
    }
    if (doc.isMDXComponent || !Object.keys(stories).length) {
      return undefined;
    }

    cache.storyPath[storyPath] = {
      doc,
      stories,
      components,
      storeName: 'imports',
    };
    return cache.storyPath[storyPath];
  }
};
