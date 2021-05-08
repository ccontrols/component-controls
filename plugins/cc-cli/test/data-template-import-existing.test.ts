import path from 'path';
import { randomizeSeed } from '@component-controls/core';
import { createDataTemplate } from '../src/data-templates/data-template';

describe('data-template-import-existing', () => {
  randomizeSeed(11223344);
  it('existing less than data', async () => {
    const template = await createDataTemplate(
      {
        data: 5,
        storyPath: path.resolve(
          __dirname,
          '../../../core/jest-extract/test/fixtures/story/VariantButton.docs.tsx',
        ),
      },
      {
        overview: {
          '0': {
            text: 'Gisselle Mohr',
            icon: 'Kaden Powlowski',
            fontSize: 12,
          },
        },
      },
    );
    expect(Object.keys(template.data)).toStrictEqual(['overview']);
    expect(Object.keys(template.data.overview)).toStrictEqual([
      '0',
      '1',
      '2',
      '3',
      '4',
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
      '1',
      '2',
      '3',
      '4',
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
      },
      {
        overview: {
          '0': {
            text: 'Test name',
          },
          '1': {},
          '2': {},
          '3': {},
          '4': {},
          '5': {},
        },
      },
    );
    expect(Object.keys(template.data)).toStrictEqual(['overview']);
    expect(Object.keys(template.data.overview).sort()).toStrictEqual([
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
    ]);
    expect(template.data.overview['4']).toStrictEqual({});
    expect(template.data.overview['0']).toStrictEqual({
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
      },
      {
        oldStory: {
          '0': {
            text: 'Test name',
          },
        },
      },
    );
    expect(Object.keys(template.data)).toStrictEqual(['overview']);
    expect(Object.keys(template.data.overview)).toStrictEqual([
      '0',
      '1',
      '2',
      '3',
      '4',
    ]);
  });
});
