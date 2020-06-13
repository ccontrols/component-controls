/** @jsx jsx */
import { FC, ReactNode, useRef } from 'react';
import { jsx, Box, Flex } from 'theme-ui';
import * as qs from 'qs';
import { Tabs, Tab, TabList, TabPanel } from '@component-controls/components';
import { PageContainer, useStoryContext } from '@component-controls/blocks';

import { SideContext } from '../SideContext';
import { Sidebar } from '../Sidebar';
export interface PageConfig {
  key: string;
  title: string;
  render: () => ReactNode;
}

export type PagesConfig = (route: string) => PageConfig[];

export interface DocPageProps {
  pagesFn: PagesConfig;
}
export const BasePage: FC<DocPageProps> = ({ pagesFn }) => {
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
    <Flex sx={{ flex: '1 0 auto' }}>
      <Sidebar />
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

          <PageContainer sx={{ maxWidth: '1200px' }} ref={pageRef}>
            {pages &&
              pages.map(page => (
                <TabPanel key={`panel_${page.key}`}>{page.render()}</TabPanel>
              ))}
          </PageContainer>
        </Tabs>
      </Box>
      <SideContext pageRef={pageRef} />
    </Flex>
  );
};

export const DocPage: FC<DocPageProps> = props => {
  const { doc } = useStoryContext({ id: '.' });
  if (doc && doc.fullPage && doc.MDXPage) {
    return (
      <PageContainer
        sx={{ flex: '1 0 auto', maxWidth: '100%', p: 0 }}
        id="content"
      />
    );
  }
  return <BasePage {...props} />;
};
