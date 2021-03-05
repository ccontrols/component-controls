import * as path from 'path';
import * as webpack from 'webpack';
import { createHash } from 'crypto';
import jsStringEscape from 'js-string-escape';
import { getSerializedStore, initializeBuildOptions } from './store';

export interface LoaderPluginOptions {
  config?: string;
  escapeOutput?: boolean;
  defaultConfigPath?: string;
}
export class LoaderPlugin {
  public static pluginName = 'component-controls-loader-plugin';
  private readonly compilationHash: string;
  private readonly options: LoaderPluginOptions;

  constructor(options: LoaderPluginOptions) {
    const hash = createHash('md5')
      .update(new Date().getTime().toString())
      .digest('hex');
    this.compilationHash = `__${hash.substr(0, 6)}__`;
    this.options = {
      ...options,
    };
  }

  apply(compiler: webpack.Compiler): void {
    initializeBuildOptions(
      compiler.context,
      this.options.config,
      this.options.defaultConfigPath,
    );
    this.replaceRuntimeModule(compiler);
    compiler.hooks.compilation.tap(LoaderPlugin.pluginName, compilation => {
      if (typeof compilation.hooks.processAssets?.tapPromise === 'function') {
        compilation.hooks.processAssets.tapPromise(
          {
            name: LoaderPlugin.pluginName,
            stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
          },
          async assets => {
            const jsFiles: string[] = [];
            Object.keys(assets)
              .filter(fileName => {
                return fileName.endsWith('.js');
              })
              .forEach(fileName => jsFiles.push(fileName));
            for (let i = 0; i < jsFiles.length; i += 1) {
              await this.replaceSource(compilation, jsFiles[i]);
            }
          },
        );
      } else if (
        typeof compilation.hooks.optimizeChunkAssets?.tapPromise === 'function'
      ) {
        compilation.hooks.optimizeChunkAssets.tapPromise(
          LoaderPlugin.pluginName,
          async chunks => {
            const jsFiles: string[] = [];
            chunks.forEach(chunk => {
              (chunk.files as any)
                .filter((fileName: string) => fileName.endsWith('.js'))
                .forEach((fileName: string) => jsFiles.push(fileName));
            });
            for (let i = 0; i < jsFiles.length; i += 1) {
              await this.replaceSource(compilation, jsFiles[i]);
            }
          },
        );
      }
    });
  }

  private replaceRuntimeModule(compiler: webpack.Compiler) {
    const nmrp = new webpack.NormalModuleReplacementPlugin(
      /story-store-data\.js$/,
      (resource: any) => {
        //webpack 4 or webpack 5
        const plugins = resource.loaders || resource.createData?.loaders;
        if (plugins) {
          plugins.push({
            loader: path.join(__dirname, 'runtimeLoader.js'),
            options: JSON.stringify({
              compilationHash: this.compilationHash,
            }),
          });
        }
      },
    );
    nmrp.apply(compiler);
  }

  private async replaceSource(compilation: webpack.Compilation, file: string) {
    const placeholder = `__COMPILATION_HASH__${this.compilationHash}`;
    const source = compilation.assets[file];
    const sources = webpack.sources || require('webpack-sources');
    const placeholderPos = source.source().indexOf(placeholder);
    if (placeholderPos > -1) {
      const store = await getSerializedStore();
      const newContent = this.options.escapeOutput
        ? jsStringEscape(store)
        : store;
      const newSource = new sources.ReplaceSource(source, file);
      newSource.replace(
        placeholderPos,
        placeholderPos + placeholder.length - 1,
        newContent,
        file,
      );
      compilation.assets[file] = newSource;
    }
  }
}

module.exports = LoaderPlugin;
