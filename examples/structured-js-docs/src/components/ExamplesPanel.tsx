/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Heading, Link } from 'theme-ui';
import { useUserData } from '@component-controls/store';
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
  console.log(examples);
  return (
    <PanelContainer onClose={onClose}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {Object.keys(examples).map(key => (
          <Box key={key}>
            <Heading as="h3" sx={{ py: 3, pl: 2, pr: 5 }}>
              {key}
            </Heading>
            <Box
              key={key}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
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
                    <Heading as="h4" sx={{ pb: 2 }}>
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
          </Box>
        ))}
      </Box>
    </PanelContainer>
  );
};
