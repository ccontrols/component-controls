import * as fs from 'fs';
import { parse } from 'react-docgen';
import { ComponentInfo } from '@component-controls/core';

import { RectDocgenOptions, RdPropInfoRecord } from './types';

export const extractDocgenInfo = (
  fileName: string,
  componentName?: string,
  source?: string,
  reactDocGenOptions?: RectDocgenOptions,
): ({ props: RdPropInfoRecord } & ComponentInfo) | undefined => {
  const { resolver, handlers, options } = reactDocGenOptions || {};
  const src = source ? source : fs.readFileSync(fileName, 'utf8');
  try {
    return parse(src, resolver, handlers, { filename: fileName, ...options });
  } catch (e) {
    console.error(
      `\nreact-docgen unable to parse ${componentName}: ${fileName}`,
    );
    return undefined;
  }
};
