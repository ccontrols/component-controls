import path from 'path';
import { createDataTemplate } from '../src/data-templates/data-template';

describe('data-template-import-existing', () => {
  it('existing less than data', async () => {
    const template = await createDataTemplate(
      {
        data: 5,
        storyPath: path.resolve(
          __dirname,
          '../../../core/jest-extract/test/fixtures/story/VariantButton.docs.tsx',
        ),
        seed: 11223344,
      },
      {
        overview: {
          '1': {
            text: 'Gisselle Mohr',
            icon: 'Kaden Powlowski',
            fontSize: 12,
          },
        },
      },
    );
    expect(Object.keys(template.data)).toStrictEqual(['overview']);
    expect(Object.keys(template.data.overview)).toStrictEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
    ]);
  });
  it('renamed keys', async () => {
    const template = await createDataTemplate(
      {
        data: 5,
        storyPath: path.resolve(
          __dirname,
          '../../../core/jest-extract/test/fixtures/story/VariantButton.docs.tsx',
        ),
        seed: 11223344,
      },
      {
        overview: {
          'data-row-1': {
            text: 'Gisselle Mohr',
            icon: 'Kaden Powlowski',
            fontSize: 12,
          },
        },
      },
    );
    expect(Object.keys(template.data)).toStrictEqual(['overview']);
    expect(Object.keys(template.data.overview).sort()).toStrictEqual([
      '2',
      '3',
      '4',
      '5',
      'data-row-1',
    ]);
  });

  it('more than data', async () => {
    const template = await createDataTemplate(
      {
        data: 5,
        storyPath: path.resolve(
          __dirname,
          '../../../core/jest-extract/test/fixtures/story/VariantButton.docs.tsx',
        ),
        seed: 11223344,
      },
      {
        overview: {
          '1': {
            text: 'Test name',
          },
          '2': {},
          '3': {},
          '4': {},
          '5': {},
          '6': {},
        },
      },
    );
    expect(Object.keys(template.data)).toStrictEqual(['overview']);
    expect(Object.keys(template.data.overview).sort()).toStrictEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ]);
    expect(template.data.overview['4']).toStrictEqual({});
    expect(template.data.overview['1']).toStrictEqual({
      text: 'Test name',
    });
  });
  it('remove obsolete story', async () => {
    const template = await createDataTemplate(
      {
        data: 5,
        storyPath: path.resolve(
          __dirname,
          '../../../core/jest-extract/test/fixtures/story/VariantButton.docs.tsx',
        ),
        seed: 11223344,
      },
      {
        oldStory: {
          '1': {
            text: 'Test name',
          },
        },
      },
    );
    expect(Object.keys(template.data)).toStrictEqual(['overview']);
    expect(Object.keys(template.data.overview)).toStrictEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
    ]);
  });
});
