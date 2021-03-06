import {
  WebpackLoaderContext,
  LoaderOptions,
} from '@component-controls/core/node-utils';
import { getOptions } from 'loader-utils';

interface DocsOptions {
  pages?: string[];
}
function loader(this: WebpackLoaderContext): any {
  const options: DocsOptions = getOptions(this) || {};

  const { pages } = options;
  const callback = this.async();
  const code = ` 
  /* eslint-disable react/display-name */
  const React = require('react');
  const { addons, types } = require('@storybook/addons');
  ${
    pages
      ? pages
          .map(
            (file, index) => `const pageConfig_${index} = require("${file}");`,
          )
          .join('\n')
      : ''
  }
  const { ManagerContainer } =  require('./ManagerContainer');
  
  const ADDON_ID = 'CUSTOM_PAGE_ADDON';
  
  const registerPages = configs => {
    configs.forEach(pageConfig => {
      const key = pageConfig.key;
      const title = pageConfig.title;
      addons.register(\`\${ADDON_ID}/\${key}\`, api => {
        addons.add(\`\${ADDON_ID}/\${key}\`, {
          type: types.TAB,
          title,
          route: ({ storyId }) => \`/\${key}/\${storyId}\`,
          match: ({ viewMode }) => viewMode === key,
          render: ({ active }) => {
            const props = {
              active,
              route: key,
              api,
            };
            return React.createElement(ManagerContainer, props);
          },
        });
      });
    });
  };
  const pageConfigs = [];
  ${
    pages
      ? pages
          .map(
            (file, index) =>
              `pageConfigs.push(pageConfig_${index}.default || pageConfig_${index});`,
          )
          .join('\n')
      : ''
  }

  registerPages(pageConfigs);
  
`;
  if (callback) {
    return callback(null, code);
  }
  return '';
}

module.exports.default = loader;

/**
 * expose public types via declaration merging
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace loader {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Options extends LoaderOptions {}
}
