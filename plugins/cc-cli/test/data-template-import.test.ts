import path from 'path';
import { randomizeSeed } from '@component-controls/core';
import { createDataTemplate } from '../src/data-templates/data-template';

describe('data-template-import', () => {
  randomizeSeed(11223344);
  it('import', async () => {
    const template = await createDataTemplate({
      data: 5,
      storyPath: path.resolve(
        __dirname,
        '../../../core/jest-extract/test/fixtures/story/VariantButton.docs.tsx',
      ),
    });
    expect(template).toMatchSnapshot();
  }, 50000);
});
