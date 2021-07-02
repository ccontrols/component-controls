/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Heading, Select } from 'theme-ui';
import { Markdown } from '@component-controls/components';
import { useUpdateOptions, OptionsType } from '../../contexts/OptionsContext';
import { OptionsData } from '../../contexts/options';

export const SelectOption: FC<{
  paramName: OptionsType;
  title: string;
} & OptionsData> = ({
  paramName,
  title,
  help,
  options,
  value: propValue,
  defaultValue,
}) => {
  const value = typeof propValue === 'undefined' ? defaultValue : propValue;
  const updateOption = useUpdateOptions(paramName, title);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Heading as="h3" sx={{ pr: 2 }}>
          {`${title}:`}
        </Heading>
        <Select
          aria-label={`select ${title} option`}
          sx={{ minWidth: '150px', py: 1 }}
          value={value as string}
          onChange={e => {
            updateOption(e.target.value);
          }}
        >
          {options?.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Select>
      </Box>
      <Markdown sx={{ color: 'mutedText', maxWidth: '300px', my: 1 }}>
        {help}
      </Markdown>
    </Box>
  );
};
