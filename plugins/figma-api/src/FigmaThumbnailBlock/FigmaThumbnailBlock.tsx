/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
  useCustomProps,
} from '@component-controls/blocks';
import { TitledImage } from '@component-controls/components';
import {
  useStory,
  StoryInputProps,
  useConfig,
} from '@component-controls/store';
import { useFigmaFile } from '../use-figma';

export type FigmaThumbnailBlockOwnProps = {
  items?: (string | { url: string; [key: string]: any })[];
};

export type FigmaThumbnailBlockProps = FigmaThumbnailBlockOwnProps &
  StoryBlockContainerProps &
  StoryInputProps;

export const FigmaThumbnailBlock: FC<FigmaThumbnailBlockProps> = fullProps => {
  const custom = useCustomProps<FigmaThumbnailBlockProps>(
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
  return tokens?.figmaAccessToken ? (
    <StoryBlockContainer story={story} {...props}>
      <TitledImage src={data?.thumbnailUrl} title={data?.name} />
    </StoryBlockContainer>
  ) : null;
};
