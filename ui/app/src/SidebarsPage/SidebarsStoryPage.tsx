/** @jsx jsx */
import { FC, ComponentType, useRef } from 'react';
import { jsx, Box } from 'theme-ui';
import { DocType, TabConfiguration, Document } from '@component-controls/core';
import {
  useActiveTab,
  useGetDocumentPath,
  useConfig,
  useCurrentStory,
  useGetStoryPath,
} from '@component-controls/store';
import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  Link,
} from '@component-controls/components';
import { PageContainer } from '../PageContainer';
import { SideContext } from '../SideContext';
import { Sidebar } from '../Sidebar';
import { docToVariant } from './docToVariant';

export interface DocPageProps {
  /**
   * document type
   */
  type: DocType;
  /**
   * document object
   */
  doc: Document;
}

/**
 * document page - rendering with sidebars and tabs for multiple document views
 */
export const SidebarsStoryPage: FC<DocPageProps> = ({ type, doc }) => {
  const docId = doc.title;
  const story = useCurrentStory();
  const config = useConfig();
  const getDocumentPath = useGetDocumentPath();
  const getStoryPath = useGetStoryPath();
  const activeTab = useActiveTab();
  const pageConfig = config.pages?.[type] || {};
  const { tabs = [] } = pageConfig;
  const selectedTab = activeTab
    ? activeTab
    : tabs.length > 0
    ? tabs[0].route
    : undefined;
  const pageRef = useRef<HTMLDivElement>(null);
  const tabIndex = Math.max(
    tabs.findIndex(tab => {
      const route = tab.route || (tab.title ? tab.title.toLowerCase() : '');
      return route === selectedTab;
    }),
    0,
  );
  const renderTab = (tab: TabConfiguration) => {
    if (tab.template) {
      const Page = tab.template as ComponentType;
      if (Page) {
        return <Page />;
      }
    }
    return null;
  };
  return (
    <Box variant={docToVariant(doc)}>
      {doc.navSidebar && <Sidebar type={type} />}
      <Box sx={{ flexGrow: 1 }} id="content">
        <Tabs fontSize={2} defaultIndex={tabIndex}>
          {tabs && tabs.length > 1 && (
            <TabList>
              {tabs.map((tab, tabIndex) => {
                const route =
                  tab.route || (tab.title ? tab.title.toLowerCase() : '');
                return (
                  <Link
                    key={`tab_${route}`}
                    href={
                      story && story.id
                        ? getStoryPath(
                            story.id,
                            tabIndex > 0 ? route : undefined,
                          )
                        : docId
                        ? getDocumentPath(
                            type,
                            docId,
                            tabIndex > 0 ? route : undefined,
                          )
                        : '#'
                    }
                  >
                    <Tab>{tab.title}</Tab>
                  </Link>
                );
              })}
            </TabList>
          )}

          <PageContainer
            type={type}
            variant={`pagecontainer.${type}`}
            ref={pageRef}
          >
            {tabs &&
              (tabs.length === 1
                ? renderTab(tabs[0])
                : tabs.map((tab, index) => {
                    const route =
                      tab.route || (tab.title ? tab.title.toLowerCase() : '');
                    return (
                      <TabPanel key={`panel_${route}`}>
                        {tabIndex === index ? renderTab(tab) : null}
                      </TabPanel>
                    );
                  }))}
          </PageContainer>
        </Tabs>
      </Box>
      {doc.contextSidebar && <SideContext pageRef={pageRef} />}
    </Box>
  );
};
