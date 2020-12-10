import { theme } from '@component-controls/components';
module.exports = (): any => ({
  plugins: [
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: theme,
      },
    },
    'gatsby-plugin-typescript',
  ],
});
