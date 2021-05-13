import path from 'path';
import { createDataTemplate } from '../src/data-templates/data-template';

describe('data-template-bundle', () => {
  it('import', async () => {
    const template = await createDataTemplate({
      data: 5,
      bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
      name: 'VariantButton',
      seed: 11223344,
    });
    expect(template).toMatchSnapshot();
  }, 50000);
});
