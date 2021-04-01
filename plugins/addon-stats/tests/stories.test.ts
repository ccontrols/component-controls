import path from 'path';
import MatchMediaMock from 'jest-matchmedia-mock';
import {
  loadConfigurations,
  extractDocuments,
} from '@component-controls/config';
import { renderExample } from '@component-controls/test-renderers';
import { render as reactRender } from '@component-controls/render/react';
import { render, act } from '@testing-library/react';

const renderErr = () => {
  throw new Error('Could not render the story');
};

describe('component-controls generated', () => {
  let matchMedia: MatchMediaMock;
  beforeAll(() => {
    jest.mock('rc-util/lib/Portal');
    matchMedia = new MatchMediaMock();
  });
  afterEach(() => {
    matchMedia.clear();
  });
  const configPath = path.resolve(__dirname, '../.config');
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
              if (!rendered) {
                renderErr();
                return;
              }
              const { asFragment } = render(rendered);
              expect(asFragment()).toMatchSnapshot();
            });
          });
        });
      }
    });
  }
});
