import * as ts from 'typescript';
import { NextApiRequest, NextApiResponse } from 'next';
import { getTypescriptConfig } from '@component-controls/typescript-config';
import { Application, TypeDocReader, TSConfigReader } from 'typedoc';
import { createTempFile } from '../../src/api/create-temp-file';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { code, tsoptions } = req.query as {
    code?: string;
    tsoptions?: string;
  };
  const options = {
    ...(tsoptions ? JSON.parse(tsoptions) : undefined),
  };
  const { lang = 'typescript' } = options?.tsOptions || {};
  const extension = lang === 'javascript' ? 'jsx' : 'tsx';

  const app = new Application();
  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());
  const __errors: any[] = [];
  const host = ts.createCompilerHost({});
  const createHash = host.createHash;
  if (createHash) {
    const result = createTempFile(
      extension,
      fileNames => {
        return fileNames.reduce((acc, fileName) => {
          const tsOptions = getTypescriptConfig(fileName, options, true);
          const tsconfig = createHash(Math.random().toString()) + '.json';

          ts.sys.writeFile(
            tsconfig,
            JSON.stringify({
              compilerOptions: tsOptions,
            }),
          );
          try {
            app.bootstrap({ tsconfig });
            try {
              const program = ts.createProgram({
                rootNames: app.options.getFileNames(),
                options: app.options.getCompilerOptions(),
                projectReferences: app.options.getProjectReferences(),
              });
              app.options.setValue(
                'entryPoints',
                app.expandInputFiles([fileName]),
              );
              const reflection = app.convert();
              const serialized = app.serializer.toObject(reflection, program);
              return { ...acc, ...serialized };
            } catch (e) {
              __errors.push(e.toString());
              return acc;
            }
          } finally {
            if (ts.sys.deleteFile) {
              ts.sys.deleteFile(tsconfig);
            }
          }
        }, {});
      },
      code,
    );
    if (__errors.length) {
      result.__errors = __errors;
    }
    res.status(200).json(result);
  } else {
    res.status(200).json({ __errors: 'Can not locate host.createHash' });
  }
};
