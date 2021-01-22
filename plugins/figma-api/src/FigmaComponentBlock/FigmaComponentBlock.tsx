/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
  useCustomProps,
} from '@component-controls/blocks';
import {
  useStory,
  StoryInputProps,
  useConfig,
} from '@component-controls/store';
import { Node, Rect, Component } from 'figma-js';
import { useFigmaFile, figmaToReact } from '../use-figma';

export type FigmaComponentBlockOwnProps = {
  items?: (string | { url: string; [key: string]: any })[];
};

export type FigmaComponentBlockProps = FigmaComponentBlockOwnProps &
  StoryBlockContainerProps &
  StoryInputProps;

export const FigmaComponentBlock: FC<FigmaComponentBlockProps> = fullProps => {
  const custom = useCustomProps<FigmaComponentBlockProps>(
    'figma-thumbnail',
    fullProps,
  );
  const { id, name, ...rest } = custom;
  const story = useStory({ id, name });
  const { figma } = story?.plugins || {};
  const config = useConfig();
  const { tokens } = config;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items: _, ...configRest } = figma || {};
  const props = { ...rest, ...configRest };
  const { data } = useFigmaFile('vgf0guEmC5IKtjHJKkRVSr', {
    personalAccessToken: tokens?.figmaAccessToken,
  }) as any;
  type Children = Node & { children: Node[]; absoluteBoundingBox: Rect };
  const findChildComponent = (children: Children[]): Component | undefined => {
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      if (child.type === 'COMPONENT') {
        return child;
      } else {
        if (child.children) {
          const found = findChildComponent(child.children as Children[]);

          if (found) {
            return found;
          }
        }
      }
    }
    return undefined;
  };
  const component = data?.document?.children
    ? findChildComponent(data.document.children)
    : undefined;
  console.log(data, component);
  return tokens?.figmaAccessToken ? (
    <StoryBlockContainer story={story} {...props}>
      {component && figmaToReact(component)}
    </StoryBlockContainer>
  ) : null;
};
