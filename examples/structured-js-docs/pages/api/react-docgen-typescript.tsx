import { NextApiRequest, NextApiResponse } from 'next';
import { withCompilerOptions, ParserOptions } from 'react-docgen-typescript';
import { getTypescriptConfig } from '@component-controls/typescript-config';
import { createTempFile } from '../../src/api/create-temp-file';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { code, config } = req.query as { code?: string; config?: string };
  const options = {
    ...(config ? JSON.parse(config) : undefined),
  };
  const { lang = 'typescript' } = options?.tsOptions || {};
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
        const tsOptions = {
          ...getTypescriptConfig(fileName, options.tsOptions),
        };
        const parser = withCompilerOptions(tsOptions, parserOptions);
        try {
          const docgenInfo = parser.parse(fileName);
          return { ...acc, ...docgenInfo };
        } catch (e) {
          __errors.push(e);
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
