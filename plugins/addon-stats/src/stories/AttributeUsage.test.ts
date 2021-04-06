import * as path from 'path';
import { loadConfigurations } from '@component-controls/config';
import { renderDocument } from '@component-controls/test-renderers';
import { render as reactRender } from '@component-controls/render/react';
import { render, act } from '@testing-library/react';

const renderErr = (): void => {
  throw new Error('Could not render the story');
};

import * as examples from './AttributeUsage.stories';

describe('AttributeUsage', () => {
  const configPath = path.resolve(__dirname, '../../.config');
  const config = loadConfigurations(configPath);
  if (!config.renderFn) {
    config.renderFn = reactRender;
  }
  let renderedExamples: ReturnType<typeof renderDocument> = [];
  act(() => {
    renderedExamples = renderDocument(examples, config);
  });
  if (!renderedExamples) {
    renderErr();
    return;
  }
  renderedExamples.forEach(({ name, rendered }) => {
    it(name, async () => {
      const { asFragment } = render(rendered);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
