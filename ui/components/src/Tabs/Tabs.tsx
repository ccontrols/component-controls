/** @jsx jsx */
import { FC, ComponentClass } from 'react';
import { jsx, Box } from 'theme-ui';
import {
  Tab as OriginalTab,
  TabProps,
  Tabs as OriginalTabs,
  TabsProps as OriginalTabsProps,
  TabList as OriginalTabList,
  TabListProps,
  TabPanel as OriginalTabPanel,
  TabPanelProps,
  resetIdCounter,
} from 'react-tabs';

export const resetTabCounter = resetIdCounter;
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

export interface TabsOwnProps {
  fontSize?: number | string;
}

type TabsProps = TabsOwnProps & Omit<OriginalTabsProps, 'ref'>;

/**
 * Tabs component with [react-tabs](https://reactcommunity.org/react-tabs/) and theme-ui styling.
 *
 */
export const Tabs: FC<TabsProps> = ({ fontSize = 1, ...props }) => {
  return (
    <Box
      variant="tabs"
      sx={{
        '.react-tabs__tab': {
          fontSize,
        },
      }}
    >
      <OriginalTabs {...props} />
    </Box>
  );
};
