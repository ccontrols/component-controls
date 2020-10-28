import { Node, NodeChildren } from '../common/types';

export interface PropItem {
  name: string;
  isOptional: boolean;
  type: Node[];
  description: string;
}

export const createPropsRow = ({
  name,
  isOptional,
  type,
  description,
}: PropItem): NodeChildren => {
  return {
    type: 'tableRow',
    children: [
      {
        type: 'tableCell',
        children: [
          { type: 'inlineCode', value: `${name}${isOptional ? '' : '*'}` },
        ],
      },
      {
        type: 'tableCell',
        children: type,
      },
      {
        type: 'tableCell',
        children: [{ type: 'text', value: description || '' }],
      },
    ],
  };
};

export const createPropsTable = (
  title: string,
  children: PropItem[],
): { propsTable: Node[]; table?: NodeChildren } => {
  const propsTable: Node[] = [];
  let table: NodeChildren | undefined = undefined;
  if (children) {
    propsTable.push({
      type: 'paragraph',
      children: [
        {
          type: 'heading',
          depth: 3,
          children: [
            {
              type: 'text',
              value: title,
            },
          ],
        },
      ],
    });
    table = {
      type: 'table',
      children: [
        {
          type: 'tableRow',
          children: [
            { type: 'tableCell', children: [{ type: 'text', value: 'Name' }] },
            { type: 'tableCell', children: [{ type: 'text', value: 'Type' }] },
            {
              type: 'tableCell',
              children: [{ type: 'text', value: 'Description' }],
            },
          ],
        },
      ],
    };
    propsTable.push({
      type: 'paragraph',
      children: [table],
    });
    // eslint-disable-next-line prefer-spread
    table.children.push(
      ...children.map((child: PropItem) => createPropsRow(child)),
    );
  }
  return { propsTable, table };
};
