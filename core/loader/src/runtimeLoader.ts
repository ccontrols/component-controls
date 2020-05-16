import { store } from './store';

module.exports = function() {
  let imports = 'const imports = {};\n';
  store.stores.forEach((store, storeIdx) => {
    imports = `${imports} ${Object.keys(store.kinds).map(
      (key, kindIdx) =>
        `imports['i_${storeIdx}_${kindIdx}'] = require('${store.kinds[key].fileName}');\n`,
    )}`;
  });
  const storeConst = `const store = ${JSON.stringify(store)};\n`;
  let loadStories = `
  for (let i = 0; i < store.stores.length; i+= 1) {
    const s =  store.stores[i];
    const kinds = Object.keys(s.kinds);
    for (let j=0; j < kinds.length; j += 1) {
      const exports = imports[\`i_\${i}_\${j}\`];
      const kind = s.kinds[kinds[j]];
      
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
`;
  const exports = `module.exports = store;\n`;
  const newContent = `
${imports}
${storeConst}
${loadStories}
${exports}
`;

  return newContent;
};
