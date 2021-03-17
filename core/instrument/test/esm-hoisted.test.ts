import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'hoisted'], fileName, callback);

describe('esm-hoisted', () => {
  createTest('name-and-parameters.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          name: 'Custom story name',
          component: 'ControlsTable',
          smartControls: {
            smart: false,
          },
        },
      },
    });
  });

  createTest('name-parameters-and-controls.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          name: 'Custom story name',
          smartControls: {
            smart: false,
          },
          controls: {
            name: {
              type: 'text',
              label: 'Name',
              value: 'Mark',
              order: 9999,
            },
          },
        },
      },
    });
  });
});
