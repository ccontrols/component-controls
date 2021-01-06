/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
  useCustomProps,
} from '@component-controls/blocks';
import { useStory, StoryInputProps } from '@component-controls/store';
import { TitledImage } from '@component-controls/components';

export interface ImagesBlockkOwnProps {
  items?: (string | { src: string; [key: string]: any })[];
}
export type ImagesBlockProps = ImagesBlockkOwnProps &
  StoryBlockContainerProps &
  StoryInputProps;

export const ImagesBlock: FC<ImagesBlockProps> = fullProps => {
  const custom = useCustomProps<ImagesBlockProps>('images', fullProps);
  const { id, name, items, ...rest } = custom;
  const story = useStory({ id, name });
  const { images } = story?.plugins || {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items: _, ...configRest } = images || {};
  const configItems = images?.items || images;
  const props = { ...rest, ...configRest };
  const noteItems: ImagesBlockkOwnProps['items'] = items || configItems;
  return noteItems?.length ? (
    <StoryBlockContainer story={story} {...props}>
      {noteItems.map((item, index) => {
        const { src, ...rest } =
          typeof item === 'string' ? { src: item } : item;
        return <TitledImage key={`images_item_${index}`} src={src} {...rest} />;
      })}
    </StoryBlockContainer>
  ) : null;
};
