import path from 'path';
import { Document } from '@component-controls/core';
import { getDataFile, assignDocumentData } from '../src/misc/data-driven';

describe('data-driven', () => {
  it('getDataFile length 1', () => {
    const fileName = getDataFile('file');
    expect(fileName).toBe('file.data');
  });
  it('getDataFile length 2', () => {
    const fileName = getDataFile('file.js');
    expect(fileName).toBe('file.data.js');
  });

  it('getDataFile length > 2', () => {
    const fileName = getDataFile('file.test.js');
    expect(fileName).toBe('file.data.js');
  });
  it('load data file', () => {
    const doc: Document = { title: 'doc' };
    assignDocumentData(
      doc,
      path.resolve(
        __dirname,
        '../../../examples/stories/src/stories/VariantButton/VariantButton.stories.tsx',
      ),
    );
    expect(doc.testData).toBe('./VariantButton.data.ts');
    expect(Object.keys(doc.data?.overview).length).toBe(5);
  });
  it('load doc testData file', () => {
    const doc: Document = { title: 'doc', testData: './VariantButton.data.ts' };
    assignDocumentData(
      doc,
      path.resolve(
        __dirname,
        '../../../examples/stories/src/stories/VariantButton/VariantButton.stories.tsx',
      ),
    );
    expect(doc.testData).toBe('./VariantButton.data.ts');
    expect(Object.keys(doc.data?.overview).length).toBe(5);
  });
});
