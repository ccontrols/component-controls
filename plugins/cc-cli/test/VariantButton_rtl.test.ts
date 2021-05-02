import * as path from 'path';
import { run } from 'axe-core';
import { loadConfigurations } from '@component-controls/config';
import { renderExample } from '@component-controls/test-renderers';
import { render, act } from '@testing-library/react';
import { renderErr } from '@component-controls/test-renderers';
import '@component-controls/jest-axe-matcher';

import doc, {
  overview,
} from '../../../core/jest-extract/test/fixtures/story/VariantButton.docs';

describe('VariantButton', () => {
  const configPath = path.resolve(__dirname, '.config');
  const config = loadConfigurations(configPath);
  const controls = require(path.resolve(
    __dirname,
    '../../../core/jest-extract/test/fixtures/story/',
    doc.values,
  ));
  Object.keys(controls['overview']).forEach(ctrlName => {
    const values = controls['overview'][ctrlName];
    describe(ctrlName, () => {
      describe('overview', () => {
        const example = overview;
        let rendered;
        act(() => {
          rendered = renderExample({
            example,
            doc,
            config,
            values,
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
          const { container } = render(rendered);
          const results = await run(container);
          expect(results).toHaveNoAxeViolations();
        });
      });
    });
  });
});
