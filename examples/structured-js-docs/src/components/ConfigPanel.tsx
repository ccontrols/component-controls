/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Heading } from 'theme-ui';

import { PanelContainer, PanelContainerProps } from './PanelContainer';
import { SelectOption } from './SelectOption';
import { CheckboxOption } from './CheckboxOption';

import { useOptions } from '../contexts/OptionsContext';

type ExamplesPanelProps = PanelContainerProps;

export const ConfigPanel: FC<ExamplesPanelProps> = ({ onClose }) => {
  const options = useOptions();
  return (
    <PanelContainer onClose={onClose}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Heading as="h1" sx={{ py: 3, pl: 2, pr: 5 }}>
          TS Config
        </Heading>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          {options &&
            Object.keys(options.General).map(option => (
              <SelectOption
                key={option}
                title={option}
                {...options.General[option]}
              />
            ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {Object.keys(options)
            .slice(1)
            .map(category => (
              <Box
                key={category}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  px: 2,
                }}
              >
                <Heading as="h3" sx={{ py: 3, pl: 2, pr: 5 }}>
                  {category}
                </Heading>
                {Object.keys(options[category]).map(key => {
                  const option = options[category][key];
                  return <CheckboxOption key={key} title={key} {...option} />;
                })}
              </Box>
            ))}
        </Box>
      </Box>
    </PanelContainer>
  );
};
