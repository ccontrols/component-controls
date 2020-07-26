import React from 'react';
import { deepMerge } from '@component-controls/core';
import { StateRoot, StateRootProps, useStore } from '@component-controls/store';
import { ErrorBoundary } from './ErrorBoundary';

export const BlockContextProvider: React.FC<StateRootProps> = ({
  children,
  ...props
}) => {
  return (
    <StateRoot {...props}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </StateRoot>
  );
};

export const useCustomProps = <T extends unknown>(
  name: string,
  props: T,
): T => {
  const store = useStore();
  const { config } = store;
  const userProps = config?.components?.[name];
  return userProps ? deepMerge(props, userProps) : props;
};
