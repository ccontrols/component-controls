import { getOptions } from 'loader-utils';

interface DocsOptions {
  pages: string[];
}

module.exports.default = async function() {
  const options: DocsOptions = (getOptions(this) as DocsOptions) || {};
  const { pages } = options;
  const callback = this.async();
  const code = ` 
const React = require('react');
const ReactDOM = require('react-dom');
import addons from '@storybook/addons';
${pages
  .map((file, index) => `const pageConfig_${index} = require("${file}");`)
  .join('\n')}

const channel = addons.getChannel();

const activePages: string[] = [];

const attachPage = (pageConfig) => {

  const ATTACH_DOCS_PAGE = \`attach_docs_page_\${pageConfig.key}\`;

  channel.on(ATTACH_DOCS_PAGE, ({ active, storyId }) => {
    const id = \`controls-docs-page-\${pageConfig.key}\`;
    var node = document.getElementById(id);
    if (!node) {
      node = document.createElement('div');
      node.setAttribute('id', id);
      document.body.appendChild(node);
    }
    const root = document.getElementById('root');
    const pageIndex = activePages.indexOf(id);
    if (active) {
      if (pageIndex < 0) {
        activePages.push(id);
      }
      root.style.setProperty('display', 'none');
      node.removeAttribute('hidden');
      ReactDOM.render(pageConfig.render({ active }),
        document.getElementById(id),
      );
    } else {
      node.setAttribute('hidden', 'true');
      ReactDOM.unmountComponentAtNode(node);
      if (pageIndex >= 0) {
        activePages.splice(pageIndex, 1);
        if (activePages.length === 0) {
          root.style.removeProperty('display');
        }
      }
    }
  });
};
const pageConfigs = [];
${pages
  .map(
    (file, index) =>
      `pageConfigs.push(pageConfig_${index}.default || pageConfig_${index});`,
  )
  .join('\n')}

pageConfigs.forEach(p => {
  attachPage(p);
  const REQUEST_DOCS_PAGE = \`request_docs_page_\${p.key}\`;
  channel.emit(REQUEST_DOCS_PAGE);
});

`;
  return callback(null, code);
};
