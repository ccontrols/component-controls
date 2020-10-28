import * as path from 'path';
import * as webpack from 'webpack';
import { normalizePath } from '@component-controls/core';

export interface StorePluginOptions {
  bundleFileName: string;
  isServer: boolean;
}
export class StorePlugin {
  public static pluginName = 'component-controls-store-plugin';
  private options: StorePluginOptions;

  constructor(options: StorePluginOptions) {
    this.options = options;
  }

  apply(compiler: webpack.Compiler): void {
    this.installStoreLoader(compiler);
  }

  private installStoreLoader(compiler: webpack.Compiler) {
    const nmrp = new webpack.NormalModuleReplacementPlugin(
      new RegExp(
        normalizePath(path.resolve(__dirname, '../controls-store.js')),
      ),
      (resource: any) => {
        if (resource.resource) {
          resource.loaders.push({
            loader: path.join(__dirname, 'loader.js'),
            options: JSON.stringify({
              bundleFileName: this.options.bundleFileName,
            }),
          });
        }
      },
    );
    nmrp.apply(compiler);
  }
}
