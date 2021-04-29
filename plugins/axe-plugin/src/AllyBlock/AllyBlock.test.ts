import * as path from 'path';

import { loadConfigurations } from '@component-controls/config';
import { renderDocument } from '@component-controls/test-renderers';
import { render, act } from '@testing-library/react';
import { renderErr } from '@component-controls/test-renderers';

import * as examples from './AllyBlock.stories';

describe('AllyBlock', () => {
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
    });
  });
});
