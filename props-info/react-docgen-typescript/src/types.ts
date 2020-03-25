import { ParserOptions, ComponentDoc } from 'react-docgen-typescript';

/**
 * a callback to transfor them props table and the options to be passd to react-docgen-typescript.
 */
export type RectDocgenTypescriptOptions = {
  /**
   * callback to transform the props table
   */
  transformProps?: (props: ComponentDoc[]) => ComponentDoc;
} & ParserOptions;
