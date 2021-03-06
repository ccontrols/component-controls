import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'named-exports'], fileName, callback);

describe('esm-named-exports', () => {
  createTest('export-alias.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        exportedStory: {
          name: 'Custom story name',
          id: 'myStory',
        },
      },
    });
  });

  createTest('property-name.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          name: 'Custom story name',
          id: 'myStory',
        },
      },
    });
  });

  createTest('re-export-name.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          name: 'Custom story name',
          id: 'myStory',
        },
      },
    });
  });
});
