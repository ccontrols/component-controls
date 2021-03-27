import {
  loadConfigurations,
  extractDocuments,
} from '@component-controls/config';
import { renderExample } from '@component-controls/test-renderers';
import { render as reactRender } from '@component-controls/render/react';

import { render, act } from '@testing-library/react';

describe('editors', () => {
  beforeAll(async done => {
    jest.mock('rc-util/lib/Portal');
    global.MutationObserver = class {
      constructor() {}
      disconnect() {}
      observe() {}
      takeRecords() {
        return [];
      }
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
    done();
  });
  const configPath = './.config';
  const config = loadConfigurations(configPath);
  if (!config.renderFn) {
    config.renderFn = reactRender;
  }
  const documents = extractDocuments({ config, configPath });
  if (documents) {
    documents.forEach((file: string) => {
      const exports = require(file);
      const doc = exports.default;
      const examples = Object.keys(exports)
        .filter(key => key !== 'default')
        .map(key => exports[key]);

      if (examples.length) {
        describe(doc.title, () => {
          examples.forEach(example => {
            it(example.name, async () => {
              let rendered;
              act(() => {
                rendered = renderExample({
                  example,
                  doc,
                  config,
                });
              });
              let serialize;
              if (rendered) {
                ({ asFragment: serialize } = render(rendered));
              } else {
                serialize = () => 'error';
              }

              expect(serialize()).toMatchSnapshot();
            });
          });
        });
      }
    });
  }
});
