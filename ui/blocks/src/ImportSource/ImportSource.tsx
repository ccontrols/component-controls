import React, { FC } from 'react';
import {
  Source as SourceBlock,
  SourceProps,
} from '@component-controls/block-components';
import {
  useControlsContext,
  ControlsContextInputProps,
} from '../BlocksContext';
import { ThemeContext } from '../ThemeContext';

export type ImportSourceProps = ControlsContextInputProps & SourceProps;

export const ImportSource: FC<ImportSourceProps> = ({ id, name }) => {
  const { component } = useControlsContext({
    id,
    name,
  });
  const source = component && component.import;
  if (!source) {
    return null;
  }
  const { dark } = React.useContext(ThemeContext);
  return <SourceBlock dark={dark}>{source}</SourceBlock>;
};
