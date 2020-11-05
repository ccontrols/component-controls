import { RunConfiguration } from '@component-controls/core';

import * as appleTouchIcon from './media/apple-touch-icon.png';
import * as favIcon32 from './media/favicon-32x32.png';
import * as favIcon16 from './media/favicon-16x16.png';
import * as favIcon192 from './media/android-chrome-192x192.png';
import * as favIcon512 from './media/android-chrome-512x512.png';
import * as pinnedTab from './media/safari-pinned-tab.svg';

export const defaultLinks: RunConfiguration['links'] = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: appleTouchIcon.default,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: favIcon32.default,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: favIcon16.default,
  },
  {
    rel: 'icon',
    sizes: '192x192',
    href: favIcon192.default,
  },
  {
    rel: 'icon',
    sizes: '512x512',
    href: favIcon512.default,
  },
  {
    rel: 'mask-icon',
    color: '#5bbad5',
    href: pinnedTab.default,
  },
];
