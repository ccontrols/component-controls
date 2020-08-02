import React from 'react';
import { deepMerge } from '@component-controls/core';
import { StateRoot, StateRootProps, useStore } from '@component-controls/store';
import { ErrorBoundary } from './ErrorBoundary';
import { ThemeProvider, ThemeProviderProps } from '../ThemeProvider';

export const BlockContextProvider: React.FC<StateRootProps &
  Pick<ThemeProviderProps, 'components'>> = ({
  children,
  components,
  ...props
}) => {
  return (
    <StateRoot {...props}>
      <ErrorBoundary>
        <ThemeProvider components={components}>{children}</ThemeProvider>
      </ErrorBoundary>
    </StateRoot>
  );
};

export const useCustomProps = <T extends unknown>(
  name: string,
  props: T,
): T => {
  const store = useStore();
  const { config } = store;
  const userProps = config.components?.[name];
  return userProps ? deepMerge(props, userProps) : props;
};
