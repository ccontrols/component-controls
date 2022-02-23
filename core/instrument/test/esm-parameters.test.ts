import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'parameters'], fileName, callback);

describe('esm-parameters', () => {
  createTest('name-and-parameters.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          name: 'Custom story name',
          id: 'myStory',
          smartControls: {
            smart: false,
          },
        },
      },
    });
  });
  createTest('name-parameters-and-controls.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          name: 'Custom story name',
          id: 'myStory',
          controls: {
            name: {
              type: 'text',
              label: 'Name',
              value: 'Mark',
              order: 9999,
            },
          },
          smartControls: {
            smart: false,
          },
        },
      },
    });
  });
});
