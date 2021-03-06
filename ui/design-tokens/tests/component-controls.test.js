const path = require('path');
const { run } = require('axe-core');
const { reactRunDOM } = require('@component-controls/test-renderers');
require('@component-controls/jest-axe-matcher');

const {
  loadConfigurations,
  extractDocuments,
  isMDXDocument,
} = require('@component-controls/config');
const { renderExample } = require('@component-controls/test-renderers');
const { render, act } = require('@testing-library/react');
const { renderErr } = require('@component-controls/test-renderers');

describe('component-controls generated', () => {
  const configPath = path.resolve(__dirname, '../.config');
  const config = loadConfigurations(configPath);
  const documents = extractDocuments({ config, configPath });
  if (documents) {
    documents
      .filter(file => !isMDXDocument(file, config.instrument))
      .forEach(file => {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        const exports = require(file);
        const doc = exports.default;
        const examples = Object.keys(exports)
          .filter(key => key !== 'default')
          .map(key => exports[key]);

        if (examples.length) {
          describe(doc.title, () => {
            examples.forEach(example => {
              describe(example.name, () => {
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
                it('snapshot', () => {
                  const { asFragment } = render(rendered);
                  expect(asFragment()).toMatchSnapshot();
                });
                it('accessibility', async () => {
                  const axeResults = await reactRunDOM(rendered, run);
                  expect(axeResults).toHaveNoAxeViolations();
                });
              });
            });
          });
        }
      });
  }
});
