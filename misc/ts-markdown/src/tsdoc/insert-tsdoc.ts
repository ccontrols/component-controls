/* eslint-disable prefer-spread */
import path from 'path';
import { Node } from '../common/types';
import { extractCustomTag, inlineNewContent } from '../common/utils';
import { extractTSDoc } from './extract-tsdoc';

export const insertTSDoc = (): ((node: Node) => void) => {
  const resolve = (file: string): string => {
    if (file.startsWith('.')) {
      return path.join(path.resolve('./'), file);
    }
    return require.resolve(file);
  };
  return (node: Node): void => {
    const sections = extractCustomTag(node, 'tsdoc-typescript');
    if (sections) {
      sections.forEach(({ attrs, attributes }) => {
        if (attributes) {
          const newNodes: Node[] = [];
          const files = attributes.find(attribute => attribute[0] === 'files');
          const mappings = attributes.find(
            attribute => attribute[0] === 'map',
          ) || ['', ''];
          const linkMaps = mappings[1].split(',').reduce((acc, l) => {
            const s = l.split('|');
            if (s.length === 2) {
              return { ...acc, [s[0].trim()]: s[1].trim() };
            }
            return acc;
          }, {});
          const entry = attributes.find(attribute => attribute[0] === 'entry');

          if (entry) {
            const fileNames = files ? files[1].split(',').filter(s => s) : [];
            const entryNames = entry ? entry[1].split(',').filter(s => s) : [];
            fileNames.push(...entryNames);
            const tsNodes = extractTSDoc(
              fileNames.map(file => resolve(file)),
              entryNames.map(file => resolve(file)),
              linkMaps,
            );
            if (tsNodes) {
              newNodes.push(...tsNodes);
            }
            // console.log(tsdocs);
          }
          inlineNewContent(attrs, newNodes);
        }
      });
    }
  };
};
