import { ComponentInfo } from '@component-controls/specification';

import { extractDocgenInfo, RectDocgenOptions } from './react-docgen';
import { transformProps } from './transform-props';

export const run = (options?: RectDocgenOptions) => {
  return async (
    fileName: string,
    componentName?: string,
    source?: string,
  ): Promise<ComponentInfo | undefined> => {
    const propTable = extractDocgenInfo(
      fileName,
      componentName,
      source,
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
