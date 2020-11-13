import prettier from 'prettier';
import parserBabel from 'prettier/parser-babylon';
import { PrettierOptions } from '../types';

export const prettify = async (
  code: string,
  options: PrettierOptions | false,
  filePath?: string,
): Promise<string> => {
  if (options !== false) {
    const { resolveConfigOptions, ...otherOptions } = options || {};
    let allPrettierOptions: prettier.Options | undefined = otherOptions as any;
    if (filePath) {
      const userOptions = await prettier.resolveConfig(
        filePath,
        resolveConfigOptions,
      );
      allPrettierOptions = { ...userOptions, ...allPrettierOptions };
    }
    try {
      return prettier.format(code, {
        parser: 'typescript',
        plugins: [parserBabel],
        ...allPrettierOptions,
      });
    } catch (e) {
      return code;
    }
  } else {
    return code || '';
  }
};
