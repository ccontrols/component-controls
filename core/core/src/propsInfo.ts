import { ComponentInfo } from './components';

/**
 * callback function to extract props info table  - ie docgen type libraries
 * used to extract displayName, and props tables for a component
 *
 * @param fileName full name and path of the component path react-docgen needs it to extract babel configurations.
 * @param componentName optional component name react-docgen-typescript supports multiple exports for a file react-docgne does not use it.
 * @param source optional soure, saves time if its already loaded react-docgen accepts source as input parameter react-docgen-typescript does not use it.
 *
 * @returns async or normal function that loads ComponentInfo props info.
 */
export type PropsInfoExtractorFunction = (
  fileName: string,
  componentName?: string,
  source?: string,
) => Promise<ComponentInfo | undefined> | ComponentInfo | undefined;
