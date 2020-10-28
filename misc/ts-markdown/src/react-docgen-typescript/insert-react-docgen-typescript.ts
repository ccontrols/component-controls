import remark from 'remark';
import {
  withDefaultConfig,
  ComponentDoc,
  PropItem as RDPropItem,
  ParserOptions,
} from 'react-docgen-typescript';
import { PropItem, createPropsTable } from '../blocks/props-table';
import { Settings, Node } from '../common/types';
import {
  extractCustomTag,
  inlineNewContent,
  traverseDirs,
} from '../common/utils';

const propsToMDNodes = (propTable: ComponentDoc, repoFileName: string) => {
  const nodes: Node[] = [];
  nodes.push({
    type: 'heading',
    depth: 2,
    children: [
      { type: 'html', value: '<ins>' },
      { type: 'text', value: propTable.displayName },
      { type: 'html', value: '</ins>' },
    ],
  });

  remark()
    .use(() => (node: Node) => {
      if (node.children) {
        nodes.push(...node.children);
      }
    })
    .process(propTable.description);

  nodes.push({
    type: 'paragraph',
    children: [
      {
        type: 'emphasis',
        children: [
          { type: 'text', value: propTable.displayName },
          { type: 'text', value: ' ' },
          {
            type: 'link',
            url: repoFileName,
            children: [{ type: 'text', value: 'source code' }],
          },
        ],
      },
    ],
  });
  if (Object.keys(propTable.props).length) {
    const props: PropItem[] = Object.keys(propTable.props).map(propName => {
      const prop = propTable.props[propName];
      return {
        name: propName,
        isOptional: !prop.required,
        type: [
          {
            type: 'emphasis',
            children: [
              { type: 'text', value: prop.type.raw || prop.type.name },
            ],
          },
        ],
        description: prop.description,
      };
    });
    const { propsTable } = createPropsTable('properties', props);
    // eslint-disable-next-line prefer-spread
    nodes.push(...propsTable);
  }
  return nodes;
};
export const insertReactDocgenTypescript = (
  settings: Settings = { path: './src' },
) => {
  return (node: Node): void => {
    const {
      propFilter = (prop: RDPropItem) => {
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
      sections.forEach(({ attrs, attributes }) => {
        const newNodes: Node[] = [];
        traverseDirs(attributes, (name, fileName, repoFolder) => {
          const propTables = parser.parse(fileName);
          if (propTables && propTables.length > 0) {
            propTables.forEach(propTable => {
              const propNodes = propsToMDNodes(
                propTable,
                `${repoFolder}/${name}`,
              );
              // eslint-disable-next-line prefer-spread
              newNodes.push(...propNodes);
            });
          }
        });
        inlineNewContent(attrs, newNodes);
      });
    }
  };
};
