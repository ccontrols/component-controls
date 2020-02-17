import { ReplaceSource } from 'webpack-sources';
import { toId, storyNameFromExport } from '@storybook/csf';
import { Story, StoriesGroup } from '@component-controls/instrument';
import jsStringEscape from 'js-string-escape';
import * as path from 'path';
import * as webpack from 'webpack';
import { createHash } from 'crypto';
import { StoryStore } from './types';
import store from './store';

class StoriesInjectPlugin {
  public static pluginName = 'stories-inject-plugin';
  private readonly compilationHash: string;

  constructor() {
    const hash = createHash('md5')
      .update(new Date().getTime().toString())
      .digest('hex');
    this.compilationHash = `__${hash.substr(0, 6)}__`;
  }

  apply(compiler: webpack.Compiler) {
    this.replaceRuntimeModule(compiler);
    compiler.hooks.compilation.tap(
      StoriesInjectPlugin.pluginName,
      compilation => {
        compilation.hooks.optimizeChunkAssets.tap(
          StoriesInjectPlugin.pluginName,
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
      },
    );
  }

  private replaceRuntimeModule(compiler: any) {
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
    const placeholder = `${this.compilationHash}INJECTED_STORIES__`;
    const source = compilation.assets[file];
    const placeholderPos = source.source().indexOf(placeholder);
    if (placeholderPos > -1) {
      const stories: StoryStore = {};
      store.forEach((kind: StoriesGroup) => {
        Object.keys(kind.stories).forEach(key => {
          const story: Story = kind.stories[key];
          if (kind.title && story.name) {
            stories[toId(kind.title, storyNameFromExport(story.name))] = {
              ...story,
              kind: kind.title,
            };
          }
        });
      });
      const newContent = jsStringEscape(JSON.stringify(stories));
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

module.exports = StoriesInjectPlugin;
