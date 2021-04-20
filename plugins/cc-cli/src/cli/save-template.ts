import path from 'path';
import fs from 'fs';
import { CliOptions } from './types';
import { TemplateFunction, TemplateOptions } from '../types';

/**
 * save a template file based on options
 * @param options - the rendering and file options
 * @param templateFn - a selected templating function
 * @returns a promise, since the function is async
 */
export const saveTemplate = async <P extends TemplateOptions>(
  options: CliOptions<P>,
  templateFn: TemplateFunction<P>,
): Promise<void> => {
  const { test, overwrite, output, include, exclude, ...rest } = options;

  //check if the test file name is to be included.
  const testName = test.split('.')[0];
  if (include && !include.includes(testName)) {
    return;
  }
  if (exclude && exclude.includes(testName)) {
    return;
  }

  let testFolder = output as string;

  if (!path.isAbsolute(testFolder)) {
    testFolder = path.resolve(process.cwd(), testFolder);
  }

  const testFilePath = path.resolve(testFolder, test);

  if (!overwrite && fs.existsSync(testFilePath)) {
    console.warn(
      `${testFilePath} already exists and you have chosen not to overwrite it.`,
    );
    return;
  }
  const content = await templateFn(({
    output: testFolder,
    ...rest,
  } as unknown) as P);
  if (content) {
    if (!fs.existsSync(testFolder)) {
      fs.mkdirSync(testFolder);
    }
    fs.writeFileSync(testFilePath, content, 'utf8');
  }
};
