import loaderUtils from 'loader-utils';
import { StoriesStore } from '@component-controls/specification';
import { store } from './store';

module.exports = function() {
  const storyFiles = store.stores.reduce(
    (acc: string[], s: Pick<StoriesStore, 'stories' | 'kinds'>) => {
      return [
        ...acc,
        ...Object.keys(s.kinds).map(key =>
          //@ts-ignore
          loaderUtils.stringifyRequest(this, s.kinds[key].fileName),
        ),
      ];
    },
    [],
  );

  const imports = `
const imports = {};
${storyFiles
  .map((fileName, fileIdx) => `imports['i_${fileIdx}'] = require(${fileName});`)
  .join('\n')}
`;
  const storeConst = `const store = ${JSON.stringify(store)};\n`;
  let loadStories = `
  let storyIdx = 0;
  for (let i = 0; i < store.stores.length; i+= 1) {
    const s =  store.stores[i];
    const kinds = Object.keys(s.kinds);
    for (let j=0; j < kinds.length; j += 1) {
      const exports = imports[\`i_\${storyIdx}\`];
      storyIdx += 1;
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
  const hmr = `
  if (module.hot) {
    module.hot.accept([${storyFiles.join(', ')}], function() {
      console.log('Accepting the updated modules');
    })
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
