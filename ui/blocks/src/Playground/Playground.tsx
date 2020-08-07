import React, { FC, Children } from 'react';
import { BasePlayground, PlaygroundProps } from './BasePlayground';
import { StoryPlayground } from './StoryPlayground';

/**
 * Component to display a live playground of component examples. Has custom actions for zooming, switch direction, review story source and configuration.
 */
export const Playground: FC<PlaygroundProps> = props => {
  const { children } = props;
  const childArr = Children.toArray(children);

  if (childArr.length === 1) {
    const child = childArr[0] as any;
    if (child.type.displayName === 'Story') {
      return <StoryPlayground storyProps={child.props} {...props} />;
    }
  }
  return <BasePlayground {...props} />;
};
