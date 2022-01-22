module.exports = {
  addons: [
    {
      name: '@component-controls/storybook',
      options: {
        webpack: ['instrument'],
      },
    },
  ],
  stories: [
    '../../../../ui/editors/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../../ui/components/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../../ui/blocks/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../../examples/stories/src/**/*.stories.(js|jsx|tsx|mdx)',
  ],
};
