/** @jsx jsx */
import { FC, useEffect, useState } from 'react';
import { jsx, Box, Heading, Link } from 'theme-ui';
import { Tabs, TabList, Tab, TabPanel } from '@component-controls/components';
import { useURLParams } from '@component-controls/blocks';
import { PanelContainer, PanelContainerProps } from './PanelContainer';
import { useCodeContext } from '../../contexts/CodeContext';

type Example = {
  name: string;
  items: Example[];
};
export const ExamplesPanel: FC<PanelContainerProps> = ({ onClose }) => {
  const [tabIndex, setTabIndex] = useURLParams<number>('examples', 0);
  const [examples, setExamples] = useState<Example[]>([]);
  useEffect(() => {
    fetch('/api/examples/list')
      .then(data => data.json())
      .then(json => {
        setExamples(json);
      });
  }, []);
  const { updateCode } = useCodeContext();
  return (
    <PanelContainer onClose={onClose}>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={index => {
          setTabIndex(index);
        }}
      >
        <TabList>
          {examples.map(({ name }) => (
            <Tab key={name}>
              <Heading
                as="h1"
                sx={{
                  ':first-letter': {
                    textTransform: 'capitalize',
                  },
                }}
              >
                {name}
              </Heading>
            </Tab>
          ))}
        </TabList>
        {examples.map(({ name: section, items }) => (
          <TabPanel key={section}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                py: 3,
              }}
            >
              {items.map(({ name: group, items }) => (
                <Box
                  key={group}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    px: 4,
                  }}
                >
                  <Heading
                    as="h4"
                    sx={{
                      py: 2,
                    }}
                  >
                    {group}
                  </Heading>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      pl: 2,
                    }}
                  >
                    {items.map(({ name }) => (
                      <Link
                        key={name}
                        href="#"
                        onClick={() => {
                          onClose();
                          fetch(
                            `/api/examples/get?name=${encodeURIComponent(
                              name,
                            )}&group=${encodeURIComponent(
                              group,
                            )}&section=${encodeURIComponent(section)}`,
                          )
                            .then(data => data.json())
                            .then(({ code }) => {
                              updateCode(code);
                            });
                        }}
                      >
                        {name.split('.')[0]}
                      </Link>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </TabPanel>
        ))}
      </Tabs>
    </PanelContainer>
  );
};
