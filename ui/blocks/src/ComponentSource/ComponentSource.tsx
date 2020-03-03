import React, { FC } from 'react';
import {
  Source as SourceBlock,
  SourceProps,
} from '@component-controls/block-components';
import { useControlsContext, StoryInputProps } from '../BlocksContext';
import { ThemeContext } from '../ThemeContext';

export type ComponentSourceProps = StoryInputProps & SourceProps;

export const ComponentSource: FC<ComponentSourceProps> = ({
  id,
  name,
  ...rest
}) => {
  const { component } = useControlsContext({
    id,
    name,
  });
  const source = component && component.import;
  if (!source) {
    return null;
  }
  const { dark } = React.useContext(ThemeContext);
  return (
    <SourceBlock dark={dark} {...rest}>
      {source}
    </SourceBlock>
  );
};
