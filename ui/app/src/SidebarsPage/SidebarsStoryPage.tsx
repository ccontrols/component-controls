/** @jsx jsx */
import { FC, useRef, ReactNode } from 'react';
import { jsx, Box } from 'theme-ui';
import * as qs from 'qs';
import { PageType } from '@component-controls/core';
import { Tabs, Tab, TabList, TabPanel } from '@component-controls/components';
import { PageContainer } from '@component-controls/blocks';

import { SideContext } from '../SideContext';
import { Sidebar } from '../Sidebar';

export interface PageConfig {
  /**
   * route string
   */
  key: string;
  /**
   * title will be used as tab caption
   */
  title: string;
  /**
   * render function, returns a react component
   */
  render: () => ReactNode;
}
export interface DocPageProps {
  /**
   * custom pages
   */
  pagesFn?: (viewMode: string) => PageConfig[];
  /**
   * page type
   */
  type: PageType;
}

/**
 * document page - rendering with sidebars and tabs for multiple document views
 */
export const SidebarsStoryPage: FC<DocPageProps> = ({ pagesFn, type }) => {
  const pages = typeof pagesFn === 'function' ? pagesFn('') : [];
  const pageRef = useRef<HTMLDivElement>(null);
  const params =
    typeof window !== 'undefined'
      ? qs.parse(window.location.search.substring(1))
      : {};
  const tabIndex = Math.max(
    pages.findIndex(page => page.key === params['view']),
    0,
  );
  return (
    <Box variant="appsidebarpage.storycontainer">
      <Sidebar type={type} />
      <Box sx={{ flexGrow: 1 }} id="content">
        <Tabs
          fontSize={16}
          selectedIndex={tabIndex}
          onSelect={index => {
            const key = pages[index]?.key;
            if (key) {
              const params = qs.parse(window.location.search.substring(1));
              params['view'] = key;
              const newHREF = `${window.location.origin}${
                window.location.pathname
              }?${qs.stringify(params)}${window.location.hash}`;
              window.location.href = newHREF;
              return false;
            }
            return true;
          }}
        >
          {pages && pages.length > 1 && (
            <TabList>
              {pages.map(page => (
                <Tab key={`tab_${page.key}`}>{page.title}</Tab>
              ))}
            </TabList>
          )}

          <PageContainer variant={`pagecontainer.${type}`} ref={pageRef}>
            {pages &&
              pages.map(page => (
                <TabPanel key={`panel_${page.key}`}>{page.render()}</TabPanel>
              ))}
          </PageContainer>
        </Tabs>
      </Box>
      <SideContext pageRef={pageRef} />
    </Box>
  );
};
