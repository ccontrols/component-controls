/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Heading, Checkbox, Label } from 'theme-ui';
import { InfoIcon } from '@primer/octicons-react';
import { Link, Markdown } from '@component-controls/components';
import { useUpdateOptions } from '../contexts/OptionsContext';
import { OptionsData } from '../contexts/ts-options';

export const CheckboxOption: FC<{
  title: string;
} & OptionsData> = ({ title, help, value: propValue, defaultValue }) => {
  const value = typeof propValue === 'undefined' ? defaultValue : propValue;
  const updateOption = useUpdateOptions(title);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px: 2,
        pb: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Label>
          <Checkbox
            aria-label={`change ${title} typescript option`}
            checked={value as boolean}
            onChange={() => updateOption(!(value as boolean))}
          />
          <Heading
            as="h4"
            sx={{
              pr: 2,
              width: '100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              ':hover': {
                a: {
                  visibility: 'visible',
                },
              },
            }}
          >
            {`${title}`}
            <Link
              sx={{
                paddingRight: `20px`,
                right: '-20px',
                position: 'absolute',
                margin: 'auto',
                top: 0,
                bottom: 0,
                height: '32px',
                visibility: 'hidden',
                ':hover': {
                  visibility: 'visible',
                },
              }}
              href={`https://www.typescriptlang.org/tsconfig#${title}`}
              aria-label={`view documentation for ${title}`}
            >
              <InfoIcon size={20} verticalAlign="middle" />
            </Link>
          </Heading>
        </Label>
      </Box>
      <Markdown sx={{ color: 'mutedText', maxWidth: '300px', my: 1 }}>
        {help}
      </Markdown>
    </Box>
  );
};
