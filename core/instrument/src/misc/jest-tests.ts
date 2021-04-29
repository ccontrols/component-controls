import path from 'path';
import fs from 'fs';
import {
  JestConfig,
  runProjectTests,
  findJestConfig,
  getRelatedTests,
} from '@component-controls/jest-extract';
import { resolveSnapshotFile } from '@component-controls/core/node-utils';
import { JestTests } from '@component-controls/core';
import { CachedFileResource } from './chached-file';

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
        snapshotFiles: string[];
      },
      file,
    ) => {
      const testFiles = getRelatedTests(file);
      acc.testFiles.push(...testFiles);
      testFiles.forEach(f => {
        const snapshotFile = resolveSnapshotFile(f);
        if (fs.existsSync(snapshotFile)) {
          acc.snapshotFiles.push(snapshotFile);
        }
      });
      if (!acc.coverageFiles.includes(file)) {
        acc.coverageFiles.push(file);
      }
      return acc;
    },
    { testFiles: [], coverageFiles: [], snapshotFiles: [] },
  );
  if (tests.testFiles.length) {
    const cached = new CachedFileResource<JestTests>('jest-tests', files[0], [
      ...tests.testFiles,
      ...tests.coverageFiles,
      ...tests.snapshotFiles,
      ...files,
    ]);
    const cachedResults = cached.get();
    if (cachedResults) {
      return cachedResults;
    }
    const testResults = await runProjectTests({
      testFiles: tests.testFiles.map(
        f => `.${path.sep}${path.relative(projectFolder, f)}`,
      ),
      projectFolder,
      relativeFolder: path.dirname(files[0]),
      options: {
        ...options,
        collectCoverageOnlyFrom: tests.coverageFiles.map(
          f => `.${path.sep}${path.relative(projectFolder, f)}`,
        ),
      },
    });
    cached.set(testResults);
    return testResults;
  }
  return undefined;
};
