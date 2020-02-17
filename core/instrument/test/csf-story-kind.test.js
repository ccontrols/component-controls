import { parseCSF } from '../src/index';

describe('csf-story-kind', () => {
  it('No default export', async () => {
    expect(
      await parseCSF(`
      export const myStory = () => {};
    `),
    ).toMatchSnapshot();
  });

  it('default export - no title', async () => {
    expect(
      await parseCSF(`
      export default {
        test: 1,
      };
    `),
    ).toMatchSnapshot();
  });
  it('default export - with title', async () => {
    expect(
      await parseCSF(`
        export default {
          title: 'Storybook/Blocks/ControlsEditorsTable',
        };
      `),
    ).toMatchSnapshot();
  });

  it('default export - with title and parameters', async () => {
    expect(
      await parseCSF(`
        export default {
          title: 'Storybook/Blocks/ControlsEditorsTable',
          parameters: {
            component: ControlsEditorsTable,
            addonControls: {
              smart: false,
            }
          },
        };
      `),
    ).toMatchSnapshot();
  });

  it('default export - with title and controls', async () => {
    expect(
      await parseCSF(`
      export default {
        title: 'Storybook/Kind',
        component: ControlsEditorsTable,
        parameters: {
          controls: {
            name: {
              type: ControlTypes.TEXT,
              label: 'Name',
              value: 'Mark',
              order: 9999,
            },
          },
        },
      };
      `),
    ).toMatchSnapshot();
  });
});
