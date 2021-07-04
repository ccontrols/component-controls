/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx, Box, Link, Theme } from 'theme-ui';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Multiselect,
  MultiselectItem,
} from '@component-controls/components';
import { TypeViewer } from './TypeViewer';
import { ReactDocgenTypescriptViewer } from './ReactDocgenTypescriptViewer';
import { ReactDocgenViewer } from './ReactDocgenViewer';
import { DiagnosticsViewer } from './DiagnosticsViewer';
import { useURLParamas } from '../../hooks/useUrlParams';

export const InfoContainer: FC = () => {
  const [visibleTabs, setVisibleTabs] = useURLParamas<string[]>(
    'viewer-tabs',
    [],
  );
  const [selectedTab, setSelectedTab] = useURLParamas<string>(
    'selected-tab',
    '',
  );
  const tabIndex = useMemo(() => {
    const tabIndex = visibleTabs.findIndex(name => name === selectedTab);
    if (tabIndex >= 0) {
      return tabIndex + 1;
    }
    return 0;
  }, [selectedTab, visibleTabs]);
  const items = useMemo(() => {
    const items: MultiselectItem[] = [
      {
        label: 'react-docgen-typescript',
        selected: false,
        Panel: ReactDocgenTypescriptViewer,
      },
      {
        label: 'react-docgen',
        selected: false,
        Panel: ReactDocgenViewer,
      },
      {
        label: 'diagnostics',
        selected: false,
        Panel: DiagnosticsViewer,
      },
    ];
    return items.map(item => ({
      ...item,
      selected: visibleTabs.includes(item.label),
    }));
  }, [visibleTabs]);
  const visibleItems = visibleTabs
    .map(name => {
      return items.find(item => item.label === name);
    })
    .filter(t => t) as MultiselectItem[];
  return (
    <div>
      <Box
        sx={{
          py: 2,
          mx: 3,
          display: 'flex',
          justifyContent: 'flex-end',
          borderBottom: (t: Theme): string => ` 2px solid  ${t.colors?.shadow}`,
        }}
      >
        <Multiselect
          items={items}
          onChange={item => {
            const visibleItem = visibleTabs.find(name => name === item.label);
            if (visibleItem) {
              setVisibleTabs(visibleTabs.filter(name => name !== visibleItem));
            } else {
              setVisibleTabs([...visibleTabs, item.label]);
            }
          }}
        >
          <Link href="#">select viewers</Link>
        </Multiselect>
      </Box>
      {visibleItems.length === 0 ? (
        <TypeViewer />
      ) : (
        <Tabs
          selectedIndex={tabIndex}
          onSelect={index => {
            if (index > 0 && index <= visibleTabs.length) {
              setSelectedTab(visibleTabs[index - 1]);
            } else {
              setSelectedTab('');
            }
          }}
        >
          <TabList>
            <Tab>structured-types</Tab>
            {visibleItems.map(item => (
              <Tab key={item.label}>{item.label}</Tab>
            ))}
          </TabList>
          <TabPanel>
            <TypeViewer />
          </TabPanel>
          {visibleItems.map(item => (
            <TabPanel key={item.label}>{<item.Panel />}</TabPanel>
          ))}
        </Tabs>
      )}
    </div>
  );
};
