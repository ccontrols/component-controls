import * as path from 'path';
import * as webpack from 'webpack';

class StoriesInjectPlugin {
  public static pluginName = 'stories-inject-plugin';
  apply(compiler: webpack.Compiler) {
    this.replaceRuntimeModule(compiler);
  }

  private replaceRuntimeModule(compiler: any) {
    const nmrp = new webpack.NormalModuleReplacementPlugin(
      /story-store-data\.js$/,
      (resource: any) => {
        if (resource.resource) {
          resource.loaders.push({
            loader: path.join(__dirname, 'runtimeLoader.js'),
          });
        }
      },
    );
    nmrp.apply(compiler);
  }  
}

module.exports = StoriesInjectPlugin;
