import { BuildProps, RuleOptions } from '@component-controls/core';
import { getCSSBundleName } from '@component-controls/core/node-utils';
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
     */
    async headers() {
      await buildBundle({
        options: buildOptions,
        onEndBuild: ({ store }) =>
          (process.env.NEXT_CC_CSS_FILENAME = getCSSBundleName(store.config)),
      });
      return [];
    },
    webpack: (config: RuleOptions['config']) => {
      const loader: any = config.module?.rules?.find(
        (r: any) => (r?.use as any)?.loader === 'next-babel-loader',
      );
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
