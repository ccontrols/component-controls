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
export default ({
  configPath,
  outputFolder,
  presets,
  webpack,
  ...rest
}: LoaderOptions) => () => {
  if (!store) {
    const config: CompileProps = {
      webPack: webpack,
      presets: presets || defaultPresets,
      configPath: configPath,
      outputFolder: outputFolder || `${path.join(process.cwd(), 'public')}`,
    };
    const compiler =
      process.env.NODE_ENV === 'development' ? watch(config) : compile(config);
    compiler.then(({ store: newStore }) => {
      store = newStore;
    });
  }
  return rest;
};
