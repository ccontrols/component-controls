import React, { FC } from 'react';
import { BlockContextProvider } from './BlockContext';

export const ControlsProvider: FC = ({ children }) => {
  return <BlockContextProvider>{children}</BlockContextProvider>;
};
