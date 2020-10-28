import { loadStore } from '@component-controls/store';
import { getBundleName } from '@component-controls/webpack-compile';
import { Store } from '@component-controls/core';

export type RendererFnResult = Promise<any> | any;

export type RendererFn = (
  storyId: string,
  store: Store,
  options?: any,
) => Promise<RendererFnResult>;

export const runJestSnapshots = (
  renderer: RendererFn,
  bundleName?: string,
): void => {
  const bundle = bundleName || getBundleName();
  const store = loadStore(require(bundle));
  Object.keys(store.docs).forEach(docId => {
    const doc = store.docs[docId];

    if (doc.stories && doc.stories.length) {
      const stories = doc.stories;
      describe(doc.title, () => {
        stories.forEach(storyId => {
          const story = store.stories[storyId];
          it(story.name, async () => {
            const tree = await renderer(storyId, store);
            expect(tree).toMatchSnapshot();
          });
        });
      });
    }
  });
};
