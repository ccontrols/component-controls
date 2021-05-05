import path from 'path';
import { TemplateOptions } from '../utils';

export type CliOptions<P extends TemplateOptions = TemplateOptions> = {
  overwrite: boolean;
  test: string;
  /**
   * components to include
   */
  include?: string[];
  /**
   * components to exclude
   */
  exclude?: string[];
} & P;

export const getTestFolder = (options: CliOptions): string | undefined => {
  const { test, output, include, exclude } = options;
  //check if the test file name is to be included.
  const testName = test.split('.')[0];
  if (include && !include.includes(testName)) {
    return undefined;
  }
  if (exclude && exclude.includes(testName)) {
    return undefined;
  }
  let testFolder = output as string;

  if (!path.isAbsolute(testFolder)) {
    testFolder = path.resolve(process.cwd(), testFolder);
  }
  return testFolder;
};
