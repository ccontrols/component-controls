import path from 'path';
import { Settings, Node } from '../types';
import { extractCustomTag, inlineNewContent } from '../utils';
import { extractTSDoc } from './extract-tsdoc';

export const insertTSDoc = (settings: Settings = { path: './src' }) => {
  const resolve = (file: string): string => {
    if (file.startsWith('.')) {
      return path.join(path.resolve('./'),file);
    }
    return require.resolve(file);
  }
  return (node: Node) => {
    const sections = extractCustomTag(node, 'tsdoc-typescript');
    if (sections) {
      sections.forEach(({ attrs, attributes}) => {
        
        if (attributes) {
          const newNodes: Node[] = [];
          const files = attributes.find(attribute => attribute[0] === 'files');
          const entry = attributes.find(attribute => attribute[0] === 'entry');
          
          if (entry) {
            const fileNames = files ? files[1].split(',').filter(s => s) : [];
            const entryNames = entry ? entry[1].split(',').filter(s => s) : [];
            fileNames.push.apply(fileNames, entryNames);
            const tsNodes = extractTSDoc(fileNames.map(file => resolve(file)), entryNames.map(file => resolve(file)));
            if (tsNodes) {
              newNodes.push.apply(newNodes, tsNodes);
            }  
            // console.log(tsdocs);
          }  
          inlineNewContent(attrs, newNodes);
        }  
      });  
    }
  }
}  