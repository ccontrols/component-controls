/** @jsx jsx */
import { FC, IframeHTMLAttributes } from 'react';
import { jsx } from 'theme-ui';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
  useCustomProps,
} from '@component-controls/blocks';
import { useStory, StoryInputProps } from '@component-controls/store';

export type FigmaEmbedBlockOwnProps = {
  items?: (string | { url: string; [key: string]: any })[];
};

export type FigmaEmbedBlockProps = FigmaEmbedBlockOwnProps &
  StoryBlockContainerProps &
  StoryInputProps &
  IframeHTMLAttributes<HTMLIFrameElement>;
export const FigmaEmbedBlock: FC<FigmaEmbedBlockProps> = fullProps => {
  const custom = useCustomProps<FigmaEmbedBlockProps>('figma', fullProps);
  const {
    id,
    name,
    allowFullScreen = true,
    items,
    height = '450',
    width = '100%',
    style,
    allow,
    loading,
    referrerPolicy,
    sandbox,
    seamless,
    srcDoc,
    ...rest
  } = custom;
  const story = useStory({ id, name });
  const { figma } = story?.plugins || {};
  const configItems = figma?.items || figma;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items: _, ...configRest } = figma || {};
  const props = { ...rest, ...configRest };

  const designItems: FigmaEmbedBlockOwnProps['items'] = items || configItems;
  return designItems?.length ? (
    <StoryBlockContainer story={story} {...props}>
      {designItems.map((item, index) => {
        const { url, ...rest } =
          typeof item === 'string' ? { url: item } : item;
        return (
          <iframe
            key={`figma_iframe_${index}`}
            height={height}
            width={width}
            src={`https://www.figma.com/embed?embed_host=component-controls&url=${url}`}
            allowFullScreen={allowFullScreen}
            sx={{
              border: 'none',
            }}
            style={style}
            allow={allow}
            loading={loading}
            referrerPolicy={referrerPolicy}
            sandbox={sandbox}
            seamless={seamless}
            srcDoc={srcDoc}
            {...rest}
          />
        );
      })}
    </StoryBlockContainer>
  ) : null;
};
