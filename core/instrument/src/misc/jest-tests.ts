import path from 'path';
import fs from 'fs';
import { createHash } from 'crypto';
import { JestTests } from '@component-controls/core';
import { JestConfig } from '@component-controls/jest-extract';
import {
  JestResults,
  runTests,
  getRelatedTests,
} from '@component-controls/jest-extract';
import { CachedFileResource } from './chached-file';

export const extractJestTests = async (
  filePath: string,
  options?: JestConfig,
): Promise<JestTests | undefined> => {
  const testFiles = getRelatedTests(filePath);
  const dateModified = fs.statSync(filePath).mtime;

  const fileDir = path.dirname(filePath);
  if (testFiles.length) {
    const results: JestTests = [];
    for (const testFile of testFiles) {
      const fileHash = createHash('md5')
        .update(dateModified.toString())
        .update(filePath)
        .digest('hex');

      const cached = new CachedFileResource<JestResults>(
        'jest-tests',
        `${testFile}-${fileHash}`,
        testFile,
      );
      const cachedTest = cached.get();
      if (cachedTest) {
        results.push({
          testFileName: path.relative(fileDir, testFile),
          testResults: cachedTest.testResults,
          coverage: cachedTest.coverage,
        });
      }
      const result = await runTests(testFile, options);
      if (result) {
        cached.set(result);
        results.push({
          testFileName: path.relative(fileDir, testFile),
          testResults: result.testResults,
          coverage: result.coverage,
        });
      }
    }
    return results.length ? results : undefined;
  }
  return undefined;
};
