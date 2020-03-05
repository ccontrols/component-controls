import { parseCSF } from '../src/index';

describe('csf-parameters', () => {
  it('story propery name', async () => {
    expect(
      await parseCSF(
        `
export const myStory = () => {};
myStory.story = {
 name: 'Custom story name',
}
      
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('story propery name and parameters', async () => {
    expect(
      await parseCSF(
        `
export const myStory = () => {};
myStory.story = {
  name: 'Custom story name',
  parameters: {
    component: ControlsTable,
    addonControls: {
      smart: false,
    }
  },
}
      
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });

  it('story propery name parameters and controls', async () => {
    expect(
      await parseCSF(
        `
export const myStory = () => {};
myStory.story = {
  name: 'Custom story name',
  parameters: {
    controls: {
      name: {
        type: ControlTypes.TEXT,
        label: 'Name',
        value: 'Mark',
        order: 9999,
      },
    },
    addonControls: {
      smart: false,
    }
  },
}
      
    `,
        __filename,
      ),
    ).toMatchSnapshot();
  });
});
