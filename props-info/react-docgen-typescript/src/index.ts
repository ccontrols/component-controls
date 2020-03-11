import { ComponentInfo } from '@component-controls/specification';
import {
  extractDocgenTypescriptInfo,
  RectDocgenTypescriptOptions,
} from './react-docgen-typescript';
import { transformProps } from './transform-props';

export default (options?: RectDocgenTypescriptOptions) => {
  return async (
    fileName: string,
    componentName?: string,
  ): Promise<ComponentInfo | undefined> => {
    const propTable = extractDocgenTypescriptInfo(
      fileName,
      componentName,
      options,
    );
    return new Promise(resolve =>
      resolve(
        propTable
          ? {
              ...propTable,
              props: transformProps(propTable.props),
            }
          : undefined,
      ),
    );
  };
};
