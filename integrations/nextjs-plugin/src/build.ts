import path from 'path';
import { compile, watch } from '@component-controls/webpack-compile';
import { CompileProps } from '@component-controls/webpack-configs';

const defaultPresets = ['react', 'react-docgen-typescript'];

export default ({
  bundleName,
  configPath,
  presets,
  staticFolder,
  webPack,
  ...rest
}: CompileProps) => (phase: string, nextConfig: any) => {
  return {
    /**
     * we need some async function, to make sure the compilation process is completed
     */
    async headers() {
      const { defaultConfig } = nextConfig;
      const userProps: CompileProps = {
        bundleName,
        configPath,
        webPack,
      };
      const options: CompileProps = {
        presets: presets || defaultPresets,
        distFolder: path.resolve(__dirname),
        staticFolder:
          staticFolder || path.join(process.cwd(), defaultConfig.distDir),
        ...userProps,
      };

      const compiler =
        process.env.NODE_ENV === 'development'
          ? watch(options)
          : compile(options);
      await compiler;

      return [];
    },
    ...rest,
  };
};
