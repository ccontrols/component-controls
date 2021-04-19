import path from 'path';
import { JestConfig } from '@component-controls/jest-extract';
import {
  runProjectTests,
  findJestConfig,
  getRelatedTests,
} from '@component-controls/jest-extract';
import { JestTests } from '@component-controls/core';

/**
 * Separates the files into projects and runs jest tests
 * @param files key filePathName pair of all files to test
 * @param options jest runCLI options
 * @returns return key/value pairs with test results and coverage associated with each file
 */
export const extractTests = async (
  files: string[],
  options?: JestConfig,
): Promise<JestTests | undefined> => {
  if (!files.length) {
    return undefined;
  }
  const projectFolder = findJestConfig(files[0]);
  const tests = files.reduce(
    (
      acc: {
        testFiles: string[];
        coverageFiles: string[];
      },
      component,
    ) => {
      acc.testFiles.push(
        ...getRelatedTests(component).map(
          f => `.${path.sep}${path.relative(projectFolder, f)}`,
        ),
      );
      acc.coverageFiles.push(
        `.${path.sep}${path.relative(projectFolder, component)}`,
      );
      /* const dateModified = fs.statSync(projectFolder).mtime;

      const fileHash = createHash('md5')
        .update(dateModified.toString())
        .update(projectFolder)
        .digest('hex');
      const cached = new CachedFileResource<JestResults>(
        'jest-tests',
        `${componentFilePath}-${fileHash}`,
        componentFilePath,
      );
      const cachedTest = cached.get();
      if (cachedTest) {
        results.push({
          testFileName: path.relative(fileDir, testFile),
          testResults: cachedTest.testResults,
          coverage: cachedTest.coverage,
        });
      } */
      return acc;
    },
    { testFiles: [], coverageFiles: [] },
  );
  if (tests.testFiles.length) {
    const testResults = await runProjectTests(tests.testFiles, projectFolder, {
      collectCoverageOnlyFrom: tests.coverageFiles,
      ...options,
    });
    return testResults;
  }
  return undefined;
};
