const {
  loadConfigurations,
  extractDocuments,
  isMDXDocument,
} = require('@component-controls/config');
const { renderExample } = require('@component-controls/test-renderers');
const { render: reactRender } = require('@component-controls/render/react');