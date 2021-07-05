import { NextApiRequest, NextApiResponse } from 'next';
import { withCompilerOptions, ParserOptions } from 'react-docgen-typescript';
import { getTypescriptConfig } from '@component-controls/typescript-config';
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
  const { lang = 'typescript' } = options || {};
  const extension = lang === 'javascript' ? 'jsx' : 'tsx';
  const parserOptions: ParserOptions = {
    shouldIncludePropTagMap: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    savePropValueAsString: false,
  };
  const __errors: any[] = [];
  const result = createTempFile(
    extension,
    fileNames => {
      return fileNames.reduce((acc, fileName) => {
        const tsOptions = getTypescriptConfig(fileName, options);
        const parser = withCompilerOptions(tsOptions || {}, parserOptions);
        try {
          const docgenInfo = parser.parse(fileName);
          return { ...acc, ...docgenInfo };
        } catch (e) {
          __errors.push(e.toString());
          return acc;
        }
      }, {});
    },
    code,
  );
  if (__errors.length) {
    result.__errors = __errors;
  }
  res.json(result);
};
