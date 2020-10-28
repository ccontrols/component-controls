import fs from 'fs';
import path from 'path';
import remark from 'remark';
import { Node } from '../common/types';
import { extractCustomTag, inlineNewContent } from '../common/utils';

export const insertOverview = () => {
  return (node: Node): void => {
    const sections = extractCustomTag(node, 'package-section');
    if (sections) {
      sections.forEach(({ attrs, attributes }) => {
        if (attributes) {
          const file = attributes.find(attribute => attribute[0] === 'file');
          const sectionAttr = attributes.find(
            attribute => attribute[0] === 'section',
          );
          const sectionName = sectionAttr
            ? sectionAttr[1].toLowerCase()
            : 'overview';
          if (file) {
            const content = fs.readFileSync(file[1], 'utf8');
            const overviewNodes = [];
            const packageJSONFilename = path.resolve(
              path.join(path.dirname(file[1]), 'package.json'),
            );
            if (fs.existsSync(packageJSONFilename)) {
              const packageJSON = JSON.parse(
                fs.readFileSync(packageJSONFilename, 'utf8'),
              );
              const {
                name,
                description,
                repository: { directory },
              } = packageJSON;
              const rootRepoDir = `https://github.com/ccontrols/component-controls/blob/master/${directory}`;
              overviewNodes.push({
                type: 'heading',
                depth: 2,
                children: [
                  {
                    type: 'link',
                    url: rootRepoDir,
                    children: [{ type: 'text', value: name }],
                  },
                ],
              });
              overviewNodes.push({
                type: 'paragraph',
                children: [{ type: 'text', value: description }],
              });
            }
            remark()
              .use(() => (sectionNode: Node) => {
                let foundDepth = 0;
                if (sectionNode.children) {
                  for (const section of sectionNode.children) {
                    if (section.type === 'heading') {
                      if (
                        section.children &&
                        section.children.length > 0 &&
                        section.children[0].type === 'text' &&
                        section.children[0].value &&
                        section.children[0].value.toLowerCase() === sectionName
                      ) {
                        foundDepth = section.depth as number;
                      } else if (foundDepth >= (section.depth as number)) {
                        break;
                      } else if (foundDepth > 0) {
                        overviewNodes.push(section);
                      }
                    } else if (foundDepth > 0) {
                      overviewNodes.push(section);
                    }
                  }
                }
              })
              .process(content);
            inlineNewContent(attrs, overviewNodes);
          }
        }
      });
    }
  };
};
