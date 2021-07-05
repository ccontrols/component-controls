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
import { DataViewer } from './DataViewer';
import { useURLParamas } from '../../hooks/useUrlParams';

export const InfoContainer: FC = () => {
  const [visibleTabs, setVisibleTabs] = useURLParamas<string[]>('viewer-tabs', [
    'structured-types',
  ]);
  const [selectedTab, setSelectedTab] = useURLParamas<string>(
    'selected-tab',
    '',
  );
  const tabIndex = useMemo(() => {
    return Math.max(
      0,
      visibleTabs.findIndex(name => name === selectedTab),
    );
  }, [selectedTab, visibleTabs]);
  const items = useMemo(() => {
    const items: MultiselectItem[] = [
      {
        label: 'structured-types',
        selected: true,
        link:
          'https://github.com/ccontrols/component-controls/tree/master/misc/structured-types',
        Panel: TypeViewer,
      },
      {
        label: 'react-docgen-typescript',
        selected: false,
        link: 'https://github.com/styleguidist/react-docgen-typescript',
        Panel: DataViewer,
      },
      {
        label: 'react-docgen',
        selected: false,
        link: 'https://github.com/reactjs/react-docgen',
        Panel: DataViewer,
      },
      {
        label: 'jsdoc',
        selected: false,
        link: 'https://github.com/jsdoc2md/jsdoc-api',
        Panel: DataViewer,
      },
      {
        label: 'typedoc',
        selected: false,
        link: 'https://github.com/TypeStrong/typedoc',
        Panel: DataViewer,
      },
      {
        label: 'ts-json-schema-generator',
        selected: false,
        link: 'https://github.com/vega/ts-json-schema-generator',
        Panel: DataViewer,
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
              const newTabs = visibleTabs.filter(name => name !== visibleItem);
              setVisibleTabs(newTabs.length ? newTabs : ['structured-types']);
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
            if (index >= 0 && index <= visibleTabs.length) {
              setSelectedTab(visibleTabs[index]);
            } else {
              setSelectedTab('');
            }
          }}
          sx={{
            '.react-tabs__tab': {
              fontWeight: 'normal',
            },
            '.react-tabs__tab-list': {
              textAlign: 'center',
            },
          }}
        >
          <TabList>
            {visibleItems.map(item => (
              <Tab key={item.label}>{item.label}</Tab>
            ))}
          </TabList>
          {visibleItems.map((item, index) => (
            <TabPanel key={item.label}>
              {tabIndex === index ? (
                <item.Panel label={item.label} link={item.link} />
              ) : null}
            </TabPanel>
          ))}
        </Tabs>
      )}
    </div>
  );
};
