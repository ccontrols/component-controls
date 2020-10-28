import { ReplaceSource } from 'webpack-sources';
import * as path from 'path';
import * as webpack from 'webpack';
import { createHash } from 'crypto';
import jsStringEscape from 'js-string-escape';
import { getSerializedStore, initializeBuildOptions } from './store';

export interface LoaderPluginOptions {
  config?: string;
  escapeOutput?: boolean;
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
    initializeBuildOptions(compiler.context, this.options.config);
    this.replaceRuntimeModule(compiler);
    compiler.hooks.compilation.tap(LoaderPlugin.pluginName, compilation => {
      compilation.hooks.optimizeChunkAssets.tapPromise(
        LoaderPlugin.pluginName,
        async chunks => {
          const jsFiles: string[] = [];
          chunks.forEach(chunk => {
            chunk.files
              .filter(fileName => fileName.endsWith('.js'))
              .forEach(fileName => jsFiles.push(fileName));
          });
          for (let i = 0; i < jsFiles.length; i += 1) {
            await this.replaceSource(compilation, jsFiles[i]);
          }
        },
      );
    });
  }

  private replaceRuntimeModule(compiler: webpack.Compiler) {
    const nmrp = new webpack.NormalModuleReplacementPlugin(
      /story-store-data\.js$/,
      (resource: any) => {
        if (resource.resource) {
          resource.loaders.push({
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

  private async replaceSource(
    compilation: webpack.compilation.Compilation,
    file: string,
  ) {
    const placeholder = `__COMPILATION_HASH__${this.compilationHash}`;
    const source = compilation.assets[file];
    const placeholderPos = source.source().indexOf(placeholder);
    if (placeholderPos > -1) {
      const store = await getSerializedStore();
      const newContent = this.options.escapeOutput
        ? jsStringEscape(store)
        : store;
      const newSource = new ReplaceSource(source, file);
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
