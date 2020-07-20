import path from 'path';
import fs from 'fs';
import {
  compile,
  watch,
  CompileProps,
} from '@component-controls/webpack-compile';
const defaultPresets = ['react', 'react-docgen-typescript'];

let builtStarted = false;
export default ({
  bundleName,
  configPath,
  distFolder,
  presets,
  staticFolder,
  webPack,
  ...rest
}: CompileProps) => (phase: string, nextConfig: any) => {
  const { defaultConfig } = nextConfig;
  const userProps: CompileProps = {
    bundleName,
    configPath,
    staticFolder,
    webPack,
  };
  const options: CompileProps = {
    presets: presets || defaultPresets,
    distFolder: distFolder || path.join(process.cwd(), defaultConfig.distDir),
    ...userProps,
  };

  if (phase !== 'phase-export' && !builtStarted) {
    builtStarted = true;
    const compiler =
      process.env.NODE_ENV === 'development'
        ? watch(options)
        : compile(options);
    compiler.then(({ bundleName }) => {
      //temporary hack to send the bundle name to static props
      fs.writeFile(
        path.resolve(__dirname, './store.js'),
        `
const { HMRStore } = require('@component-controls/store');
const bundle = require("${bundleName}");
const store = new HMRStore(bundle);
exports.store = store;
`,
        err => {
          console.error(err);
        },
      );
    });
  }
  return {
    ...rest,
  };
};
