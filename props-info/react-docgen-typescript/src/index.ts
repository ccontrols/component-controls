import { PropTypes } from '@component-controls/specification';
import {
  extractDocgenTypescriptInfo,
  RectDocgenTypescriptOptions,
} from './react-docgen-typescript';
import { transformProps } from './transform-props';

export default (options?: RectDocgenTypescriptOptions) => {
  return (fileName: string, componentName?: string): PropTypes | undefined => {
    const propTable = extractDocgenTypescriptInfo(
      fileName,
      componentName,
      options,
    );
    return {
      ...propTable,
      props: transformProps(propTable.props),
    };
  };
};
