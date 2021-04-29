import * as path from 'path';
import { run, AxeResults } from 'axe-core';
import { reactRunDOM } from '@component-controls/test-renderers';
import '@component-controls/jest-axe-matcher';
import { loadConfigurations } from '@component-controls/config';
import { renderDocument } from '@component-controls/test-renderers';
import { render, act } from '@testing-library/react';
import { renderErr } from '@component-controls/test-renderers';

import * as examples from './ViewportBlock.stories';

describe('ViewportBlock', () => {
  const configPath = path.resolve(__dirname, '../../.config');
  const config = loadConfigurations(configPath);
  let renderedExamples: ReturnType<typeof renderDocument> = [];
  act(() => {
    renderedExamples = renderDocument(examples, config);
  });
  if (!renderedExamples) {
    renderErr();
    return;
  }
  renderedExamples.forEach(({ name, rendered }) => {
    describe(name, () => {
      it('snapshot', () => {
        const { asFragment } = render(rendered);
        expect(asFragment()).toMatchSnapshot();
      });
      it('accessibility', async () => {
        const axeResults = await reactRunDOM<AxeResults>(rendered, run);
        expect(axeResults).toHaveNoAxeViolations();
      });
    });
  });
});
