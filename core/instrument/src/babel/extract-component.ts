import path from 'path';
import fs from 'fs';
import * as resolve from 'resolve';
import {
  Component,
  Document,
  Imports,
  ImportTypes,
  isLocalImport,
} from '@component-controls/core';
import { error } from '@component-controls/logger';
import { getRelatedTests } from '@component-controls/jest-extract';
import { followImports } from '@component-controls/follow-imports';
import { componentKey } from '../misc/hashStore';
import { analyze_components } from './analyze-component';
import { packageInfo } from '../misc/package-info';
import { readSourceFile } from '../misc/source-options';
import { LoadingDocStore, InstrumentOptions } from '../types';
import { getComponentProps } from '../misc/props-info';
import { getFileIinfo } from '../misc/file-info';
import { extractTests } from '../misc/jest-tests';
import { CachedFileResource } from '../misc/chached-file';
import { assignDocumentData } from '../misc/data-driven';

export const extractComponent = async (
  componentName: string,
  filePath: string,
  options?: InstrumentOptions,
): Promise<Component> => {
  const cached = new CachedFileResource<Component>(
    'component-info',
    `${filePath}-${componentName}`,
    filePath,
  );
  // const result = cached.get();
  // if (result) {
  //   return result;
  // }
  const follow = followImports(componentName, filePath, {
    resolver: options?.resolver,
    parser: options?.parser,
    resolveFile: options?.components?.resolveFile,
  });
  const { components, resolver: resolveOptions } = options || {};

  let component: Component;
  if (follow) {
    component = {
      name: componentName,
    };
    if (follow.from) {
      component.from = follow.from;
    }
    if (follow.imports) {
      const imports: ImportTypes = follow.imports;
      const allImports = Object.keys(imports).reduce((acc: Imports, key) => {
        const { name, from, typesFile, importedName } = imports[key];
        let importKey = undefined;
        if (follow.filePath && isLocalImport(from)) {
          try {
            const fileName =
              typesFile ||
              resolve.sync(from, {
                ...resolveOptions,
                basedir: path.dirname(follow.filePath),
              });
            const followImport = followImports(importedName, fileName, {
              resolver: options?.resolver,
              parser: options?.parser,
              resolveFile: options?.components?.resolveFile,
            });
            if (followImport?.filePath) {
              importKey = componentKey(followImport.filePath, importedName);
            }
          } catch (e) {}
        }

        if (acc[from]) {
          return {
            ...acc,
            [from]: [
              ...acc[from],
              importKey
                ? { name, importedName, componentKey: importKey }
                : { name, importedName },
            ],
          };
        }
        return {
          ...acc,
          [from]: [
            importKey
              ? { name, importedName, componentKey: importKey }
              : { name, importedName },
          ],
        };
      }, {});
      component.externalDependencies = Object.keys(allImports)
        .filter(key => !isLocalImport(key))
        .reduce(
          (acc, key) => ({ ...acc, [key]: (allImports as Imports)[key] }),
          {},
        );
      component.localDependencies = Object.keys(allImports)
        .filter(key => isLocalImport(key))
        .reduce((acc, key) => {
          return { ...acc, [key]: (allImports as Imports)[key] };
        }, {});
    }
    if (follow.importedName) {
      component.importedName = follow.importedName;
    }
    if (follow.filePath) {
      if (follow.imports) {
        analyze_components(component, follow.filePath, options);
      }

      component.request = follow.filePath;
      component.fileName = path.basename(follow.filePath);

      const saveSource = readSourceFile(
        components?.sourceFiles,
        follow.source,
        componentName,
        follow.filePath,
      );
      if (saveSource) {
        component.source = saveSource;
        component.loc = follow.loc;
      }
      if (components && typeof components.resolvePropsFile === 'function') {
        const propsFile = components.resolvePropsFile(
          componentName,
          follow.filePath,
        );
        if (propsFile !== component.request) {
          component.propsInfoFile = propsFile;
        }
      }
    }
  } else {
    component = {
      name: componentName,
    };
  }
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
) => {
  const { components, resolver: resolveOptions, jest } = options || {};
  const componentPackage = await packageInfo(
    component.name,
    component.request,
    options?.components?.package,
  );
  if (componentPackage) {
    store.packages[componentPackage.fileHash] = componentPackage;
    component.package = componentPackage.fileHash;
  }

  const propsFile = component.propsInfoFile || component.request;
  if (propsFile) {
    const propsInfo = await getComponentProps(propsFile, component.name);
    if (propsInfo) {
      component.info = propsInfo;
    }
  }
  const { fileInfo = true } = components || {};
  if (fileInfo && component.request) {
    component.fileInfo = await getFileIinfo(
      component.request,
      component.source,
    );
  }
  if (jest !== false && component.request) {
    const componentFolder = path.dirname(component.request);
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
      : [...getRelatedTests(component.request), ...getRelatedTests(filePath)];
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
        : [component.request];
      //add local dependencies from same folder to include in coverage.
      if (component.localDependencies) {
        Object.keys(component.localDependencies)
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

export const extractStoreComponent = async (
  store: LoadingDocStore,
  filePath: string,
  source?: string,
  options?: InstrumentOptions,
): Promise<void> => {
  if (store.doc) {
    const doc: Document = store.doc;
    assignDocumentData(doc, filePath);
    if (doc.componentsLookup) {
      const components = doc.componentsLookup;
      if (
        typeof doc.component === 'string' &&
        components[doc.component] === undefined
      ) {
        components[doc.component] = doc.component;
      }
      const componentNames = Object.keys(components);
      if (componentNames) {
        for (const componentName of componentNames) {
          const component = await extractComponent(
            componentName,
            filePath,
            options,
          );
          if (component) {
            await componentRelatedMetrics(store, filePath, component, options);
            const key = componentKey(
              component.request ?? filePath,
              componentName,
            );
            store.components[key] = component;
            doc.componentsLookup[componentName] = key;
          }
        }
      }
    }
  }
};
