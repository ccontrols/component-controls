/* eslint-disable @typescript-eslint/no-empty-function */
const { act } = require('react-dom/test-utils');
const { loadStore } = require('@component-controls/store');
const { getBundleName } = require('@component-controls/webpack-compile');
const { cliArgs } = require('@component-controls/webpack-compile/cli');

const { jestCliArgs } = require('@component-controls/jest-snapshots/args');
const { renderers } = require('@component-controls/test-renderers');

const bundle = getBundleName();
const store = loadStore(require(bundle));
const args = cliArgs(jestCliArgs);

const rendererName = args.parse().renderer;

const renderer = renderers[rendererName];
const config = store.config;
Object.keys(store.docs).forEach(docId => {
  const doc = store.docs[docId];

  if (doc.stories && doc.stories.length) {
    const stories = doc.stories;
    describe(doc.title, () => {
      beforeAll(() => {
        jest.mock('rc-util/lib/Portal');
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
            const { toJson } = (await renderer({ story, doc, config })) || {};
            expect(toJson ? toJson() : undefined).toMatchSnapshot();
          });
        });
      });
    });
  }
});
