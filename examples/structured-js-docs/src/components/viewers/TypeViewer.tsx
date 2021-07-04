import React, { FC } from 'react';
import { Box } from 'theme-ui';
import { PropKind } from '@component-controls/structured-js-types/types';
import { useTypesContext } from '../../contexts/TypesContext';
import { LoadingIndicator } from './LoadingIndicator';
import { JSONViewer } from './JSONViewer';

export const TypeViewer: FC = () => {
  const { loading, types } = useTypesContext();

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
        <JSONViewer
          data={types}
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
        />
      )}
    </Box>
  );
};
