import { ReplaceSource } from 'webpack-sources';
import * as path from 'path';
import * as webpack from 'webpack';
import { createHash } from 'crypto';
import { store } from './store';

class LoaderPlugin {
  public static pluginName = 'component-controls-loader-plugin';
  private readonly compilationHash: string;

  constructor() {
    const hash = createHash('md5')
      .update(new Date().getTime().toString())
      .digest('hex');
    this.compilationHash = `__${hash.substr(0, 6)}__`;
  }

  apply(compiler: webpack.Compiler) {
    this.replaceRuntimeModule(compiler);
    compiler.hooks.compilation.tap(LoaderPlugin.pluginName, compilation => {
      compilation.hooks.optimizeChunkAssets.tap(
        LoaderPlugin.pluginName,
        chunks => {
          chunks.forEach(chunk => {
            chunk.files
              .filter(fileName => fileName.endsWith('.js'))
              .forEach(file => {
                this.replaceSource(compilation, file);
              });
          });
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
            options: JSON.stringify({ compilationHash: this.compilationHash }),
          });
        }
      },
    );
    nmrp.apply(compiler);
  }

  private replaceSource(
    compilation: webpack.compilation.Compilation,
    file: string,
  ) {
    const placeholder = `__COMPILATION_HASH__${this.compilationHash}`;
    const source = compilation.assets[file];
    const placeholderPos = source.source().indexOf(placeholder);
    if (placeholderPos > -1) {
      const newContent = JSON.stringify(store);
      const newSource = new ReplaceSource(source, file);
      newSource.replace(
        placeholderPos,
        placeholderPos + placeholder.length - 1,
        newContent,
      );
      compilation.assets[file] = newSource;
    }
  }
}

module.exports = LoaderPlugin;
