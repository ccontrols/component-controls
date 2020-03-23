const fs = require('fs');
const path = require('path');
const remark = require('remark');
const { extractCustomTag, inlineNewContent } = require('./utils');

module.exports = insertOverview;

function insertOverview(options) {
  return transformer

  function transformer(node) {
    const sections = extractCustomTag(node, 'package-section');
    sections.forEach(({ attrs, attributes}) => {
      const file = attributes.find(attribute => attribute[0] === 'file');
      const sectionAttr = attributes.find(attribute => attribute[0] === 'section');
      const sectionName = sectionAttr ? sectionAttr[1].toLowerCase() : 'overview';
      const content = fs.readFileSync(file[1], 'utf8');
      const overviewNodes = [];
      const packageJSONFilename = path.resolve(path.join(path.dirname(file[1]), 'package.json'));
      if (fs.existsSync(packageJSONFilename)) {
        const packageJSON = JSON.parse(fs.readFileSync(packageJSONFilename));
        
        const { name, description, repository: { directory }} = packageJSON;
        const rootRepoDir = `https://github.com/ccontrols/component-controls/blob/master/${directory}`;
        overviewNodes.push({
          type: 'heading',
          depth: 2,
          children: [
            { type: 'link', url: rootRepoDir, children: [
              { type: 'text', value: name}
            ]}
          ]
        });
        overviewNodes.push({
          type: 'paragraph',
          children: [
              { type: 'text', value: description}
          ]
        });

      }
      remark()
        .use(() => sectionNode => {
          let foundDepth = 0;
          
          for (const section of sectionNode.children) {
            if (section.type === 'heading')  {
              if (section.children.length > 0 && section.children[0].type === 'text' && section.children[0].value.toLowerCase() === sectionName) {
                foundDepth = section.depth;
              } else if (foundDepth >= section.depth) {
                break;
              } else if (foundDepth > 0) {
                overviewNodes.push(section)
              }
            }
            else if (foundDepth > 0) {
              overviewNodes.push(section)
            }
          }
        })
        .process(content);
      inlineNewContent(attrs, overviewNodes);
       
    })
  }
}