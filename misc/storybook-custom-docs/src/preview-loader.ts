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
${pages
  .map((file, index) => `const pageConfig_${index} = require("${file}");`)
  .join('\n')}
const { BroadcastChannel } = require('broadcast-channel');

const attachPage = (pageConfig) => {

  const ATTACH_DOCS_PAGE = \`attach_docs_page_\${pageConfig.title}\`;
  const channel = new BroadcastChannel(ATTACH_DOCS_PAGE, {
    type: 'localstorage',
  });
  
  channel.onmessage = ({ id, active, storyId }) => {
    var node = document.getElementById(id);
    if (!node) {
      node = document.createElement('div');
      node.setAttribute('id', id);
      document.body.appendChild(node);
    }
    if (active) {
      node.removeAttribute('hidden');
      ReactDOM.render(pageConfig.render({ active, storyId }),
        document.getElementById(id),
      );
    } else {
      node.setAttribute('hidden', 'true');
      ReactDOM.unmountComponentAtNode(node);
    }
  };
};
const pageConfigs = [];
${pages
  .map(
    (file, index) =>
      `pageConfigs.push(pageConfig_${index}.default || pageConfig_${index});`,
  )
  .join('\n')}

pageConfigs.forEach(p => attachPage(p));

`;
  return callback(null, code);
};
