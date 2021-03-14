import fs from 'fs';
import { BuildProps, RuleOptions } from '@component-controls/core';
import {
  getCSSFilePath,
  getDistFolder,
} from '@component-controls/core/node-utils';
import {
  buildBundle,
  webpackConfig,
} from '@component-controls/base-integration/webpack-build';

module.exports = ({
  bundleName,
  configPath,
  presets,
  staticFolder,
  distFolder,
  webpack,
  ...rest
}: BuildProps) => () => {
  const buildOptions: BuildProps = {
    bundleName,
    configPath,
    presets,
    staticFolder,
    distFolder,
    webpack,
  };
  return {
    /**
     * we need some async function, to make sure the compilation process is completed
     * headers is the first called from async redirects() amd async rewrites()
     */
    async headers() {
      await buildBundle({
        options: buildOptions,
        onEndBuild: ({ store }) => {
          const cssBundle = getCSSFilePath(store.config);
          if (fs.existsSync(cssBundle)) {
            const styles = fs.readFileSync(cssBundle, 'utf8');
            process.env.NEXT_PUBLIC_CC_CSS = JSON.stringify(styles);
          }
        },
      });
      return [];
    },
    webpack: (config: RuleOptions['config']) => {
      const loader: any = config.module?.rules?.find(
        (r: any) => (r?.use as any)?.loader === 'next-babel-loader',
      );
      if (loader) {
        loader.exclude = [getDistFolder(buildOptions)];
      }
      if (loader?.options) {
        (loader.options as any).babelPresetPlugins.push(
          '@emotion/babel-plugin',
        );
      }
      return webpackConfig({ config, options: buildOptions });
    },

    ...rest,
  };
};
