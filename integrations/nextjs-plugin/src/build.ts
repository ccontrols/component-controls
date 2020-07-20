import path from 'path';
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
  presets,
  staticFolder,
  webPack,
  ...rest
}: CompileProps) => (phase: string, nextConfig: any) => {
  const { defaultConfig } = nextConfig;
  const userProps: CompileProps = {
    bundleName,
    configPath,
    webPack,
  };
  const options: CompileProps = {
    presets: presets || defaultPresets,
    distFolder: path.resolve(__dirname, '..'),
    staticFolder:
      staticFolder || path.join(process.cwd(), defaultConfig.distDir),
    ...userProps,
  };

  if (phase !== 'phase-export' && !builtStarted) {
    builtStarted = true;
    const compiler =
      process.env.NODE_ENV === 'development'
        ? watch(options)
        : compile(options);
    compiler.then(() => {});
  }
  return {
    ...rest,
  };
};
