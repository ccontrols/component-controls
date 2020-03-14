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
    },
  },
};
