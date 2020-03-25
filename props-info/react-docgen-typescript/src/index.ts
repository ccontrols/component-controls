import {
  ComponentInfo,
  PropsInfoExtractorFunction,
} from '@component-controls/specification';
import { extractDocgenTypescriptInfo } from './react-docgen-typescript';
import { RectDocgenTypescriptOptions } from './types';
import { transformProps } from './transform-props';

/**
 * run API to generate react-docgen-typescript props information tables.
 * @param options configuration options
 * @returns a callable function of type PropsInfoExtractorFunction
 */
export const run = (
  options?: RectDocgenTypescriptOptions,
): PropsInfoExtractorFunction => {
  return (
    fileName: string,
    componentName?: string,
  ): ComponentInfo | undefined => {
    const propTable = extractDocgenTypescriptInfo(
      fileName,
      componentName,
      options,
    );
    return propTable
      ? {
          ...propTable,
          props: transformProps(propTable.props),
        }
      : undefined;
  };
};
