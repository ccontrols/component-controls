import { ExportType, ExportTypes } from '../types';

const mdxPropertiesExport = (exportType: ExportType): string | undefined => {
  return exportType && exportType.story
    ? `${Object.keys(exportType.story)
        //@ts-ignore
        .map(name => `${name}: ${exportType.story[name]}`)
        .join(',\n')}`
    : undefined;
};

const mdxFunctionExport = (
  name: string,
  exportType: ExportType,
): string | undefined => {
  return exportType && exportType.render
    ? `export const ${name} = ${exportType.render}`
    : undefined;
};

export const extractStoryExports = (exports?: ExportTypes): string => {
  if (exports) {
    const exportNames = Object.keys(exports);
    if (exportNames.length) {
      let defaultExportCode = '';
      if (exports.default && exports.default.story) {
        const expCode = mdxPropertiesExport(exports.default);
        if (expCode) {
          defaultExportCode = `export default { ${expCode} };`;
        }
      }

      let storiesExports: string[] = [];
      const expStories = Object.keys(exports).filter(id => id !== 'default');
      if (expStories.length) {
        for (const exportStory of expStories) {
          const expFn = mdxFunctionExport(exportStory, exports[exportStory]);
          if (expFn) {
            storiesExports.push(expFn);
          }
          const expCode = mdxPropertiesExport(exports[exportStory]);
          if (expCode) {
            storiesExports.push(`${exportStory}.story = {
                ${expCode}
             }`);
          }
        }
      }
      return `${defaultExportCode}\n${storiesExports.join('\n')}`;
    }
  }
  return 'result';
};
