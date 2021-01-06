/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
  useCustomProps,
} from '@component-controls/blocks';
import { useStory, StoryInputProps } from '@component-controls/store';
import { Markdown } from '@component-controls/components';

export interface NotesBlockOwnProps {
  items?: (string | { url: string; [key: string]: any })[];
}
export type NotesBlockProps = NotesBlockOwnProps &
  StoryBlockContainerProps &
  StoryInputProps;
export const NotesBlock: FC<NotesBlockProps> = fullProps => {
  const custom = useCustomProps<NotesBlockProps>('notes', fullProps);
  const { id, name, items, ...rest } = custom;
  const story = useStory({ id, name });
  const { notes } = story?.plugins || {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { items: _, ...configRest } = notes || {};
  const configItems = notes?.items || notes;
  const props = { ...rest, ...configRest };
  const noteItems: NotesBlockOwnProps['items'] = items || configItems;
  return noteItems?.length ? (
    <StoryBlockContainer story={story} {...props}>
      {noteItems.map((item, index) => {
        const { text, ...rest } =
          typeof item === 'string' ? { text: item } : item;
        return (
          <Markdown key={`notes_item_${index}`} {...rest}>
            {text}
          </Markdown>
        );
      })}
    </StoryBlockContainer>
  ) : null;
};
