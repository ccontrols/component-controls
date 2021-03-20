import fs from 'fs';
import path from 'path';
import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { AssertionResult, AggregatedResult } from '@jest/test-result';
import { FileCoverage, CoverageSummary } from 'istanbul-lib-coverage';

export const getUniqueFolder = (folder: string): string => {
  let fnId = 1;
  const fName = () => path.resolve(folder, `__jest-${fnId}`);
  while (fs.existsSync(fName())) {
    fnId += 1;
  }
  const folderName = fName();
  fs.mkdirSync(folderName);
  return folderName;
};
export interface JestResults {
  /**
   * test results
   */
  testResults: AssertionResult[];
  /**
   * coverage summary data, by file
   */
  coverage: Record<string, CoverageSummary>;
}
export const run = async (
  testFilePath: string,
  jestConfig?: Partial<Config.Argv>,
): Promise<JestResults | undefined> => {
  const testFolder = path.dirname(testFilePath);
  const testFile = path.basename(testFilePath);
  const configFolder = getUniqueFolder(testFolder);
  const configFile = path.resolve(configFolder, 'jest.config.js');
  fs.writeFileSync(
    configFile,
    `module.exports = ${JSON.stringify(
      {
        rootDir: '..',
        preset: 'ts-jest',
        transform: {
          '^.+\\.(ts|tsx)?$': 'ts-jest',
          '^.+\\.(js|jsx)$': 'babel-jest',
        },
        collectCoverageFrom: [
          '**/*.{js,jsx,tsx,ts}',
          '!**/jest.config.js',
          '!**/*.{test,spec}.{js,ts}',
        ],
      },
      null,
      2,
    )}
  `,
    'utf8',
  );
  let runResults: {
    results: AggregatedResult;
    globalConfig: Config.GlobalConfig;
  };
  try {
    runResults = await runCLI(
      {
        $0: testFile,
        silent: true,
        verbose: false,
        reporters: [],
        coverage: true,
        coverageReporters: ['none'],
        watchman: false,
        ...jestConfig,
      } as Config.Argv,
      [configFolder],
    );
  } catch (err) {
    console.error(err);
    return undefined;
  } finally {
    fs.unlinkSync(configFile);
    fs.rmdirSync(configFolder, { recursive: true });
  }
  const cov = runResults.results.coverageMap;
  const result: JestResults = {
    testResults: runResults.results.testResults[0].testResults,
    coverage: {},
  };
  if (cov) {
    Object.keys(cov.data).forEach(file => {
      const fc = cov.data[file] as FileCoverage;
      result.coverage[path.relative(testFolder, file)] = fc.toSummary();
    });
  }

  return result;
};
