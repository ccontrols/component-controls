import path from 'path';
import fs from 'fs';
import { CliOptions } from './types';
import { TemplateFunction, TemplateOptions } from '../types';

export const saveTemplate = <P extends TemplateOptions>(
  options: CliOptions<P>,
  templateFn: TemplateFunction<P>,
): void => {
  const { test, overwrite, output, ...rest } = options;

  let testFolder = output as string;

  if (!path.isAbsolute(testFolder)) {
    testFolder = path.resolve(process.cwd(), testFolder);
  }

  if (!fs.existsSync(testFolder)) {
    fs.mkdirSync(testFolder);
  }

  const testFilePath = path.resolve(testFolder, test);

  if (!overwrite && fs.existsSync(testFilePath)) {
    console.warn(
      `${testFilePath} already exists and you have chosen not to overwrite it.`,
    );
    return;
  }
  const content = templateFn(({
    output: testFolder,
    ...rest,
  } as unknown) as P);
  fs.writeFileSync(testFilePath, content, 'utf8');
};
