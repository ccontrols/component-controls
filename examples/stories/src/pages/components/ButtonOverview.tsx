/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { Tabs, Tab, TabList, TabPanel } from '@component-controls/components';
import { PropsTable, MockContext, Story } from '@component-controls/blocks';
import { VariantButton } from '../../stories/VariantButton/VariantButton';

export const ButtonOverview: FC = () => {
  const tabs: {
    [key: string]: any;
  } = {
    'panel 1': <PropsTable id="." visibility="controls" />,
    'panel 2': <VariantButton text="button" />,
    'panel 3': 'panel 3-',
  };

  return (
    <MockContext storyId="blocks-core-story-plain--controls">
      <Box sx={{ marginTop: '30px' }}>
        <Story />
      </Box>
      <Box sx={{ marginTop: '30px', border: '1px solid red' }}>
        <div
          style={{
            width: '700px',
            height: '370px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
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
        </div>
      </Box>
    </MockContext>
  );
};
