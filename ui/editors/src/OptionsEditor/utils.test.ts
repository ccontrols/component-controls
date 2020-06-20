import { OptionsListType } from '@component-controls/core';

import { normalizeOptions, NormalizedOptions } from './utils';

describe('Options utility functions', () => {
  const objectData: OptionsListType = { Dog: 'dog', Cat: 'cat' };
  const objectEntries: NormalizedOptions = Object.keys(objectData).map(key => ({
    label: key,
    value: objectData[key],
  }));
  const arrayData: OptionsListType = [
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
  ];
  it('Should handle key/value pairs', () => {
    expect(normalizeOptions(objectData, 'dog')).toMatchObject({
      entries: objectEntries,
      selected: ['dog'],
    });
  });
  it('Should handle no selection', () => {
    expect(normalizeOptions(objectData, undefined)).toMatchObject({
      entries: objectEntries,
      selected: [],
    });
  });

  it('Should handle multi-select object', () => {
    expect(normalizeOptions(objectData, ['dog', 'cat'])).toMatchObject({
      entries: objectEntries,
      selected: ['dog', 'cat'],
    });
  });
  it('Should handle numeric value', () => {
    expect(normalizeOptions({ Number: 1 }, 1)).toMatchObject({
      entries: [{ label: 'Number', value: 1 }],
      selected: [1],
    });
  });
  it('Should handle null value', () => {
    expect(normalizeOptions({ Null: null }, null)).toMatchObject({
      entries: [{ label: 'Null', value: null }],
      selected: [null],
    });
  });
  it('Should handle object value', () => {
    expect(normalizeOptions({ Object: objectData }, objectData)).toMatchObject({
      entries: [{ label: 'Object', value: objectData }],
      selected: [objectData],
    });
  });

  it('Should handle array input', () => {
    expect(normalizeOptions(arrayData, 'dog')).toMatchObject({
      entries: objectEntries,
      selected: ['dog'],
    });
  });

  it('Should handle multi-select array input', () => {
    expect(normalizeOptions(arrayData, ['dog', 'cat'])).toMatchObject({
      entries: objectEntries,
      selected: ['dog', 'cat'],
    });
  });
});
