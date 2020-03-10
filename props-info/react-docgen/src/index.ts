import { extractDocgenInfo, RectDocgenOptions } from './react-docgen';
import { transformProps } from './transform-props';

export default (
  fileName: string,
  source?: string,
  options?: RectDocgenOptions,
) => {
  const propTable = extractDocgenInfo(fileName, source, options);
  return {
    ...propTable,
    props: transformProps(propTable.props),
  };
};
