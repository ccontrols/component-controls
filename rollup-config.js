import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';

const defaultExternal = id =>
  !id.startsWith('\0') &&
  !id.startsWith('~') &&
  !id.startsWith('.') &&
  !id.startsWith(process.platform === 'win32' ? process.cwd() : '/');

const createOutput = (dir = 'dist', defaultOpts) => {
  const { external, output, plugins = [], filename } = defaultOpts;

  const defaultPlugins = [
    resolve({
      mainFields: ['module', 'main'],
      browser: true,
      preferBuiltins: false,
    }),
    commonjs({
      include: /\/node_modules\//,
    }),
    json(),
    image(),
    typescript({
      typescript: require('typescript'),
      rollupCommonJSResolveHack: true,
    }),
  ];

  const outputs = [
    {
      dir,
      format: 'cjs',
      chunkFileNames: filename ? `${filename}.js` : `[name].js`,
      entryFileNames: filename ? `${filename}.js` : `[name].js`,
      ...output,
    },
    {
      dir,
      format: 'esm',
      chunkFileNames: filename ? `${filename}.esm.js` : `[name].esm.js`,
      entryFileNames: filename ? `${filename}.esm.js` : `[name].esm.js`,
      ...output,
    },
  ];

  return {
    ...defaultOpts,
    external: external || defaultExternal,
    plugins: defaultPlugins.filter(Boolean).concat(plugins),
    output: outputs,
  };
};

export function config(opts) {
  const inputs = Array.isArray(opts) ? opts : [opts];
  return inputs.map(({ dest: dir, ...opts }) => createOutput(dir, opts));
}
