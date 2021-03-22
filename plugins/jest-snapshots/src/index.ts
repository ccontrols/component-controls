import { loadStore } from '@component-controls/store';
import { RendererFn } from '@component-controls/test-renderers';
import { getBundleName } from '@component-controls/webpack-compile';

export type RendererFnResult = Promise<any> | any;

export const runJestSnapshots = (
  renderer: RendererFn,
  bundleName?: string,
): void => {
  const bundle = bundleName || getBundleName();
  const store = loadStore(require(bundle));
  const config = store.config;
  Object.keys(store.docs).forEach(docId => {
    const doc = store.docs[docId];

    if (doc.stories && doc.stories.length) {
      const stories = doc.stories;
      describe(doc.title, () => {
        stories.forEach(storyId => {
          const story = store.stories[storyId];
          it(story.name, async () => {
            const { toJson } = (await renderer({ story, doc, config })) || {};
            expect(toJson ? toJson() : undefined).toMatchSnapshot();
          });
        });
      });
    }
  });
};
