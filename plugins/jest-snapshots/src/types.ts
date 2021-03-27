export const renderers = {
  rtl: 'react-testing-library',
  rtr: 'react-test-renderer',
  enzyme: 'enzyme-react-17',
};

export type Renderers = keyof typeof renderers;

export type TeplateFormats = 'cjs' | 'esm' | 'ts';
