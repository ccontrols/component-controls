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
 const imports = [];
${contexts
  .map(
    context =>
      `imports.push(require.context('${context.directory}', ${
        context.useSubdirectories ? 'true' : 'false'
      }, ${context.regExp}));`,
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
    const importedFile = imports.find(i => i.hasOwnProperty(doc.fileName));
    if (doc && importedFile) {
      const exports = importedFile[doc.fileName];
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
    }  
  }
`;
  const exports = `module.exports = store;\n`;
  const newContent = `
${imports}
${storeConst}
store.config = ${configFilePath ? 'configJSON.default ||' : ''} configJSON;
store.buildConfig = ${config ? JSON.stringify(config) : '{}'};
${loadStories}
${exports}
`;
  return newContent;
};
