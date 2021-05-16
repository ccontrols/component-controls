import path from 'path';
import fs from 'fs';
import {
  JestConfig,
  runProjectTests,
  findJestConfig,
} from '@component-controls/jest-extract';
import { log } from '@component-controls/logger';
import { resolveSnapshotFile } from '@component-controls/core/node-utils';
import { JestTests } from '@component-controls/core';
import { CachedFileResource } from './chached-file';

/**
 * Separates the files into projects and runs jest tests
 * @param testFiles all the test files associated with the component
 * @param coverageFiles all the files that should be included in the coverage report
 * @param trackFiles are files ie data driven testing and the documentation file, that will trigger a cache refresh
 * @param options jest runCLI options
 * @returns return key/value pairs with test results and coverage associated with each file
 */
export const extractTests = async (
  testFiles: string[],
  coverageFiles: string[],
  trackFiles: string[],
  options?: JestConfig,
): Promise<JestTests | undefined> => {
  if (!testFiles.length) {
    return undefined;
  }
  const snapshotFiles = testFiles
    .map(f => {
      const resolved = resolveSnapshotFile(f);
      if (fs.existsSync(resolved)) {
        return resolved;
      }
      return '';
    })
    .filter(f => f);
  const cached = new CachedFileResource<JestTests>('jest-tests', testFiles[0], [
    ...testFiles,
    ...coverageFiles,
    ...snapshotFiles,
    ...trackFiles,
  ]);
  const cachedResults = cached.get();
  if (cachedResults) {
    return cachedResults;
  }
  const projectFolder = findJestConfig(testFiles[0]);
  log('jest tests', testFiles[0], [229, 232, 211]);
  const testResults = await runProjectTests({
    testFiles: testFiles.map(
      f => `.${path.sep}${path.relative(projectFolder, f)}`,
    ),
    projectFolder,
    relativeFolder: path.dirname(testFiles[0]),
    options: {
      ...options,
      collectCoverageOnlyFrom: coverageFiles.map(
        f => `.${path.sep}${path.relative(projectFolder, f)}`,
      ),
    },
  });
  cached.set(testResults);
  return testResults;
};
