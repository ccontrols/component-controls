/** @jsx jsx */
import { FC, useRef, useContext } from 'react';
import { jsx, Box } from 'theme-ui';
import { PageType, TabConfiguration } from '@component-controls/core';
import { BlockContext } from '@component-controls/blocks';
import * as pages from '@component-controls/pages';
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

export interface DocPageProps {
  /**
   * page type
   */
  type: PageType;
  /**
   * active page tab
   */
  activeTab?: string;
}

/**
 * document page - rendering with sidebars and tabs for multiple document views
 */
export const SidebarsStoryPage: FC<DocPageProps> = ({ type, activeTab }) => {
  const { storeProvider, docId } = useContext(BlockContext);
  const pageConfig = storeProvider?.config?.pages?.[type] || {};
  const { tabs = [] } = pageConfig;
  const selectedTab = activeTab
    ? activeTab
    : tabs.length > 0
    ? tabs[0].route
    : undefined;
  const pageRef = useRef<HTMLDivElement>(null);
  const tabIndex = Math.max(
    tabs.findIndex(tab => tab.route === selectedTab),
    0,
  );
  const renderTab = (tab: TabConfiguration) => {
    if (tab.render) {
      return tab.render({ storeProvider, docId });
    }
    if (tab.type) {
      //@ts-ignore
      const Page = pages[tab.type];
      if (Page) {
        return <Page />;
      }
    }
    return null;
  };
  return (
    <Box variant="appsidebarpage.storycontainer">
      <Sidebar type={type} activeTab={activeTab} />
      <Box sx={{ flexGrow: 1 }} id="content">
        <Tabs fontSize={2} defaultIndex={tabIndex}>
          {tabs && tabs.length > 1 && (
            <TabList>
              {tabs.map((tab, tabIndex) => (
                <Tab key={`tab_${tab.route}`}>
                  <Link
                    href={
                      docId
                        ? storeProvider.getPagePath(
                            type,
                            docId,
                            tabIndex > 0 ? tab.route : undefined,
                          )
                        : '#'
                    }
                  >
                    {tab.title}
                  </Link>
                </Tab>
              ))}
            </TabList>
          )}

          <PageContainer
            type={type}
            variant={`pagecontainer.${type}`}
            ref={pageRef}
          >
            {tabs &&
              tabs.map((tab, index) => (
                <TabPanel key={`panel_${tab.route}`}>
                  {tabIndex === index ? renderTab(tab) : null}
                </TabPanel>
              ))}
          </PageContainer>
        </Tabs>
      </Box>
      <SideContext pageRef={pageRef} />
    </Box>
  );
};
