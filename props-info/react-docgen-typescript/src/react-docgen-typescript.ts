import {
  ParserOptions,
  ComponentDoc,
  withDefaultConfig,
} from 'react-docgen-typescript';
import { computeComponentName } from './defaults';

export type RectDocgenTypescriptOptions = {
  transformProps?: (props: ComponentDoc[]) => ComponentDoc;
} & ParserOptions;

export const extractDocgenTypescriptInfo = (
  fileName: string,
  reactDocGenTypescriptOptions?: RectDocgenTypescriptOptions,
) => {
  const {
    transformProps = (tables: any[]) => tables[0],
    propFilter,
    componentNameResolver = computeComponentName,
    shouldExtractLiteralValuesFromEnum = true,
    savePropValueAsString,
  } = reactDocGenTypescriptOptions || {};

  const parserOptions: ParserOptions = {
    propFilter,
    //@ts-ignore
    componentNameResolver,
    shouldExtractLiteralValuesFromEnum,
    savePropValueAsString,
  };
  const parser = withDefaultConfig(parserOptions);
  try {
    let docgenInfo = parser.parse(fileName);
    if (Array.isArray(docgenInfo) && docgenInfo.length > 0) {
      return transformProps(docgenInfo);
    }
  } catch (e) {
    console.warn(`\nTS: issue parsing ${fileName}`);
    return undefined;
  }
};
