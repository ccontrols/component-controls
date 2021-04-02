export const renderers = {
  rtl: 'react-testing-library',
  rtr: 'react-test-renderer',
  enzyme: 'enzyme-react-17',
};

export type Renderers = keyof typeof renderers;

export type TeplateFormats = 'cjs' | 'esm' | 'ts';

export type TemplateOptions = {
  renderer?: Renderers;
  format?: TeplateFormats;
  config?: string;
  bundle?: string;
  output?: string;
  name?: string;
};

export interface StoryTemplateOptions extends TemplateOptions {
  storyPath?: string;
}

export type TemplateFunction<P extends TemplateOptions = TemplateOptions> = (
  options: P,
) => Promise<string>;
