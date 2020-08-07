import { RequireContextProps } from '@component-controls/config';
import { BuildConfiguration } from '@component-controls/core';

export interface StoryPath {
  absPath: string;
  relPath: string;
}

export const replaceSource = (
  contexts: RequireContextProps[],
  configFilePath: string | undefined,
  config: BuildConfiguration | undefined,
  hashKey: string,
) => {
  const imports = `

const configJSON = ${
    configFilePath ? `require("${configFilePath}")` : 'undefined'
  };
 const contexts = [];
${contexts
  .map(
    context =>
      `contexts.push({
        folder: "${context.directory}", 
        req: require.context('${context.directory}', ${
        context.useSubdirectories ? 'true' : 'false'
      }, ${context.regExp})
    });`,
  )
  .join('\n')}
`;
  const storeConst = `const store = ${hashKey};\n`;
  let loadStories = `
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
    const s =  store.stores[i];
    const doc = s.doc;
    if (doc) {
      let exports = null;
      for (const context of contexts) {
        const key = context.req.keys().find(k => {
          const fullPath = path.resolve(context.folder, k);
          return doc.fileName === fullPath;
        })
        if (key) {
          exports = context.req(key);
          break;
        }
      }
      if (exports) {
        try {
          Object.keys(exports).forEach(key => {
            const exported = exports[key];
            if (key === 'default') {
              const { storySource, ...rest } = exported;
              assignProps(doc, rest);
            } else {
              const story = s.stories[key];
              if (story) {
                story.renderFn = exported;
                assignProps(story, exported);
                if (exported.story) {
                  assignProps(story, exported.story);
                }
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

const path = require('path');
${imports}
${storeConst}
store.config = ${configFilePath ? 'configJSON.default ||' : ''} configJSON;
store.buildConfig = ${config ? JSON.stringify(config) : '{}'};
${loadStories}
${exports}
`;
  return newContent;
};
