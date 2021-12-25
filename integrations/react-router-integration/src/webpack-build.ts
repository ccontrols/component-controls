import fs from 'fs';
import { BuildProps, RuleOptions } from '@component-controls/core';
import { getCSSFilePath } from '@component-controls/core/node-utils';
import { asyncWebpackConfig } from '@component-controls/base-integration/webpack-build';
import HTMLInjectStylePlugin from './webpack-plugin/plugin';

export const withComponentControls =
  (props: { config: RuleOptions['config']; options?: BuildProps }) =>
  async (): Promise<RuleOptions['config']> => {
    return asyncWebpackConfig({
      ...props,
      callback: async ({ config, options }) => {
        if (options) {
          const cssBundle = getCSSFilePath(options);
          if (fs.existsSync(cssBundle)) {
            const styles = fs.readFileSync(cssBundle, 'utf8');
            (config.plugins as any[]).push(
              new HTMLInjectStylePlugin({ styles: styles }),
            );
            return config;
          }
        }
        return config;
      },
    });
  };
