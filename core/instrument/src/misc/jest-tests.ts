import path from 'path';
import fs from 'fs';
import {
  JestConfig,
  runProjectTests,
  findJestConfig,
  getRelatedTests,
} from '@component-controls/jest-extract';
import { log } from '@component-controls/logger';
import { resolveSnapshotFile } from '@component-controls/core/node-utils';
import { JestTests } from '@component-controls/core';
import { CachedFileResource } from './chached-file';

type TestCumulators = {
  testFiles: string[];
  coverageFiles: string[];
  snapshotFiles: string[];
};

const addCumulators = (
  acc: TestCumulators,
  filePath: string,
  inCoverage: boolean,
) => {
  const testFiles = getRelatedTests(filePath);
  testFiles.forEach(f => {
    if (!acc.testFiles.includes(f)) {
      acc.testFiles.push(f);
    }
    const snapshotFile = resolveSnapshotFile(f);
    if (
      !acc.snapshotFiles.includes(snapshotFile) &&
      fs.existsSync(snapshotFile)
    ) {
      acc.snapshotFiles.push(snapshotFile);
    }
  });
  if (inCoverage && !acc.coverageFiles.includes(filePath)) {
    acc.coverageFiles.push(filePath);
  }
  return acc;
};
/**
 * Separates the files into projects and runs jest tests
 * @param documentPath full path to the document/story
 * @param files key filePathName pair of all files to test
 * @param options jest runCLI options
 * @returns return key/value pairs with test results and coverage associated with each file
 */
export const extractTests = async (
  documentPath: string,
  files: string[],
  options?: JestConfig,
): Promise<JestTests | undefined> => {
  if (!files.length) {
    return undefined;
  }
  const tests = files.reduce(
    (acc: TestCumulators, file) => {
      addCumulators(acc, file, true);
      return acc;
    },
    addCumulators(
      {
        testFiles: [],
        coverageFiles: [],
        snapshotFiles: [],
      },
      documentPath,
      false,
    ),
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
    const projectFolder = findJestConfig(tests.testFiles[0]);
    log('jest tests', tests.testFiles[0], [229, 232, 211]);
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
