import {
  ComponentInfo,
  PropsInfoExtractorFunction,
} from '@component-controls/specification';

import { extractDocgenInfo } from './react-docgen';
import { RectDocgenOptions } from './types';
import { transformProps } from './transform-props';

/**
 * run API to generate react-docgen props information tables.
 * @param options configuration options
 * @returns a callable function of type PropsInfoExtractorFunction
 */
export const run = (
  options?: RectDocgenOptions,
): PropsInfoExtractorFunction => {
  return (
    fileName: string,
    componentName?: string,
    source?: string,
  ): ComponentInfo | undefined => {
    const propTable = extractDocgenInfo(
      fileName,
      componentName,
      source,
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
