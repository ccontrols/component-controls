import path from 'path';
import fs from 'fs';
import * as resolve from 'resolve';
import { SourcePositions } from '@structured-types/api';
import { Component, Document } from '@component-controls/core';
import { error } from '@component-controls/logger';
import { getRelatedTests } from '@component-controls/jest-extract';
//import { analyze_components } from './analyze-component';
import { packageInfo } from '../misc/package-info';
import { readSourceFile } from '../misc/source-options';
import { LoadingDocStore, InstrumentOptions } from '../types';
import { getComponentProps } from '../misc/props-info';
import { getFileIinfo } from '../misc/file-info';
import { extractTests } from '../misc/jest-tests';
import { CachedFileResource } from '../misc/chached-file';
import { assignDocumentData } from '../misc/data-driven';

export const extractComponent = async (
  store: LoadingDocStore,
  extract: {
    name: string;
    filePath: string;
    from?: string;
    importedName?: string;
    loc?: SourcePositions;
  },
  storyFilePath: string,
  options?: InstrumentOptions,
): Promise<Component> => {
  const cached = new CachedFileResource<Component>(
    'component-info',
    `${extract.filePath}-${extract.name}`,
    storyFilePath,
  );
  // const result = cached.get();
  // if (result) {
  //   return result;
  // }
  const { components } = options || {};
  const {
    name: componentName,
    filePath: componentFile,
    from,
    importedName,
    loc,
  } = extract;
  let componentFileName = componentFile;
  if (!componentFileName && from) {
    try {
      componentFileName = require.resolve(from);
    } catch {
      const fromFileName = path.resolve(path.dirname(storyFilePath), from);
      if (fs.existsSync(fromFileName)) {
        componentFileName = fromFileName;
      }
    }
  }
  const filePath =
    components?.resolveFile && componentFileName
      ? components.resolveFile(componentName, componentFileName)
      : componentFileName;
  const component: Component = {
    name: componentName,
    fileName: filePath ? path.basename(filePath) : undefined,
    filePath,
  };
  if (from) {
    component.from = from;
  }

  if (importedName) {
    component.importedName = importedName;
  }
  if (filePath) {
    //const jsx = analyze_components(filePath, options);
    const saveSource = readSourceFile(
      components?.sourceFiles,
      undefined,
      componentName,
      filePath,
    );
    if (saveSource) {
      component.source = saveSource;
      component.loc = loc;
    }
  }

  await componentRelatedMetrics(store, storyFilePath, component, options);
  cached.set(component);
  return component;
};

/**
 * instrument related metrics for the component
 * @param store to retrieved stored packes info
 * @param filePath current document file path
 * @param component to be instrumented, will use component.request as the location
 * @param options - instrumentaion options
 */
const componentRelatedMetrics = async (
  store: LoadingDocStore,
  filePath: string,
  component: Component,
  options?: InstrumentOptions,
): Promise<void> => {
  const { components, resolver: resolveOptions, jest } = options || {};
  const componentPackage = await packageInfo(
    component.name,
    component.filePath,
    options?.components?.package,
  );
  if (componentPackage) {
    store.packages[componentPackage.fileHash] = componentPackage;
    component.package = componentPackage.fileHash;
  }

  if (component.filePath) {
    component.info = getComponentProps(component.filePath, component.name);
  }
  const { fileInfo = true } = components || {};
  if (fileInfo && component.filePath) {
    component.fileInfo = await getFileIinfo(
      component.filePath,
      component.source,
    );
  }
  if (jest !== false && component.filePath) {
    const componentFolder = path.dirname(component.filePath);
    const docTestFiles = store.doc?.testFiles;
    const testFiles: string[] = docTestFiles
      ? docTestFiles
          .map(f => path.resolve(filePath, f))
          .filter(f => {
            const found = fs.existsSync(f);
            if (!found) {
              error('testFiles file', f);
            }
            return found;
          })
      : [...getRelatedTests(component.filePath), ...getRelatedTests(filePath)];
    if (testFiles.length) {
      const docCoverageFiles = store.doc?.testCoverage;
      const coverageFiles: string[] = docCoverageFiles
        ? docCoverageFiles
            .map(f => path.resolve(filePath, f))
            .filter(f => {
              const found = fs.existsSync(f);
              if (!found) {
                error('testCoverage file', f);
              }
              return found;
            })
        : [component.filePath];
      //add local dependencies from same folder to include in coverage.
      if (component.info?.localDependencies) {
        Object.keys(component.info.localDependencies)
          .filter(f => f.startsWith(`.${path.sep}`))
          .forEach(f => {
            const fileName = resolve.sync(f, {
              ...resolveOptions,
              basedir: componentFolder,
            });
            if (fs.existsSync(fileName)) {
              if (!docTestFiles) {
                testFiles.push(fileName);
              }
              if (!docCoverageFiles) {
                coverageFiles.push(fileName);
              }
            }
          });
      }
      const testData: string[] = [filePath];
      if (store.doc?.testData) {
        const testDataFile = path.resolve(
          path.dirname(filePath),
          store.doc.testData,
        );
        if (fs.existsSync(testDataFile)) {
          testData.push(testDataFile);
        }
      }
      const testResults = await extractTests(
        Array.from(new Set(testFiles)),
        Array.from(new Set(coverageFiles)),
        testData,
        jest,
      );
      if (testResults) {
        component.jest = testResults;
      }
    }
  }
};

export const extractStoreData = async (
  store: LoadingDocStore,
  filePath: string,
): Promise<void> => {
  if (store.doc) {
    const doc: Document = store.doc;
    assignDocumentData(doc, filePath);
  }
};
