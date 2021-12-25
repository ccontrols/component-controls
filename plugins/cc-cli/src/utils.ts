import { BuildConfiguration } from '@component-controls/core';

export const renderers = {
  rtl: 'react-testing-library',
  rtr: 'react-test-renderer',
  enzyme: 'enzyme-react-17',
};

export type Renderers = keyof typeof renderers;

export const Formats = ['cjs', 'esm', 'ts'] as const;
export type TeplateFormats = typeof Formats[number];

export type TemplateOptions = {
  /**
   * which renderer to use for generating the tests
   */
  renderer?: Renderers;
  /**
   * files format - default common js
   */
  format?: TeplateFormats;
  /**
   * configuration files folder
   */
  config?: string;
  /**
   * if specified, will get stories from the bundle instead of directly importing
   */
  bundle?: string;
  /**
   * tests output folder - where to create them
   */
  output?: string;
  /**
   * describe section label
   */
  name?: string;
  /**
   * if true, include axe accessibility tests
   */
  ally?: boolean;

  /**
   * if positive number, how many rows of random data to generate for data-driven testing
   */
  data?: number;

  /** random generator seed if generating data */
  seed?: number;
};

export interface StoryTemplateOptions extends TemplateOptions {
  storyPath?: string;
}

export type TemplateFunction<P extends TemplateOptions = TemplateOptions> = (
  options: P,
  dataImports?: DataImportOptions,
  configuration?: BuildConfiguration,
) => Promise<string>;

export interface DataImportOptions {
  // the imported filename
  filePath: string;
  // the list of stories that do have some data-driven values and their values
  data: Record<string, any>;
}

export const formatExtension = (format: TeplateFormats): string =>
  format === 'ts' ? 'ts' : 'js';

export const removeExtension = (fileName?: string): string | undefined =>
  fileName ? fileName.split('.').slice(0, -1).join('.') : undefined;
