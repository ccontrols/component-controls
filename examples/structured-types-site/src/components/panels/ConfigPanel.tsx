/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Heading } from 'theme-ui';

import { PanelContainer, PanelContainerProps } from './PanelContainer';
import { SelectOption } from '../config/SelectOption';
import { CheckboxOption } from '../config/CheckboxOption';

import { useOptions } from '../../contexts/OptionsContext';

type ExamplesPanelProps = PanelContainerProps;

export const ConfigPanel: FC<ExamplesPanelProps> = ({ onClose }) => {
  const [tsOptions] = useOptions('tsOptions');
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
          {tsOptions &&
            Object.keys(tsOptions.General).map(option => (
              <SelectOption
                key={option}
                paramName="tsOptions"
                title={option}
                {...tsOptions.General[option]}
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
          {Object.keys(tsOptions)
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
                {Object.keys(tsOptions[category]).map(key => {
                  const option = tsOptions[category][key];
                  return (
                    <CheckboxOption
                      paramName="tsOptions"
                      key={key}
                      title={key}
                      {...option}
                    />
                  );
                })}
              </Box>
            ))}
        </Box>
      </Box>
    </PanelContainer>
  );
};
