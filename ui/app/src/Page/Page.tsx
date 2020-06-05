/** @jsx jsx */
import { FC, ReactNode, Fragment, useRef } from 'react';
import { jsx, Container } from 'theme-ui';
import * as qs from 'qs';
import { Tabs, Tab, TabList, TabPanel } from '@component-controls/components';
import { PageContainer, useStoryContext } from '@component-controls/blocks';
import { SideContext } from '../SideContext';
export interface PageConfig {
  key: string;
  title: string;
  render: () => ReactNode;
}

export type PagesConfig = (route: string) => PageConfig[];

export interface PageProps {
  pagesFn: PagesConfig;
}
export const BasePage: FC<PageProps> = ({ pagesFn }) => {
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
    <Fragment>
      <Container sx={{ flex: 1 }}>
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

          <PageContainer maxWidth={1200} ref={pageRef}>
            {pages &&
              pages.map(page => (
                <TabPanel key={`panel_${page.key}`}>{page.render()}</TabPanel>
              ))}
          </PageContainer>
        </Tabs>
      </Container>
      <SideContext pageRef={pageRef} />
    </Fragment>
  );
};

export const Page: FC<PageProps> = props => {
  const { doc } = useStoryContext({ id: '.' });
  if (doc && doc.fullPage && doc.MDXPage) {
    return <PageContainer maxWidth="100%" padding={0} />;
  }
  return <BasePage {...props} />;
};
