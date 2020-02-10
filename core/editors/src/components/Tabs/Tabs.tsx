import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Theme } from 'theme-ui';
import {
  Tab,
  Tabs as OriginalTabs,
  TabsProps,
  TabList,
  TabPanel,
} from 'react-tabs';

const TabsContainer = styled.div`
  ${({ theme }: { theme: Theme }) => `
    .react-tabs {
      -webkit-tap-highlight-color: transparent;
    }
    .react-tabs__tab-list {
      margin: 0 0 10px;
      padding: 0;
    }
    .react-tabs__tab {
      font-size: 13px;
      font-weight: bold;
      display: inline-block;
      border-bottom: none;
      bottom: -1px;
      position: relative;
      list-style: none;
      padding: 4px 15px;
      cursor: pointer;
      color: ${theme?.colors?.fadedText};
    }
    .react-tabs__tab--selected {
      border-bottom: 3px solid ${theme?.colors?.accent};
      color: ${theme?.colors?.accent};
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

const Tabs: FC<TabsProps> = (props: TabsProps) => (
  <TabsContainer>
    <OriginalTabs {...props} />
  </TabsContainer>
);
export { Tab, Tabs, TabList, TabPanel };
