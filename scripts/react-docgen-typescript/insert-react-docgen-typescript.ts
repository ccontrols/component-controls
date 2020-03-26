import path from 'path';
import remark from 'remark';
import {
  withDefaultConfig,
  ComponentDoc,
  PropItem,
  ParserOptions,
} from 'react-docgen-typescript';
import { Settings, Node, NodeChildren } from '../common/types';
import { extractCustomTag, inlineNewContent, traverseDirs }from '../common/utils';

const propsToMDNodes = (propTable: ComponentDoc, repoFileName: string) => {
  const nodes: Node[] = [];
  nodes.push({ type: 'heading', depth: 2, children: [
    { type: 'html', value: '<ins>' },
    { type: 'text', value: propTable.displayName },
    { type: 'html', value: '</ins>' },
  ]});
  
  remark()
      .use(() => (node: Node) => {
        if (node.children) {
          nodes.push.apply(nodes, [...node.children]);
        }  
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
    const list: NodeChildren = { type: 'list', children: [] }
    nodes.push(list);
    Object.keys(propTable.props).forEach(propName => {
      const prop = propTable.props[propName];
      const listItem: NodeChildren = { type: 'listItem', children: [] };
      const listItems: Node[] = listItem.children;
      list.children.push(listItem);
      const propTitle: NodeChildren = {type: 'paragraph', children: [{type: 'strong', children: [{ type: 'text', value: propName }]}]}
      listItems.push(propTitle)
      propTitle.children.push({ type: 'text', value : `${prop.required ? '' : '?'} : ` });
      propTitle.children.push({ type: 'emphasis', children: [{ type: 'text', value: prop.type.raw ||  prop.type.name }]});
      remark()
      .use(() => (node: Node) => {
        if (node.children) {
          listItems.push.apply(listItems, [...node.children]);
        }  
      })
      .process(prop.description);
      
    });
  }  
  return nodes;
}
export const insertReactDocgenTypescript = (settings: Settings = { path: './src' }) =>{
  return  (node: Node ) => {
    const {
      propFilter = (prop: PropItem) => {
        // Currently not working, prop.parent is always null.
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }

        return true;
      },
      componentNameResolver,
      shouldExtractLiteralValuesFromEnum = true,
      savePropValueAsString,
    } = settings as ParserOptions;
  
    const parserOptions: ParserOptions = {
      propFilter,
      componentNameResolver,
      shouldExtractLiteralValuesFromEnum,
      savePropValueAsString,
    };
    const parser = withDefaultConfig(parserOptions);

    const sections = extractCustomTag(node, 'react-docgen-typescript');
    if (sections) {
      sections.forEach(({ attrs, attributes}) => {
        const newNodes: Node[] = [];
        traverseDirs(attributes, ( name, fileName, repoFolder ) => {
          const propTables = parser.parse(fileName);
          if (propTables && propTables.length > 0) {
            propTables.forEach(propTable => {
              const propNodes = propsToMDNodes(propTable, path.join(repoFolder,name ));
              newNodes.push.apply(newNodes, propNodes);
            })
          }  
  
        })
        inlineNewContent(attrs, newNodes);
      });  
    }  
  }
}  