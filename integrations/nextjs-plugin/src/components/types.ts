import { ReactNode } from 'react';

export interface PageConfig {
  key: string;
  title: string;
  render: () => ReactNode;
}

export type PagesConfig = (route: string) => PageConfig[];
