export default { title: 'Story' };
export const myStory = () => {};
myStory.storyName = 'Custom story name';
myStory.controls = {
  name: {
    type: 'text',
    label: 'Name',
    value: 'Mark',
    order: 9999,
  },
};
myStory.smartControls = {
  smart: false,
};
