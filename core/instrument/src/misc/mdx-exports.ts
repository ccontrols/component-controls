import { MDXExportType, MDXExportTypes } from '../types';

const mdxPropertiesExport = (exportType: MDXExportType): string | undefined => {
  return exportType ? JSON.stringify(exportType.story, null, 2) : undefined;
};

const mdxFunctionExport = (
  name: string,
  exportType: MDXExportType,
): string | undefined => {
  return exportType && exportType.render
    ? `export const ${name} = ${exportType.render}`
    : undefined;
};

export const extractStoryExports = (exports?: MDXExportTypes): string => {
  if (exports) {
    const exportNames = Object.keys(exports);
    if (exportNames.length) {
      let defaultExportCode = '';
      if (exports.default) {
        const expCode = mdxPropertiesExport(exports.default);
        defaultExportCode = `

        export default { ${
          expCode ? `...${expCode},` : ''
        } MDXPage: MDXContent };`;
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
            storiesExports.push(`${exportStory}.story = ${expCode}
             `);
          }
        }
      }
      return `${defaultExportCode}\n${storiesExports.join('\n')}`;
    }
  }
  return 'export default { MDXPage: () => <MDXContent /> };';
};
