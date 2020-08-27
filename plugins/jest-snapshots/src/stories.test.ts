import { act } from 'react-dom/test-utils';
import { loadStore } from '@component-controls/store';
import { getBundleName } from '@component-controls/webpack-compile';
import { cliArgs } from '@component-controls/webpack-compile/cli';

import { jestCliArgs } from '@component-controls/jest-snapshots/args';
import { renderers } from '@component-controls/jest-snapshots/renderers';
const bundle = getBundleName();
const store = loadStore(require(bundle));
const args = cliArgs(jestCliArgs);

const rendererName = args.parse().renderer as string;

const renderer = renderers[rendererName];

Object.keys(store.docs).forEach(docId => {
  const doc = store.docs[docId];

  if (doc.stories && doc.stories.length) {
    const stories = doc.stories;
    describe(doc.title, () => {
      beforeAll(() => {
        jest.mock('rc-util/lib/Portal');
        //@ts-ignore
        global.MutationObserver = class {
          constructor() {}
          disconnect() {}
          observe() {}
        };

        Object.defineProperty(window, 'matchMedia', {
          writable: true,
          value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
          })),
        });
      });

      stories.forEach(storyId => {
        const story = store.stories[storyId];
        act(() => {
          it(story.name, async () => {
            const tree = await renderer(storyId, store);
            expect(tree).toMatchSnapshot();
          });
        });
      });
    });
  }
});
