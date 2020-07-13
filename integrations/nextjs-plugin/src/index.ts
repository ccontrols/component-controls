import * as path from 'path';
import {
  compile,
  watch,
  CompileProps,
} from '@component-controls/webpack-compile';
import { LoadingStore } from '@component-controls/loader';
import { LoaderOptions } from './types';

const defaultPresets = ['react', 'react-docgen-typescript'];

let store: LoadingStore | undefined = undefined;
export default (options: LoaderOptions) => (
  phase: string,
  { defaultConfig }: any,
) => {
  if (!store) {
    const config: CompileProps = {
      webPack: options.webpack,
      presets: defaultPresets,
      configPath: options.configPath,
      outputFolder:
        options.outputFolder ||
        `${path.join(process.cwd(), defaultConfig.distDir)}`,
    };
    const compiler =
      process.env.NODE_ENV === 'development' ? watch(config) : compile(config);
    compiler.then(({ store: newStore }) => {
      store = newStore;
      if (store) {
        console.log('store found');
      }
    });
  }
  return options;
};
