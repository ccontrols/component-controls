import { MDXExportType, MDXExportTypes } from '../types';
import { stringifyObject } from './stringify-object';

const mdxPropertiesExport = (
  exportType: MDXExportType,
  defObject: object,
): string => {
  const obj = { ...defObject, ...(exportType ? exportType.story : {}) };
  return stringifyObject(obj);
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
        const expCode = mdxPropertiesExport(exports.default, {
          MDXPage: new String('MDXContent'),
        });
        defaultExportCode = `export default ${expCode};`;
      }

      let storiesExports: string[] = [];
      const expStories = Object.keys(exports).filter(id => id !== 'default');
      if (expStories.length) {
        for (const exportStory of expStories) {
          const expFn = mdxFunctionExport(exportStory, exports[exportStory]);
          if (expFn) {
            storiesExports.push(expFn);
          }
          const expCode = mdxPropertiesExport(exports[exportStory], {});
          if (expCode) {
            storiesExports.push(`${exportStory}.story = ${expCode}
             `);
          }
        }
      }
      return `${defaultExportCode}\n${storiesExports.join('\n')}`;
    }
  }
  return `
const dmsPageExport = MDXContent;
dmsPageExport.MDXPage = MDXContent;
export default  dmsPageExport;
`;
};
