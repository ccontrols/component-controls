import jsStringEscape from 'js-string-escape';
import { MDXExportType, MDXExportTypes } from '../types';

const stringifyObject = (
  val: any,
  sep: string = '  ',
  depth: number = 1,
): string => {
  const t = typeof val;
  switch (t) {
    case 'string':
      return `"${jsStringEscape(val)}"`;
    case 'function':
      return val.name || val.toString();
    case 'object':
      if (val instanceof Date) {
        return '"' + val.toISOString() + '"';
      }
      if (val instanceof String) {
        return val.toString();
      }
      if (Array.isArray(val)) {
        return (
          '[' +
          val.map(v => stringifyObject(v, sep, depth + 1)).join(', ') +
          ']'
        );
      }
      if (val === null) {
        return 'null';
      }
      return `
        {
        ${Object.keys(val)
          .map(key => {
            return typeof val[key] === 'function'
              ? null
              : `${key}: ${stringifyObject(val[key], sep, depth + 1)}`;
          })
          .filter(v => v)}
        }
        `;
    default:
      return val.toString();
  }
};

const mdxPropertiesExport = (exportType: MDXExportType): string | undefined => {
  return exportType ? stringifyObject(exportType.story) : undefined;
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
        const dmsPageExport = MDXContent;
        dmsPageExport.MDXPage = MDXContent;

        export default ${
          expCode
            ? `Object.assign(dmsPageExport, ${expCode});`
            : 'dmsPageExport;'
        }
`;
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
  return `
const dmsPageExport = MDXContent;
dmsPageExport.MDXPage = MDXContent;
export default  dmsPageExport;
`;
};
