import React from 'react';
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
} from '@primer/octicons-react';
import { Navmenu } from '.';

export default {
  title: 'Components/Navmenu',
  component: Navmenu,
};

export const overview: Example = () => (
  <Box css={{ width: 200 }}>
    <Navmenu
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
    <Navmenu activeItem={{ id: 'all' }} items={navItems} />
  </Box>
);

export const search: Example = () => {
  const [search, setSearch] = React.useState<string | undefined>(undefined);

  return (
    <Box css={{ width: 250 }}>
      <Input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Navmenu search={search} activeItem={{ id: 'all' }} items={navItems} />
    </Box>
  );
};
