import { ExportType } from '../types';

export const mdxPropertiesExport = (
  exportType: ExportType,
): string | undefined => {
  return exportType && exportType.story
    ? `${Object.keys(exportType.story)
        //@ts-ignore
        .map(name => `${name}: ${exportType.story[name]}`)
        .join(',\n')}`
    : undefined;
};

export const mdxFunctionExport = (
  name: string,
  exportType: ExportType,
): string | undefined => {
  return exportType && exportType.render
    ? `export const ${name} = ${exportType.render}`
    : undefined;
};
