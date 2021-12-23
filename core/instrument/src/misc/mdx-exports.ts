import { MDXExportType, MDXExportTypes } from '../types';
import { stringifyObject } from './stringify-object';

const mdxPropertiesExport = (
  exportType: MDXExportType,
  defObject: Record<string, unknown>,
): string => {
  const obj = { ...defObject, ...(exportType ? exportType.story : {}) };
  return stringifyObject(obj);
};

const mdxFunctionExport = (
  name: string,
  exportType: MDXExportType,
): string | undefined =>
  `export const ${name} = ${exportType.render ? exportType.render : '{}'}`;

export const extractStoryExports = (
  storybookExports: boolean,
  exports?: MDXExportTypes,
): string => {
  if (exports) {
    const exportNames = Object.keys(exports);
    if (exportNames.length) {
      let defaultExportCode = '';
      if (exports.default) {
        const defaults: Record<string, unknown> = {
          MDXPage: new String('MDXContent'),
        };
        if (storybookExports) {
          //docs parameters
          defaults.parameters = {
            docs: {
              page: new String('MDXContent'),
              container: new String(
                '({ children }) => <React.Fragment>{children}</React.Fragment>',
              ),
            },
          };
        }
        const expCode = mdxPropertiesExport(exports.default, defaults);
        defaultExportCode = `
        const mdxDefaultExport = MDXContent;
        Object.assign(mdxDefaultExport, ${expCode});
        export default mdxDefaultExport;
`;
      }

      const expStories = Object.keys(exports).filter(id => id !== 'default');

      if (expStories.length) {
        const storiesExports: string[] = [];
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
        return `${defaultExportCode}\n${storiesExports.join('\n')}`;
      } else if (storybookExports) {
        //fake page object to accoodate storybook
        return `${defaultExportCode}
        export const __page = () => { throw new Error("Docs-only story"); };
        __page.story = { parameters: { docsOnly: true } };
        `;
      }
      return `${defaultExportCode}`;
    }
  }
  return `
export default { MDXPage: MDXContent };
`;
};
