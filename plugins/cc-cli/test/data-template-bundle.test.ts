import path from 'path';
import { randomizeSeed } from '@component-controls/core';
import { createDataTemplate } from '../src/data-templates/data-template';

describe('data-template-bundle', () => {
  randomizeSeed(11223344);
  it('import', async () => {
    const template = await createDataTemplate({
      data: 5,
      bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
      name: 'VariantButton',
    });
    expect(template).toMatchSnapshot();
  }, 50000);
});
