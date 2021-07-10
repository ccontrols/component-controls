/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Heading } from 'theme-ui';

import { PanelContainer, PanelContainerProps } from './PanelContainer';
import { ConfigOption } from '../config/ConfigOption';

import { useOptions } from '../../contexts/OptionsContext';

type ExamplesPanelProps = PanelContainerProps;

export const ParseConfigPanel: FC<ExamplesPanelProps> = ({ onClose }) => {
  const [parseOptions] = useOptions('parseOptions');
  return (
    <PanelContainer onClose={onClose}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Heading as="h1" sx={{ py: 3, pl: 2, pr: 5 }}>
          Parse Config
        </Heading>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          {parseOptions &&
            Object.keys(parseOptions.General).map(option => (
              <ConfigOption
                key={option}
                title={option}
                paramName="parseOptions"
                {...parseOptions.General[option]}
              />
            ))}
        </Box>
      </Box>
    </PanelContainer>
  );
};
