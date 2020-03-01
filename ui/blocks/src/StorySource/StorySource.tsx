import React, { FC } from 'react';
import {
  StorySource as BaseStorySource,
  StorySourceProps as BaseStorySourceProps,
} from '@component-controls/block-components';
import {
  useControlsContext,
  ControlsContextInputProps,
} from '../BlocksContext';
import { ThemeContext } from '../ThemeContext';

export type StorySourceProps = ControlsContextInputProps & BaseStorySourceProps;

export const StorySource: FC<StorySourceProps> = ({ id, name, ...rest }) => {
  const { source, controls, args, kind } = useControlsContext({
    id,
    name,
  });
  const { dark } = React.useContext(ThemeContext);
  return (
    <BaseStorySource
      dark={dark}
      controls={controls}
      args={args}
      fileSource={kind ? kind.source : undefined}
      {...rest}
    >
      {source}
    </BaseStorySource>
  );
};
