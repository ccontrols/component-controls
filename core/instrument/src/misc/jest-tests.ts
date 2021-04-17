import path from 'path';
import { JestConfig } from '@component-controls/jest-extract';
import {
  runProjectTests,
  findJestConfig,
  getRelatedTests,
} from '@component-controls/jest-extract';
import { Components, JestTests } from '@component-controls/core';

/**
 * Separates the files into projects and runs jest tests
 * @param files key filePathName pair of all files to test
 * @param options jest runCLI options
 * @returns return key/value pairs with test results and coverage associated with each file
 */
export const extractTests = async (
  files: Record<string, string>,
  options?: JestConfig,
): Promise<Record<string, JestTests>> => {
  const tests = Object.keys(files).reduce(
    (acc: Record<string, { key: string; files: string[] }[]>, key) => {
      const component = files[key];
      const projectFolder = findJestConfig(component);
      if (!acc[projectFolder]) {
        acc[projectFolder] = [];
      }
      acc[projectFolder].push({ key, files: [component] });
      return acc;
    },

    {},
  );
  const projects = Object.keys(tests);
  const results: Record<string, JestTests> = {};
  for (const project of projects) {
    const files = tests[project].reduce(
      (
        acc: {
          testFiles: Record<string, string>;
          coverageFiles: Record<string, string>;
        },
        component,
      ) => {
        results[component.key] = { results: [], coverage: {} };
        component.files.forEach(filePath =>
          getRelatedTests(filePath).forEach(
            f =>
              (acc.testFiles[`.${path.sep}${path.relative(project, f)}`] =
                component.key),
          ),
        );
        component.files.forEach(filePath => {
          acc.coverageFiles[`.${path.sep}${path.relative(project, filePath)}`] =
            component.key;
        });
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
      { testFiles: {}, coverageFiles: {} },
    );
    if (Object.keys(files.testFiles).length) {
      const testResults = await runProjectTests(
        Object.keys(files.testFiles),
        project,
        {
          collectCoverageOnlyFrom: Object.keys(files.coverageFiles),
          ...options,
        },
      );
      Object.keys(testResults.coverage).forEach(covFile => {
        const componentKey = files.coverageFiles[`.${path.sep}${covFile}`];
        if (componentKey) {
          results[componentKey].coverage[covFile] =
            testResults.coverage[covFile];
        }
      });
      testResults.results.forEach(r => {
        const componentKey = files.testFiles[`.${path.sep}${r.testFilePath}`];
        if (componentKey) {
          results[componentKey].results.push(r);
        }
      });
    }
  }
  return results;
};

/**
 * runs the tests associated with the components and assign to field "jest"
 * @param components key/Component list
 * @param options jest runCLI options
 */
export const extractComponentTests = async (
  components: Components,
  options?: JestConfig,
): Promise<void> => {
  const mapped = Object.keys(components).reduce(
    (acc: Record<string, string>, key) => ({
      ...acc,
      [key]: components[key].request as string,
    }),
    {},
  );
  const extracted = await extractTests(mapped, options);
  Object.keys(extracted).forEach(key => {
    if (components[key]) {
      components[key].jest = extracted[key];
    }
  });
};
