import { ExternalProps } from './resolve_externals';
export const defaultExternals: ExternalProps[] = [
  {
    lib: 'react',
    externalName: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  },
  {
    lib: 'react-dom',
    externalName: {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  {
    lib: 'prop-types',
    externalName: {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
    },
  },
  { lib: 'regenerator-runtime' },
  {
    lib: 'lodash',
    externalName: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },

  { lib: 'theme-ui' },
  { lib: '@theme-ui/presets' },
  { lib: '@theme-ui/core' },
  { lib: '@theme-ui/css' },

  { lib: '@component-controls/core' },
  { lib: '@component-controls/store' },
  { lib: '@component-controls/blocks' },
  { lib: '@component-controls/components' },

  { lib: 'broadcast-channel' },

  { lib: 'react-helmet' },
  { lib: 'react-table' },
  { lib: 'react-colorful' },
  { lib: 'react-google-charts' },
  { lib: 'react-tabs' },
  { lib: 'react-switch' },
  { lib: 'react-popper' },
  { lib: 'react-popper-tooltip' },
  { lib: 'react-animate-height' },
  { lib: 'polished' },
  { lib: 'tinycolor2' },

  { lib: 'prism-react-renderer/themes' },
  { lib: 'prism-react-renderer' },

  { lib: '@primer/octicons-react' },
  { lib: '@mdx-js/react' },

  { lib: 'markdown-to-jsx' },

  { lib: 'axe-core' },
  { lib: 'faker/locale/en_US' },
  { lib: 'fuse.js' },
];
