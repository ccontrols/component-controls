import { loadStore } from '@component-controls/store';
import { compile } from '@component-controls/webpack-compile';
import { CompileProps } from '@component-controls/webpack-configs';
import { Store } from '@component-controls/core';

export type RendererFn = (storyId: string, store: Store, options?: any) => any;

export const runJestSnapshots = (
  renderer: RendererFn,
  config: CompileProps = {},
  testName: string = 'component-controls tests',
  timeout = 50000,
) => {
  test(
    testName,
    async () => {
      const { bundleName } = await compile({
        presets: ['react', 'react-docgen-typescript'],
        logOptions: {
          logLevel: 'none',
        },
        ...config,
      });
      if (bundleName) {
        const store = loadStore(require(bundleName));
        // const loadedStore = loadStore(store);
        Object.keys(store.stories).forEach(storyId => {
          const tree = renderer(storyId, store);
          expect(tree).toMatchSnapshot();
        });
      }
    },
    timeout,
  );
};
