/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Heading, Link } from 'theme-ui';
import { useUserData } from '@component-controls/store';
import { Tabs, TabList, Tab, TabPanel } from '@component-controls/components';
import { PanelContainer, PanelContainerProps } from './PanelContainer';

type ExamplesPanelProps = {
  onSelect: (code: string) => void;
} & PanelContainerProps;

export const ExamplesPanel: FC<ExamplesPanelProps> = ({
  onClose,
  onSelect,
}) => {
  const data = useUserData();
  const { examples } = data;
  return (
    <PanelContainer onClose={onClose}>
      <Tabs>
        <TabList>
          {Object.keys(examples).map(key => (
            <Tab key={key}>
              <Heading
                as="h1"
                sx={{
                  ':first-letter': {
                    textTransform: 'capitalize',
                  },
                }}
              >
                {key}
              </Heading>
            </Tab>
          ))}
        </TabList>
        {Object.keys(examples).map(key => (
          <TabPanel key={key}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                py: 3,
              }}
            >
              {Object.keys(examples[key])
                .filter(category => typeof examples[key][category] === 'object')
                .map(category => (
                  <Box
                    key={category}
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
                      {category}
                    </Heading>
                    <Box
                      key={category}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        pl: 2,
                      }}
                    >
                      {Object.keys(examples[key][category]).map(example => (
                        <Link
                          key={example}
                          href="#"
                          onClick={() => {
                            onSelect(examples[key][category][example]);
                          }}
                        >
                          {example.split('.')[0]}
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
