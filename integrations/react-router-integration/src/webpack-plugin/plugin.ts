import webpack from 'webpack';
const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin');
export interface HTMLInjectStyleOptions {
  styles?: string;
}
export class HTMLInjectStylePlugin {
  public static pluginName = 'html-inject-style-webpack-plugin';
  private readonly options: HTMLInjectStyleOptions;

  constructor(options: HTMLInjectStyleOptions) {
    this.options = options;
  }

  apply(compiler: webpack.Compiler): void {
    if (this.options.styles) {
      compiler.hooks.compilation.tap(
        HTMLInjectStylePlugin.pluginName,
        compilation => {
          if (HtmlWebpackPlugin && HtmlWebpackPlugin.getHooks) {
            const hooks = HtmlWebpackPlugin.getHooks(compilation);
            hooks.alterAssetTagGroups.tapAsync(
              HTMLInjectStylePlugin.pluginName,
              (data: any, cb: any) => {
                console.log('APPLY tapAsync');
                data.headTags.push({
                  tagName: 'style',
                  innerHTML: this.options.styles,
                });
                cb(null, data);
              },
            );
          } else {
            throw new Error(
              'Cannot find HtmlWebpackPlugin hooks to inject css styles',
            );
          }
        },
      );
    }
  }
}

export default HTMLInjectStylePlugin;
