const fs = require('fs');
const path = require('path');
const remark = require('remark');
const {
  withDefaultConfig,
} = require('react-docgen-typescript')

const { extractCustomTag, inlineNewContent } = require('./utils');
module.exports = insertTypescriptDocs;

const propsToMDNodes = (propTable, repoFileName) => {
  const nodes = [];
  nodes.push({ type: 'heading', depth: 2, children: [
    { type: 'html', value: '<ins>' },
    { type: 'text', value: propTable.displayName },
    { type: 'html', value: '</ins>' },
  ]});
  
  remark()
      .use(() => node => {
        nodes.push.apply(nodes, [...node.children]);
      })
      .process(propTable.description);
  
  nodes.push({ type: 'paragraph', children: [
    { type: 'emphasis', children: [
      { type: 'text', value: propTable.displayName },
      { type: 'text', value: ' ' },
      { type: 'link', url: repoFileName, 
        children: [
          { type: 'text', value: 'source code'}
        ]
      }
    ]}    
  ]
});
  if (Object.keys(propTable.props).length) {
    nodes.push({type: 'paragraph', children: [ {type: 'strong', children: [{ type: 'text', value: 'Properties:' }]} ]});
    const list = { type: 'list', children: [] }
    nodes.push(list);
    Object.keys(propTable.props).forEach(propName => {
      const prop = propTable.props[propName];
      const listItem = { type: 'listItem', children: [] };
      const listItems = listItem.children;
      list.children.push(listItem);
      const propTitle = {type: 'paragraph', children: [{type: 'strong', children: [{ type: 'text', value: propName }]}]}
      listItems.push(propTitle)
      propTitle.children.push({ type: 'text', value : `${prop.required ? '' : '?'} : ` });
      propTitle.children.push({ type: 'emphasis', children: [{ type: 'text', value: prop.type.raw ||  prop.type.name }]});
      remark()
      .use(() => node => {
        listItems.push.apply(listItems, [...node.children]);
      })
      .process(prop.description);
      
    });
  }  
  return nodes;
}
function insertTypescriptDocs(options) {
  var settings = options || { path: './src' }

  return transformer

  function transformer(node) {
    const {
      propFilter = (prop) => {
        // Currently not working, prop.parent is always null.
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }

        return true;
      },
      componentNameResolver,
      shouldExtractLiteralValuesFromEnum = true,
      savePropValueAsString,
    } = settings;
  
    const parserOptions = {
      propFilter,
      componentNameResolver,
      shouldExtractLiteralValuesFromEnum,
      savePropValueAsString,
    };
    const parser = withDefaultConfig(parserOptions);

    const getDirectories = (folder, excludeFiles, repoDir, newNodes) => {
      const items = fs.readdirSync(folder, { withFileTypes: true });
      const files = items.filter(entry => !entry.isDirectory());
      for (const entry of files) {
        if (excludeFiles.indexOf(entry.name) === -1) {
          const propTables = parser.parse(path.join(folder, entry.name));
          if (propTables && propTables.length > 0) {
            propTables.forEach(propTable => {
              const propNodes = propsToMDNodes(propTable, path.join(repoDir,entry.name ));
              newNodes.push.apply(newNodes, propNodes);
            })
          }  
        }  
      };
      items.filter(entry => entry.isDirectory())
        .forEach(entry => getDirectories(path.join(folder, entry.name), excludeFiles, path.join(repoDir, entry.name), newNodes));
       
    }
    const sections = extractCustomTag(node, 'react-docgen-typescript');
    sections.forEach(({ attrs, attributes}) => {
      const file = attributes.find(attribute => attribute[0] === 'path');
      const sourcePath = file ? file[1] : './src';
      const packageJSON = JSON.parse(fs.readFileSync(path.resolve('./package.json')));
      const { repository: { directory }} = packageJSON;
      const rootRepoDir = `https://github.com/ccontrols/component-controls/blob/master/${directory}`;
      const excludeFiles = attributes.find(attribute => attribute[0] === 'exclude');
      const newNodes = [];
      getDirectories(path.resolve(sourcePath), excludeFiles ? excludeFiles[1].split(','): ['index.ts'], path.join(rootRepoDir, sourcePath), newNodes)
      inlineNewContent(attrs, newNodes);
    });  
    
  }
}  