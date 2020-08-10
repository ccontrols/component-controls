const path = require('path');

module.exports = {
  stories: [
    '../src/docs/*.@(mdx|tsx)',
  ],
  instrument: {
    components: {
      package: {
        browseLink: (componentName, filePath ) =>   {
          if (filePath.includes('system-ui/theme-ui/tree/master/dist/index.js')) {
            return `https://github.com/system-ui/theme-ui/tree/master/packages/components/src/${componentName}.js`
          }
          if (filePath.includes('/component-controls/tree/master/ui/components/dist/index.js')) {
            return `https://github.com/ccontrols/component-controls/blob/master/ui/components/src/${componentName}/${componentName}.tsx`
          }
          return filePath;
        }
      },
      resolveFile: (componentName, filePath) => {
        if (filePath.includes('theme-ui/dist')) {
          const resolved = path.resolve(
            path.dirname(filePath),
            `../../@theme-ui/components/src/${componentName}.js`,
          );
          return resolved;
        }
        if (filePath.includes('@component-controls/components/dist')) {
          const resolved = path.resolve(
            path.dirname(filePath),
            `../src/${componentName}/${componentName}.tsx`,
          );
          return resolved;
        }
        return filePath;
      },
      resolvePropsFile: (componentName, filePath) => {
        if (filePath.includes('@theme-ui/components/src')) {
          const resolved = path.resolve(
            path.dirname(filePath),
            `../index.d.ts`,
          );
          return resolved;
        }
      },
    },
  }
};