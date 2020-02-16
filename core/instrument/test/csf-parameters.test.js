import { parseCSF } from '../src/index';

describe('csf-parameters', () => {
  it('story propery name', () => {
    expect(
      parseCSF(`
export const myStory = () => {};
myStory.story = {
 name: 'Custom story name',
}
      
    `),
    ).toMatchSnapshot();
  });

  it('story propery name and parameters', () => {
    expect(
      parseCSF(`
export const myStory = () => {};
myStory.story = {
  name: 'Custom story name',
  parameters: {
    component: ControlsEditorsTable,
    addonControls: {
      smart: false,
    }
  },
}
      
    `),
    ).toMatchSnapshot();
  });

  it('story propery name parameters and controls', () => {
    expect(
      parseCSF(`
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
      
    `),
    ).toMatchSnapshot();
  });
});
