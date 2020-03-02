import React, { FC } from 'react';
import {
  StorySource as BaseStorySource,
  StorySourceProps as BaseStorySourceProps,
} from '@component-controls/block-components';
import { Link, LinkProps } from 'theme-ui';
import {
  useControlsContext,
  ControlsContextInputProps,
} from '../BlocksContext';
import { ThemeContext } from '../ThemeContext';

export type StorySourceProps = ControlsContextInputProps & BaseStorySourceProps;

const ExternalLink = (props: LinkProps) => (
  <Link {...props} target="_blank" rel="noopener noreferrer" />
);
export const StorySource: FC<StorySourceProps> = ({
  id,
  name,
  actions = [],
  ...rest
}) => {
  const { source, controls, args, kind } = useControlsContext({
    id,
    name,
  });
  const { dark } = React.useContext(ThemeContext);
  const allActions = [...actions];
  if (kind) {
    const { repository } = kind;
    if (repository) {
      const { browse, docs, issues } = repository;
      console.log(repository);
      if (browse) {
        allActions.push({
          title: <ExternalLink href={browse}>browse</ExternalLink>,
        });
      }
      if (docs) {
        allActions.push({
          title: <ExternalLink href={docs}>docs</ExternalLink>,
        });
      }
      if (issues) {
        allActions.push({
          title: <ExternalLink href={issues}>issues</ExternalLink>,
        });
      }
    }
  }

  return (
    <BaseStorySource
      dark={dark}
      controls={controls}
      args={args}
      fileSource={kind ? kind.source : undefined}
      actions={allActions}
      {...rest}
    >
      {source}
    </BaseStorySource>
  );
};
