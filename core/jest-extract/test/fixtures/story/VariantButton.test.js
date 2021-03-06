const path = require('path');
const { run } = require('axe-core');
const { reactRunDOM } = require('@component-controls/test-renderers');
require('@component-controls/jest-axe-matcher');

const { loadConfigurations } = require('@component-controls/config');
const { renderDocument } = require('@component-controls/test-renderers');
const { render, act } = require('@testing-library/react');
const { renderErr } = require('@component-controls/test-renderers');

const examples = require('./VariantButton.docs');
const data = require('./VariantButton.data');

describe('VariantButton', () => {
  const configPath = path.resolve(
    __dirname,
    '../../../../../plugins/cc-cli/test/.config',
  );
  const config = loadConfigurations(configPath);
  let renderedExamples = [];
  act(() => {
    renderedExamples = renderDocument(examples, config, data);
  });
  if (!renderedExamples) {
    renderErr();
    return;
  }
  renderedExamples.forEach(({ name, rendered, dataId, values }) => {
    describe(name, () => {
      const runTests = () => {
        it('snapshot', () => {
          const { asFragment } = render(rendered);
          expect(asFragment()).toMatchSnapshot();
        });
        it('accessibility', async () => {
          const axeResults = await reactRunDOM(rendered, run);
          expect(axeResults).toHaveNoAxeViolations();
        });
      };
      if (values) {
        describe(dataId, runTests);
      } else {
        runTests();
      }
    });
  });
});
