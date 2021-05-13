import path from 'path';
import { loadConfig, extractDocuments } from '@component-controls/config';
import { loadStore } from '@component-controls/store';
import { StoryTemplateOptions, TeplateFormats } from '../utils';
import { CliOptions } from './utils';
import { saveTemplate } from './save-test-template';
import { createStoriesTemplate } from '../jest-templates/stories-template';
import { createDocumentTemplate } from '../jest-templates/document-template';
import { BuildConfiguration } from '@component-controls/core';

const formatExtensions: { [key in TeplateFormats]: string } = {
  cjs: '.js',
  esm: '.js',
  ts: '.ts',
};

export const formatExtension = (
  fileName: string,
  format: TeplateFormats,
): string => {
  const basename = path.basename(fileName, path.extname(fileName));
  const extension = formatExtensions[format];
  return path.join(path.dirname(fileName), basename + extension);
};

/**
 * cli function to create tests on a story by story basis
 * @param options file and rendering options
 * @param generateDoc - if true will generate document-level template. Default is to generate tests for each story in the document
 */
export const cliStory = async (
  options: CliOptions,
  generateDoc: boolean,
): Promise<void> => {
  const {
    renderer,
    format,
    overwrite,
    config = '.config',
    test,
    bundle,
    output,
    include,
    exclude,
    ally,
    data,
    seed,
  } = options;
  let documents: string[] = [];
  let configuration: BuildConfiguration | undefined;
  if (bundle) {
    const store = loadStore(require(bundle));
    configuration = store.config;
    documents = Object.keys(store.docs).map(
      key => store.docs[key].fileName || store.docs[key].title,
    );
  } else {
    const configPath = path.resolve(process.cwd(), config);
    const configResult = loadConfig(configPath);
    if (configResult) {
      configuration = configResult?.config;
      documents = extractDocuments({ config: configuration, configPath }) || [];
    }
  }
  for (const name of documents) {
    const basename = path.basename(name);
    const splitName = basename.split('.');
    const componentName = splitName[0];

    const fileFormat =
      format || (path.extname(name).startsWith('.ts') ? 'ts' : 'esm');
    const testName =
      test || formatExtension(`${componentName}.test.js`, fileFormat);

    const docOptions = {
      renderer,
      format: fileFormat,
      include,
      exclude,
      overwrite,
      config,
      test: testName,
      bundle,
      name: options.name || componentName,
      storyPath: name,
      ally,
      data,
      seed,
      output: output
        ? output
        : bundle
        ? path.dirname(bundle)
        : path.dirname(name),
    };
    const templateFn = generateDoc
      ? createDocumentTemplate
      : createStoriesTemplate;
    await saveTemplate<StoryTemplateOptions>(docOptions, templateFn);
  }
};
