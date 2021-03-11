import { RequireContextProps } from '@component-controls/config';
import {
  BuildConfiguration,
  PagesOnlyRoutes,
  normalizePath,
} from '@component-controls/core';

export interface StoryPath {
  absPath: string;
  relPath: string;
}

export const replaceSource = (
  contexts: RequireContextProps[],
  configFilePath: string | undefined,
  config: BuildConfiguration | undefined,
  hashKey: string,
): string => {
  const imports = `

const configJSON = ${
    configFilePath ? `require("${normalizePath(configFilePath)}")` : 'undefined'
  };

const search = ${
    typeof config?.search?.searchingModule === 'string'
      ? `require("${normalizePath(config.search.searchingModule)}")`
      : 'undefined'
  };
${
  config?.pages
    ? Object.keys(config.pages)
        .map(key => {
          const { tabs } = (config.pages as PagesOnlyRoutes)[key];
          return tabs
            ? Object.keys(tabs)
                .map((route, index) => {
                  const tab = tabs[route];
                  const m = Array.isArray(tab) ? tab[0] : tab;
                  return typeof m === 'string'
                    ? `const ${key}_${index} = require("${m}");`
                    : undefined;
                })
                .filter(tab => tab)
                .join('\n')
            : undefined;
        })
        .filter(page => page)
        .join('') || ''
    : ''
}
const contexts = [];
${contexts
  .map(
    context =>
      `contexts.push({
        folder: "${normalizePath(context.directory)}", 
        req: require.context('${normalizePath(context.directory)}', ${
        context.useSubdirectories ? 'true' : 'false'
      }, ${context.regExp})
    });`,
  )
  .join('\n')}
`;
  const storeConst = `const store = ${hashKey};\n`;
  const loadStories = `
  const assignProps = (obj, { storyName, story, ...props}) => {
    //preserve component and subcomponents as strings
    const componentName = obj.component;
    const subcomponentsName = obj.subcomponents;
    Object.assign(obj, props);
    if (componentName !== undefined) {
      obj.component = componentName;
    }  
    if (subcomponentsName !== undefined) {
      obj.subcomponents = subcomponentsName;
    }
    if (storyName) {
      obj.name = storyName;
    }
  }
  for (let i = 0; i < store.stores.length; i+= 1) {
    debugger;
    const s =  store.stores[i];
    const doc = s.doc;
    if (doc) {
      let exports = null;
      for (const context of contexts) {
        const key = context.req.keys().find(k => {
          const fullPath = path.join(context.folder, k);
          const normalizedPath = context.folder.indexOf('\\\\') >= 0 ? fullPath.split('/').join('\\\\') : fullPath;
          return doc.fileName === normalizedPath;
        });
        if (key) {
          exports = context.req(key);
          break;
        }
      }
      if (exports) {
        try {
          if (exports.default) {
            const { storySource, ...rest } = exports.default;
            assignProps(doc, rest);
          }
          Object.keys(exports).filter(key => key !== 'default').forEach(key => {
            const exported = exports[key];
            const story = s.stories[key];
            if (story) {
              story.renderFn = typeof exported === 'function' ? exported : (doc.template || exported);
              assignProps(story, exported);
              if (exported.story) {
                assignProps(story, exported.story);
              }
            }
          });
        } catch (e) {
          console.error(\`unable to load module \${doc.moduleId}\`, e);
        }
      } else {
        //file could not be found
        store.stores.splice(i, 1);
        i -= 1; 
      }
    }  
  }
`;
  const exports = `module.exports = store;\n`;
  const newContent = `

const path = require('path-browserify');
const { loadPageTab } = require('@component-controls/core')
${imports}
${storeConst}
store.search = search.default || search;
store.config = ${configFilePath ? 'configJSON.default ||' : ''} configJSON;
store.buildConfig = ${config ? JSON.stringify(config) : '{}'};
${
  config?.pages
    ? Object.keys(config.pages)
        .map(key => {
          const { tabs = {} } = (config.pages as PagesOnlyRoutes)[key];
          return (
            Object.keys(tabs)
              .map(
                (tab, index) =>
                  `store.buildConfig.pages.${key}.tabs["${tab}"] = 
  loadPageTab(store.buildConfig.pages.${key}.tabs["${tab}"], ${key}_${index});`,
              )
              .filter(template => template)
              .join('\n') || undefined
          );
        })
        .filter(page => page)
        .join('') || ''
    : ''
}
${loadStories}
${exports}
`;
  return newContent;
};
