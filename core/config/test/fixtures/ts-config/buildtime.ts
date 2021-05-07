import { BuildConfiguration } from '@component-controls/core';
const config: BuildConfiguration = {
  stories: ['../*.docs.tsx'],
  instrument: {
    components: {
      tests: true,
    },
  },
};

export default config;
