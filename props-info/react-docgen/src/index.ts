import { PropTypes } from '@component-controls/specification';

import { extractDocgenInfo, RectDocgenOptions } from './react-docgen';
import { transformProps } from './transform-props';

export default (options?: RectDocgenOptions) => {
  return (
    fileName: string,
    componentName?: string,
    source?: string,
  ): PropTypes | undefined => {
    const propTable = extractDocgenInfo(fileName, source, options);
    return {
      ...propTable,
      props: transformProps(propTable.props),
    };
  };
};
