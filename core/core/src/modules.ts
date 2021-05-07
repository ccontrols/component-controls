import path from 'path';
import * as ts from 'typescript';

export const dynamicRequire = (filePath: string): any => {
  const fileParts = filePath.split('.');
  const ext = fileParts.pop()?.toLowerCase() || 'js';
  if (['ts', 'tsx'].indexOf(ext) !== -1) {
    const configPath = ts.findConfigFile(
      path.dirname(filePath),
      ts.sys.fileExists,
    );
    const config = configPath
      ? ts.readConfigFile(configPath, ts.sys.readFile)
      : {
          config: {
            compilerOptions: {
              allowJs: true,
              jsx: ts.JsxEmit.ReactJSX,
              module: ts.ModuleKind.CommonJS,
            },
          },
        };

    const program = ts.createProgram([filePath], config.config);
    program.emit();
    const jsFilePath = `${fileParts.join('.')}.js`;
    try {
      return require('esm')(module)(jsFilePath);
    } finally {
      //fs.unlinkSync(tmpFilePath);
    }
  }

  return require('esm')(module)(filePath);
};
