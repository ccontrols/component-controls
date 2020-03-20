import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: {
    Tab,
    TabList,
    TabPanel,
  },
};

const tabs: {
  [key: string]: string;
} = {
  'panel 1': 'panel 1',
  'panel 2': 'panel 2',
};
export const overview = () => {
  return (
    <Tabs>
      <TabList>
        {Object.keys(tabs).map(key => (
          <Tab key={`tab_${key}`}>{key}</Tab>
        ))}
      </TabList>
      {Object.keys(tabs).map(key => (
        <TabPanel key={`panel_${key}`}>{tabs[key]}</TabPanel>
      ))}
    </Tabs>
  );
};
