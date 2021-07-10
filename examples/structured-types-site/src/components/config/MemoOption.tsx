/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Heading, Textarea } from 'theme-ui';
import { Markdown } from '@component-controls/components';
import { useUpdateOptions } from '../../contexts/OptionsContext';
import { OptionsData, OptionsName } from '../../contexts/options';

export const MemoOption: FC<{
  paramName: OptionsName;
  title: string;
} & OptionsData> = ({
  paramName,
  title,
  help,
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
      <Heading as="h3" sx={{ pr: 2 }}>
        {`${title}:`}
      </Heading>
      <Textarea
        value={Array.isArray(value) ? value.join('\n') : (value as string)}
        rows={10}
        aria-label={`enter a value for ${title}`}
        onChange={e => {
          updateOption(e.target.value.split('/n').map(l => l.trim()));
        }}
      />
      <Markdown sx={{ color: 'mutedText', maxWidth: '300px', my: 1 }}>
        {help}
      </Markdown>
    </Box>
  );
};
