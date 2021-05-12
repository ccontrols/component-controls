import path from 'path';
import fs from 'fs';
import {
  dynamicRequire,
  relativeImport,
} from '@component-controls/core/node-utils';
import { getDataFile } from '@component-controls/instrument';

import { log } from '@component-controls/logger';
import { CliOptions, getTestFolder } from './utils';
import { TemplateOptions, DataImportOptions } from '../utils';
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
  const dataName = getDataFile(test);

  const filePath = path.resolve(testFolder, dataName);

  let existing: Record<string, any> | undefined = undefined;
  if (fs.existsSync(filePath)) {
    if (overwrite) {
      //load existing data file
      const loaded = dynamicRequire(filePath);
      existing = loaded.default || loaded;
    } else {
      return undefined;
    }
  }
  const dataTemplate = await createDataTemplate(options, existing);
  if (dataTemplate) {
    if (dataTemplate.isModified) {
      log('saving data', filePath, [184, 226, 255]);
      if (!fs.existsSync(testFolder)) {
        fs.mkdirSync(testFolder);
      }
      fs.writeFileSync(filePath, dataTemplate.content, 'utf8');
    }
    return {
      data: dataTemplate.data,
      filePath: relativeImport(testFolder, filePath),
    };
  }
  return undefined;
};
