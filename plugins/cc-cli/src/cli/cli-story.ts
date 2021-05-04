import path from 'path';
import { loadConfig, extractDocuments } from '@component-controls/config';
import { loadStore } from '@component-controls/store';
import { StoryTemplateOptions, TeplateFormats } from '../types';
import { CliOptions } from './types';
import { saveTemplate } from './save-template';
import { createStoriesTemplate } from '../jest-templates/stories-template';
import { createDocumentTemplate } from '../jest-templates/document-template';

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
  } = options;
  let documents: string[] = [];

  if (bundle) {
    const store = loadStore(require(bundle));
    documents = Object.keys(store.docs).map(
      key => store.docs[key].fileName || store.docs[key].title,
    );
  } else {
    const configPath = path.resolve(process.cwd(), config);
    const configuration = loadConfig(configPath);
    if (configuration) {
      documents =
        extractDocuments({ config: configuration.config, configPath }) || [];
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
    const templateFn = generateDoc
      ? createDocumentTemplate
      : createStoriesTemplate;
    await saveTemplate<StoryTemplateOptions>(
      {
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
        output: output
          ? output
          : bundle
          ? path.dirname(bundle)
          : path.dirname(name),
      },
      templateFn,
    );
  }
};
