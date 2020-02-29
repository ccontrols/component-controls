import React, { FC } from 'react';
import { Source as SourceBlock } from '@component-controls/block-components';
import {
  useControlsContext,
  ControlsContextInputProps,
} from '../BlocksContext';
import { ThemeContext } from '../ThemeContext';

export type ImportSourceProps = ControlsContextInputProps & {
  /** a title to display */
  title?: string;
};

export const ImportSource: FC<ImportSourceProps> = ({ id, name }) => {
  const { component } = useControlsContext({
    id,
    name,
  });
  const { dark } = React.useContext(ThemeContext);
  return (
    <SourceBlock dark={dark}>
      {component && component.import ? component.import : ''}
    </SourceBlock>
  );
};
