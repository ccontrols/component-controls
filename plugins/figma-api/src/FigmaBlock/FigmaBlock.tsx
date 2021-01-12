/** @jsx jsx */
import { FC, useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { Client, FileResponse } from 'figma-js';
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

export type FigmaBlockOwnProps = {
  items?: (string | { url: string; [key: string]: any })[];
};

export type FigmaBlockProps = FigmaBlockOwnProps &
  StoryBlockContainerProps &
  StoryInputProps;

export const FigmaBlock: FC<FigmaBlockProps> = fullProps => {
  const [fileData, setFileData] = useState<FileResponse>();
  const custom = useCustomProps<FigmaBlockProps>('figma-thumbnail', fullProps);
  const { id, name, items, ...rest } = custom;
  const story = useStory({ id, name });
  const { figma } = story?.plugins || {};
  const config = useConfig();
  const { tokens } = config;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items: _, ...configRest } = figma || {};
  const props = { ...rest, ...configRest };

  useEffect(() => {
    const configItems = figma?.items || figma;
    const designItems: FigmaBlockOwnProps['items'] = items || configItems;
    const client = Client({
      personalAccessToken: tokens?.figmaAccessToken,
    });
    if (designItems?.length) {
      client.file('vgf0guEmC5IKtjHJKkRVSr').then(({ data }) => {
        console.log(data);
        setFileData(data);
      });
    }
  }, [tokens, figma, items]);
  return tokens?.figmaAccessToken ? (
    <StoryBlockContainer story={story} {...props}>
      <TitledImage src={fileData?.thumbnailUrl} title={fileData?.name} />
    </StoryBlockContainer>
  ) : null;
};
