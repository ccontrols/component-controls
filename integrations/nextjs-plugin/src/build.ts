import * as path from 'path';
import {
  compile,
  watch,
  CompileProps,
} from '@component-controls/webpack-compile';
import { LoaderOptions } from './types';

const defaultPresets = ['react', 'react-docgen-typescript'];

let builtStarted = false;
export default ({
  configPath,
  outputFolder,
  presets,
  webpack,
  ...rest
}: LoaderOptions) => (phase: string) => {
  if (phase !== 'phase-export' && !builtStarted) {
    builtStarted = true;
    const config: CompileProps = {
      webPack: webpack,
      presets: presets || defaultPresets,
      configPath: configPath,
      outputFolder: outputFolder || `${path.join(process.cwd(), 'public')}`,
    };
    const compiler =
      process.env.NODE_ENV === 'development' ? watch(config) : compile(config);
    compiler.then(() => {
      //store = newStore;
    });
  }
  return rest;
};
