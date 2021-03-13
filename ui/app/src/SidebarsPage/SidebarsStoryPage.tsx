/** @jsx jsx */
import { FC, useRef, useMemo } from 'react';
import { jsx, Box } from 'theme-ui';
import {
  DocType,
  TabConfiguration,
  Document,
  PageTab,
  defDocType,
} from '@component-controls/core';
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
  type?: DocType;
  /**
   * document object
   */
  doc: Document;
}

/**
 * document page - rendering with sidebars and tabs for multiple document views
 */
export const SidebarsStoryPage: FC<DocPageProps> = ({
  type = defDocType,
  doc,
}) => {
  const docId = doc.title;
  const story = useCurrentStory();
  const config = useConfig();
  const getDocumentPath = useGetDocumentPath();
  const getStoryPath = useGetStoryPath();
  const activeTab = useActiveTab();
  const pageRef = useRef<HTMLDivElement>(null);
  const pageConfig = config.pages?.[type] || {};
  const tabKeys = pageConfig.tabs || {};
  const tabs = Object.keys(tabKeys).filter(key => {
    const tab = tabKeys[key];
    return story && (!tab.isVisible || tab.isVisible({ config, doc, story }));
  });

  const { tabIndex, tabConfig } = useMemo(() => {
    const selectedTab =
      activeTab && tabs.includes(activeTab)
        ? activeTab
        : tabs?.length > 0
        ? tabs[0]
        : undefined;
    const tabIndex = Math.max(
      tabs.findIndex(route => route === selectedTab),
      0,
    );
    return {
      tabIndex,
      tabConfig: selectedTab
        ? ((pageConfig.tabs as Record<string, PageTab>)[
            selectedTab
          ] as TabConfiguration)
        : { variant: '', container: undefined },
    };
  }, [activeTab, pageConfig.tabs, tabs]);
  const renderTab = (route: string) => {
    const tab: TabConfiguration | undefined = pageConfig.tabs?.[
      route
    ] as TabConfiguration;
    if (tab.component) {
      const Page = tab.component;
      if (Page) {
        return <Page {...tab} />;
      }
    }
    return null;
  };
  return (
    <Box variant={docToVariant(doc)}>
      {doc.navSidebar && <Sidebar type={type} />}
      <Box sx={{ flexGrow: 1 }} id="content">
        <Tabs
          fontSize={2}
          selectedIndex={tabIndex}
          onSelect={() => {
            //noop
          }}
        >
          {tabs && tabs.length > 1 && (
            <TabList>
              {tabs.map((route, tabIndex) => {
                const tab = (pageConfig.tabs as Record<string, PageTab>)[
                  route
                ] as TabConfiguration;
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
            variant={
              typeof tabConfig.variant === 'string'
                ? tabConfig.variant
                : 'pagecontainer.default'
            }
            ref={pageRef}
            wrapper={tabConfig.container}
          >
            {tabs &&
              (tabs.length === 1
                ? renderTab(tabs[0])
                : tabs.map((route, index) => {
                    return (
                      <TabPanel key={`panel_${route}`}>
                        {tabIndex === index ? renderTab(route) : null}
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
