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
  componentName?: string,
  reactDocGenTypescriptOptions?: RectDocgenTypescriptOptions,
) => {
  const {
    transformProps = (tables: any[]) => {
      const byName =
        componentName &&
        tables.find(table => table.displayName === componentName);
      return byName ? byName : tables[0];
    },
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
    console.error(
      `\nreact-docgen-typescript unable to parse ${componentName}: ${fileName}`,
    );
    return undefined;
  }
};
