
const cleanQuotes = (txt) => (txt ? txt.replace(/['"]+/g, '') : txt);

const extractCustomTag = (node, tagName) => {
  const nodes = node.children.filter(child => child.type ==='html' && child.value.startsWith(`<${tagName}`));
 return nodes.map(section => ({ section, match: section.value.match(/(\w+)\s*=\s*((["'])(.*?)\3|([^>\s]*)(?=\s|\/>))(?=[^<]*>)/g) }))
      .map(({ section, match }) => ({ attrs: { section, tagName, node }, attributes: match.map(match => match.split('=').map(value => cleanQuotes(value)))}));
}

const inlineNewContent = ({section, tagName, node}, newContent) => {
  const startTag = `<!-- START-${tagName.toUpperCase()} -->`;
  const endTag = `<!-- END-${tagName.toUpperCase()} -->`;
  const index = node.children.indexOf(section);
  if (index === -1) {
    return;
  }
  let deleteNodes = 0;
  let foundComment = false;
  for (let i = index + 1; i < node.children.length; i +=1) {
    const childNode = node.children[i];
    if (childNode.type == 'html' && childNode.value == startTag) {
      foundComment = true;
    }
    if (foundComment) {
      deleteNodes += 1;
    }
    if (childNode.type == 'html' && (childNode.value == endTag || childNode.value.toLowerCase().startsWith(`<${tagName}`))) {
      break;
    }
  }
  node.children.splice(index + 1, deleteNodes, ...[
    {
      type:'html',
      value: startTag
    },
    ...newContent, {
    type:'html',
    value: endTag
  }]); 

}
module.exports.extractCustomTag = extractCustomTag;
module.exports.inlineNewContent = inlineNewContent;