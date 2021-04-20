import * as path from 'path';
import { loadConfigurations } from '@component-controls/config';
import { renderExample } from '@component-controls/test-renderers';
import { render, act } from '@testing-library/react';
import { renderErr } from '@component-controls/test-renderers';

import doc, { main } from './Component.docs';

describe('Component', () => {
  const configPath = path.resolve(__dirname, '../docs');
  const config = loadConfigurations(configPath);

  test('main', () => {
    const example = main;

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
