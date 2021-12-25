import React, { FC, useMemo } from 'react';
import queryString from 'query-string';
import { deepMerge } from '@component-controls/core';
import { StateRoot, StateRootProps, useStore } from '@component-controls/store';
import { ErrorBoundary } from './ErrorBoundary';
import { ThemeProvider, ThemeProviderProps } from '../ThemeProvider';
import { getURL } from '../utils/url';

export const BlockContextProvider: FC<
  StateRootProps & Pick<ThemeProviderProps, 'components'>
> = ({ children, components, ...props }) => {
  const values = useMemo(() => {
    const url = getURL();
    if (url) {
      const parsedParams = queryString.parse(url.search);
      if (typeof parsedParams.controls === 'string') {
        return typeof parsedParams.controls === 'string'
          ? JSON.parse(parsedParams.controls)
          : parsedParams.controls;
      }
    }
    return undefined;
  }, []);
  return (
    <StateRoot values={values} {...props}>
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
  return userProps ? deepMerge<T>(props, userProps) : props;
};
