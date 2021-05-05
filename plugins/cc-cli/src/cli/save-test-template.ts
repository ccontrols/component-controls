import path from 'path';
import fs from 'fs';
import { CliOptions, getTestFolder } from './utils';
import { TemplateFunction, TemplateOptions } from '../utils';
import { saveDataTemplate } from './save-data-template';

/**
 * save a template file based on options
 * @param options - the rendering and file options
 * @param templateFn - a selected templating function
 * @param dataImports - the data import parameters - ie file to import and stories that have data values associated
 * @returns a promise, since the function is async
 */
export const saveTemplate = async <P extends TemplateOptions>(
  options: CliOptions<P>,
  templateFn: TemplateFunction<P>,
): Promise<void> => {
  const testFolder = getTestFolder(options);
  if (!testFolder) {
    return undefined;
  }
  const { test, overwrite, ...rest } = options;

  const testFilePath = path.resolve(testFolder, test);

  if (!overwrite && fs.existsSync(testFilePath)) {
    console.warn(
      `${testFilePath} already exists and you have chosen not to overwrite it.`,
    );
    return;
  }
  const dataTemplate = await saveDataTemplate(options);

  const content = await templateFn(
    ({
      output: testFolder,
      ...rest,
    } as unknown) as P,
    dataTemplate,
  );
  if (content) {
    if (!fs.existsSync(testFolder)) {
      fs.mkdirSync(testFolder);
    }
    fs.writeFileSync(testFilePath, content, 'utf8');
  }
};
