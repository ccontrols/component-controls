import React, { FC, ComponentClass } from 'react';
import styled from '@emotion/styled';
import { Theme } from 'theme-ui';
import {
  Tab as OriginalTab,
  TabProps,
  Tabs as OriginalTabs,
  TabsProps,
  TabList as OriginalTabList,
  TabListProps,
  TabPanel as OriginalTabPanel,
  TabPanelProps,
  resetIdCounter,
} from 'react-tabs';

export { resetIdCounter as resetTabCounter };
/**
 * Tab heading - you should specify the title/label string as the children property. To be created inside the `<TabList />` component through the children prop.
 */
export const Tab: ComponentClass<TabProps> = OriginalTab;

/**
 * Container for `<Tab />` headings, to be created inside the `<Tabs />` component. The list of `<Tab />` components should be passed as the children prop. */
export const TabList: ComponentClass<TabListProps> = OriginalTabList;

/**
 * Panel body container, to be created inside the `<Tabs />` component through the children prop.
 */
export const TabPanel: ComponentClass<TabPanelProps> = OriginalTabPanel;

interface TabsContainerProps {
  fontSize?: number | string;
}
const TabsContainer = styled.div`
  ${({ theme, fontSize = 13 }: { theme?: Theme } & TabsContainerProps) => `
    .react-tabs {
      -webkit-tap-highlight-color: transparent;
    }
    .react-tabs__tab-list {
      margin: 0 0 10px;
      padding: 0;
    }
    .react-tabs__tab {
      font-size: ${typeof fontSize === 'string' ? fontSize : `${fontSize}px`};
      font-weight: bold;
      display: inline-block;
      border-bottom: none;
      bottom: -1px;
      position: relative;
      list-style: none;
      padding: 4px 10px;
      margin-left: 4px;
      margin-right: 4px;
      cursor: pointer;
      color: ${theme?.colors?.fadedText};
    }
    .react-tabs__tab--selected {
      border-bottom: 3px solid ${theme?.colors?.primary};
      color: ${theme?.colors?.primary};
    }
    .react-tabs__tab--disabled {
      color: GrayText;
      cursor: default;
    }
    .react-tabs__tab:focus {
      box-shadow: 0 0 5px hsl(208, 99%, 50%);
      border-color: hsl(208, 99%, 50%);
      outline: none;
    }
    .react-tabs__tab:focus:after {
      content: "";
      position: absolute;
      height: 5px;
      left: -4px;
      right: -4px;
      bottom: -5px;
      background: #fff;
    }
    .react-tabs__tab-panel {
      display: none;
    }
    .react-tabs__tab-panel.react-tabs__tab-panel--selected {
      display: block;
    }
  `}
`;

type OwnTabsProps = TabsContainerProps & Omit<TabsProps, 'ref'>;
/**
 * Create tabs and multi-page ui layouts. Uses [react-tabs](https://reactcommunity.org/react-tabs/) component.
 *
 */
export const Tabs: FC<OwnTabsProps> = ({ fontSize, ...props }) => {
  return (
    <TabsContainer fontSize={fontSize}>
      <OriginalTabs {...props} />
    </TabsContainer>
  );
};
