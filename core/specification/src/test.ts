/**
 * run API to generate react-docgen-typescript props information tables.
 * @param options configuration options
 * @returns a callable function of type PropsInfoExtractorFunction
 */
export const run = (options?: string): number => {
  return parseInt(options || '');
};
