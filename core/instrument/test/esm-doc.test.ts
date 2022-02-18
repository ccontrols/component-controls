import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'doc'], fileName, callback);

describe('esm-doc', () => {
  createTest('default-export-const.ts', async parsed => {
    expect(parsed).toMatchObject({
      doc: {
        title: 'Story',
        component: 'ControlsTable',
      },
    });
  });

  createTest('title-controls-and-parameters.js', async parsed => {
    expect(parsed).toMatchObject({
      doc: {
        title: 'Docs/Kind',
        component: 'ControlsTable',
        controls: {
          name: {
            type: 'text',
            label: 'Name',
            value: 'Mark',
            order: 9999,
          },
        },
      },
    });
  });
  createTest('title-and-parameters.js', async parsed => {
    expect(parsed).toMatchObject({
      doc: {
        title: 'Docs/Blocks/ControlsTable',
        component: 'ControlsTable',
        smartControls: {
          smart: false,
        },
        tags: ['ui', 'react', 'vue'],
      },
    });
  });
  createTest('typed-export.ts', async parsed => {
    expect(parsed).toMatchObject({
      doc: {
        title: 'Story',
      },
    });
  });
});
