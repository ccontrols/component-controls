import React, { useState } from 'react';
import { Box, Badge, Input } from 'theme-ui';
import { Example } from '@component-controls/core';
import {
  InboxIcon,
  MailIcon,
  FlameIcon,
  FileCodeIcon,
  TagIcon,
  TrashcanIcon,
  StarIcon,
  TriangleDownIcon,
  TriangleRightIcon,
} from '@primer/octicons-react';
import { Tree } from '.';

export default {
  title: 'Components/Tree',
  component: Tree,
};

export const overview: Example = () => (
  <Box css={{ width: 200 }}>
    <Tree
      activeItem={{ id: 'c_drive' }}
      items={[
        {
          id: 'local',
          label: 'Local',
          items: [
            { id: 'c_drive', href: '/c_drive', label: 'C: drive' },
            {
              id: 'f_drive',
              onClick: () => console.log('onClick'),
              label: 'F: drive',
            },
          ],
        },
        {
          id: 'cloud',
          label: 'Cloud',
          items: [
            { id: 'drop_box', href: '/drop_box', label: 'DropBox' },
            {
              id: 'google_drive',
              onClick: () => console.log('onClick'),
              label: 'Google drive',
            },
          ],
        },
      ]}
    />
  </Box>
);

const navItems = [
  {
    id: 'inbox',
    label: 'Inbox',
    icon: <InboxIcon />,
    expanded: true,
    items: [
      {
        id: 'all',
        href: '/inbox/all',
        label: 'All',
        widget: <Badge variant="circle">10</Badge>,
      },
      {
        id: 'gmail',
        href: '/inbox/gmail',
        label: 'GMail',
        widget: <Badge variant="circle">8</Badge>,
      },
      {
        id: 'work',
        href: '/inbox/work',
        label: 'Work',
        widget: <Badge variant="circle">1</Badge>,
      },
      {
        id: 'amazon',
        href: '/inbox/amazon',
        label: 'Amazon',
        widget: <Badge variant="circle">1</Badge>,
      },
    ],
  },
  {
    id: 'sent',
    href: '/inbox/sent',
    label: 'Sent',
    icon: <MailIcon />,
  },
  {
    id: 'flagged',
    href: '/inbox/flagged',
    label: 'Flagged',
    icon: <FlameIcon />,
    widget: <Badge variant="accent">3</Badge>,
  },
  {
    id: 'starred',
    href: '/inbox/starred',
    label: 'Starred',
    icon: <StarIcon />,
  },
  {
    id: 'drafts',
    href: '/inbox/drafts',
    label: 'Drafts',
    icon: <FileCodeIcon />,
  },
  {
    id: 'tagged',
    href: '/inbox/tagged',
    label: 'Tagged',
    icon: <TagIcon />,
  },
  {
    id: 'trash',
    href: '/inbox/trash',
    label: 'Trash',
    icon: <TrashcanIcon />,
  },
];

export const items: Example = () => (
  <Box css={{ width: 250 }}>
    <Tree activeItem={{ id: 'all' }} items={navItems} />
  </Box>
);

export const search: Example = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);

  return (
    <Box css={{ width: 250 }}>
      <Input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Tree search={search} activeItem={{ id: 'all' }} items={navItems} />
    </Box>
  );
};

export const largeIndentation: Example = () => (
  <Box css={{ width: 250 }}>
    <Tree activeItem={{ id: 'all' }} items={navItems} indentPixels={24} />
  </Box>
);

export const customExpandIcons: Example = () => (
  <Box css={{ width: 250 }}>
    <Tree
      activeItem={{ id: 'all' }}
      items={navItems}
      iconExpanded={<TriangleDownIcon />}
      iconCollapsed={<TriangleRightIcon />}
    />
  </Box>
);

export const arrowsStart: Example = () => (
  <Box css={{ width: 250 }}>
    <Tree activeItem={{ id: 'all' }} items={navItems} arrowPosition="start" />
  </Box>
);
