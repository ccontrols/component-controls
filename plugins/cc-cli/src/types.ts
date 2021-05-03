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
};

export interface StoryTemplateOptions extends TemplateOptions {
  storyPath?: string;
}

export type TemplateFunction<P extends TemplateOptions = TemplateOptions> = (
  options: P,
) => Promise<string>;
