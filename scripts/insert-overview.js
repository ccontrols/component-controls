const fs = require('fs');
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
      remark()
        .use(() => sectionNode => {
          let foundDepth = 0;
          
          for (const section of sectionNode.children) {
            if (section.type === 'heading')  {
              if (section.children.length > 0 && section.children[0].type === 'text' && section.children[0].value.toLowerCase() === sectionName) {
                foundDepth = section.depth;
              } else if (foundDepth >= section.depth) {
                break;
              }
            }
            if (foundDepth > 0) {
              overviewNodes.push(section)
            }
          }
        })
        .process(content);
      inlineNewContent(attrs, overviewNodes);
       
    })
  }
}