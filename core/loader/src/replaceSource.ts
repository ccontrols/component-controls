export interface StoryPath {
  absPath: string;
  relPath: string;
}

export const replaceSource = (stories: StoryPath[], hashKey: string) => {
  const imports = `
const imports = {};
${stories
  .map(story => `imports['${story.absPath}'] = require(${story.relPath});`)
  .join('\n')}
`;
  const storeConst = `const store = ${hashKey};\n`;
  let loadStories = `
  for (let i = 0; i < store.stores.length; i+= 1) {
    const s =  store.stores[i];
    const docs = Object.keys(s.docs);
    for (let j=0; j < docs.length; j += 1) {
      const doc = s.docs[docs[j]];
      if (imports.hasOwnProperty(doc.fileName)) {
        const exports = imports[doc.fileName];
        try {
          Object.keys(exports).forEach(key => {
            const exported = exports[key];
            if (key === 'default') {
              const { storySource, ...rest } = exported;
              Object.assign(doc, rest);
            } else {
              const story = s.stories[key];
              if (story) {
                story.renderFn = exported;
                if (exported.story) {
                  Object.assign(story, exported.story);
                }
              }
            }
          });
        } catch (e) {
          console.error(\`unable to load module \${doc.moduleId}\`, e);
        }
      }  
    }
  }
`;
  const exports = `module.exports = store;\n`;
  const hmr = `
  if (module.hot) {
    ${stories
      .map(
        story => `
    module.hot.accept(${story.relPath}, function() {
      console.log('HMR',${story.relPath});
    })    
    `,
      )
      .join('\n')}
  }
  `;
  const newContent = `
${imports}
${storeConst}
${loadStories}
${hmr}
${exports}
`;
  return newContent;
};
