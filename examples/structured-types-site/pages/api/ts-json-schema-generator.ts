import * as ts from 'typescript';
import { NextApiRequest, NextApiResponse } from 'next';
import { getTypescriptConfig } from '@component-controls/typescript-config';
import { createGenerator } from 'ts-json-schema-generator';
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
          const config = {
            path: fileName,
            tsconfig,
            type: '*',
          };
          ts.sys.writeFile(
            tsconfig,
            JSON.stringify({
              compilerOptions: tsOptions,
            }),
          );
          try {
            try {
              const generated = createGenerator(config).createSchema(
                config.type,
              );

              return { ...acc, ...generated };
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
