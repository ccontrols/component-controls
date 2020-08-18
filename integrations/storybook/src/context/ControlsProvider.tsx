import React from 'react';
import { BlockContextProvider } from './BlockContext';

export const ControlsProvider: React.FC = ({ children }) => {
  return <BlockContextProvider>{children}</BlockContextProvider>;
};
