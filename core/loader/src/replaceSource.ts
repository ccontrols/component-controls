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
    const kinds = Object.keys(s.kinds);
    for (let j=0; j < kinds.length; j += 1) {
      const kind = s.kinds[kinds[j]];
      if (imports.hasOwnProperty(kind.fileName)) {
        const exports = imports[kind.fileName];
        try {
          Object.keys(exports).forEach(key => {
            const exported = exports[key];
            if (key === 'default') {
              const { storySource, ...rest } = exported;
              Object.assign(kind, rest);
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
          console.error(\`unable to load module \${kind.moduleId}\`, e);
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
