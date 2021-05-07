import path from 'path';
import fs from 'fs';
import { dynamicRequire } from '@component-controls/core/node-utils';
import { CliOptions, getTestFolder } from './utils';
import { TemplateOptions, DataImportOptions, relativeImport } from '../utils';
import { createDataTemplate } from '../data-templates/data-template';

/**
 * save a data template file based on options
 * @param options - the rendering and file options
 */
export const saveDataTemplate = async <P extends TemplateOptions>(
  options: CliOptions<P>,
): Promise<DataImportOptions | undefined> => {
  const testFolder = getTestFolder(options);
  if (!testFolder) {
    return undefined;
  }
  const { test, overwrite } = options;
  const dataName = test
    .split('.')
    .map((e, i) => (i === 1 ? 'data' : e))
    .join('.');
  const filePath = path.resolve(testFolder, dataName);
  let existing: Record<string, any> | undefined = undefined;
  if (fs.existsSync(filePath)) {
    if (overwrite) {
      //load existing data file

      existing = dynamicRequire(filePath);
      if (
        !existing ||
        (typeof existing === 'object' && Object.keys(existing).length === 0)
      ) {
        existing = require(filePath);
      }
    } else {
      return undefined;
    }
  }
  const dataTemplate = await createDataTemplate(options, existing);
  if (dataTemplate) {
    if (!fs.existsSync(testFolder)) {
      fs.mkdirSync(testFolder);
    }
    fs.writeFileSync(filePath, dataTemplate.content, 'utf8');
    return {
      data: dataTemplate.data,
      filePath: relativeImport(testFolder, filePath),
    };
  }
  return undefined;
};
