import fs from 'fs';
import path from 'path';
import { Node, AttrsArg, SectionArg, TraverseCallback } from './types';
import { getRepoPath } from './package-info';

const cleanQuotes = (txt: string): string =>
  txt ? txt.replace(/['"]+/g, '') : txt;

export const extractCustomTag = (
  node: Node,
  tagName: string,
): SectionArg[] | undefined => {
  const nodes =
    node.children &&
    node.children.filter(
      (child: Node) =>
        child.type === 'html' &&
        child.value &&
        child.value.startsWith(`<${tagName}`),
    );
  return nodes
    ? nodes
        .map((section: Node) => ({
          section,
          match: section.value
            ? section.value.match(
                /(\w+)\s*=\s*((["'])(.*?)\3|([^>\s]*)(?=\s|\/>))(?=[^<]*>)/g,
              )
            : undefined,
        }))
        .map(
          ({ section, match }: { section: Node; match?: string[] | null }) => ({
            attrs: { section, tagName, node },
            attributes: match
              ? match.map((m: string) =>
                  m.split('=').map(value => cleanQuotes(value)),
                )
              : undefined,
          }),
        )
    : undefined;
};

export const inlineNewContent = (
  { section, tagName, node }: AttrsArg,
  newContent: Node[],
): void => {
  const startTag = `<!-- START-${tagName.toUpperCase()} -->`;
  const endTag = `<!-- END-${tagName.toUpperCase()} -->`;
  const index = node.children ? node.children.indexOf(section) : -1;
  if (index === -1) {
    return;
  }
  let deleteNodes = 0;
  let foundComment = false;
  if (node.children) {
    for (let i = index + 1; i < node.children.length; i += 1) {
      const childNode = node.children[i];
      if (childNode.type == 'html' && childNode.value == startTag) {
        foundComment = true;
      }
      if (foundComment) {
        deleteNodes += 1;
      }
      if (
        childNode &&
        childNode.type == 'html' &&
        (childNode.value == endTag ||
          (childNode.value &&
            childNode.value.toLowerCase().startsWith(`<${tagName}`)))
      ) {
        break;
      }
    }
    node.children.splice(
      index + 1,
      deleteNodes,
      ...[
        {
          type: 'html',
          value: startTag,
        },
        ...newContent,
        {
          type: 'html',
          value: endTag,
        },
      ],
    );
  }
};

export const traverseDirs = (
  attributes: string[][] | undefined,
  callback: TraverseCallback,
): void => {
  const getDirectories = (
    folder: string,
    excludeFiles: string[],
    repoDir: string,
    newNodes: Node[],
  ) => {
    const items = fs
      .readdirSync(folder, { withFileTypes: true })
      .filter(
        entry =>
          !excludeFiles.some(excluded =>
            entry.name.match(new RegExp(excluded)),
          ),
      );
    const files = items.filter(entry => !entry.isDirectory());
    for (const entry of files) {
      callback(entry.name, path.join(folder, entry.name), repoDir);
    }
    items
      .filter(entry => entry.isDirectory())
      .forEach(entry =>
        getDirectories(
          path.join(folder, entry.name),
          excludeFiles,
          `${repoDir}/${entry.name}`,
          newNodes,
        ),
      );
  };
  if (attributes) {
    const file = attributes.find(attribute => attribute[0] === 'path');
    const sourcePath = file ? file[1] : './src';
    const { repo = '' } = getRepoPath(sourcePath) || {};

    const excludeFiles = attributes.find(
      attribute => attribute[0] === 'exclude',
    );
    const newNodes: Node[] = [];
    const url = new URL(repo);
    getDirectories(
      path.resolve(sourcePath),
      excludeFiles ? excludeFiles[1].split(',') : ['index.ts'],
      `${url.origin}${path.join(url.pathname, sourcePath)}`,
      newNodes,
    );
  }
};
