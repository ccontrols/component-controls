import { config } from '../../rollup-config';

export default config({
  input: [
    './src/index.ts',
    './src/gatsby-node.ts',
    './src/gatsby-config.ts',
    './src/gatsby-ssr.tsx',
  ],
});
