export default {
  title: 'Storybook/Kind',
  component: ControlsTable,
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
