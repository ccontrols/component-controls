import path from 'path';
import { createDataTemplate } from '../src/data-templates/data-template';

describe('data-template-import', () => {
  it('import', async () => {
    const template = await createDataTemplate({
      data: 5,
      storyPath: path.resolve(
        __dirname,
        '../../../core/jest-extract/test/fixtures/story/VariantButton.docs.tsx',
      ),
      seed: 11223344,
    });
    expect(template).toMatchSnapshot();
  }, 50000);
});
