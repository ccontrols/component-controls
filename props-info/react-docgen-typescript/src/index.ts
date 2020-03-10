import {
  extractDocgenTypescriptInfo,
  RectDocgenTypescriptOptions,
} from './react-docgen-typescript';
import { transformProps } from './transform-props';

export default (
  fileName: string,
  source?: string,
  options?: RectDocgenTypescriptOptions,
) => {
  const propTable = extractDocgenTypescriptInfo(fileName, options);
  return {
    ...propTable,
    props: transformProps(propTable.props),
  };
};
