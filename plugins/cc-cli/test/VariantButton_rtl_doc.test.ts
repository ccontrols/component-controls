import * as path from 'path';
import { run, AxeResults } from 'axe-core';
import { reactRunDOM } from '@component-controls/test-renderers';
import '@component-controls/jest-axe-matcher';
import { loadConfigurations } from '@component-controls/config';
import { renderDocument } from '@component-controls/test-renderers';
import { render, act } from '@testing-library/react';
import { renderErr } from '@component-controls/test-renderers';

import * as examples from './fixtures/VariantButton.docs';
import data from '../../../core/jest-extract/test/fixtures/story/VariantButton.data';

describe('VariantButton', () => {
  const configPath = path.resolve(__dirname, '.config');
  const config = loadConfigurations(configPath);
  let renderedExamples: ReturnType<typeof renderDocument> = [];
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
          const axeResults = await reactRunDOM<AxeResults>(rendered, run);
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
