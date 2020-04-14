export default { title: 'Story' };
export const myStory = () => {};
myStory.story = {
  name: 'Custom story name',
  parameters: {
    component: ControlsTable,
    addonControls: {
      smart: false,
    },
  },
};
