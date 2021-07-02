import React, { FC } from 'react';
import ReactJson from 'react-json-tree';
import { Box } from 'theme-ui';
import { useTheme } from '@component-controls/components';
import { PropKind } from '@component-controls/structured-js-types/types';
import { useTypesContext } from '../../contexts/TypesContext';
import { LoadingIndicator } from './LoadingIndicator';

export const TypeViewer: FC = () => {
  const { loading, types } = useTypesContext();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        overflowY: 'auto',
        ml: 3,
      }}
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ReactJson
          data={types}
          hideRoot={true}
          shouldExpandNode={(
            keyPath: (string | number)[],
            data: any,
            level: number,
          ) => {
            return level === 1;
          }}
          valueRenderer={(
            valueAsString: any,
            value: any,
            ...keyPath: (string | number)[]
          ) => {
            if (keyPath.length && keyPath[0] === 'kind') {
              const strValue = value.toString();
              const typename = Object.entries(PropKind).find(([v, _]) => {
                return v === strValue;
              });
              if (typename) {
                return `${typename[1]} (${valueAsString})`;
              }
            }
            return valueAsString;
          }}
          theme={{
            base00: theme.colors?.background as string,
            base03: theme.colors?.muted as string,
            base0B: theme.colors?.accent as string,
            base0D: theme.colors?.text as string,
          }}
          invertTheme={false}
        />
      )}
    </Box>
  );
};
