import * as ts from 'typescript';

/**
 * @param extension file extension
 * @param callback callback to do the parsing with temporaty file name
 * @param code source code to tbe analyzed
 * @returns the result of the callback function
 */
export const createTempFile = (
  extension: 'js' | 'ts' | 'jsx' | 'tsx',
  callback: (fileName: string[]) => any,
  code?: string,
): any => {
  const result = {};
  if (code) {
    const host = ts.createCompilerHost({});
    if (host.createHash) {
      const name = host.createHash(Math.random().toString()).substring(0, 12);
      const fileName = `${name}.${extension}`;

      ts.sys.writeFile(fileName, code);
      try {
        return callback([fileName]);
      } finally {
        if (ts.sys.deleteFile) {
          ts.sys.deleteFile(fileName);
        }
      }
    }
  }
  return result;
};
