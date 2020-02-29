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
  const { source, controls, args, fileSource } = useControlsContext({
    id,
    name,
  });
  const { dark } = React.useContext(ThemeContext);
  return (
    <BaseStorySource
      dark={dark}
      controls={controls}
      args={args}
      fileSource={fileSource}
      {...rest}
    >
      {source}
    </BaseStorySource>
  );
};
