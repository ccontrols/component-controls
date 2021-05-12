/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import {
  BlockContainer,
  BlockContainerProps,
} from '@component-controls/components';
import {
  StoryInputProps,
  useStory,
  useDocument,
} from '@component-controls/store';
import { BaseStoryData, BaseStoryDataProps } from './BaseStoryData';
import { useCustomProps } from '../context';

export type StoryDataProps = BlockContainerProps &
  StoryInputProps &
  Pick<BaseStoryDataProps, 'pagination'>;

/**
 * Displays document data associated with a story
 */
export const StoryData: FC<StoryDataProps> = ({
  id,
  name,
  pagination = { totalCountTemplate: '${totalData} data rows' },
  ...rest
}) => {
  const props = useCustomProps<StoryDataProps>('story_data', rest);
  const story = useStory({ id, name });
  const doc = useDocument(story?.doc);

  if (!story || !story.id || !story.rawId || !doc?.data?.[story.rawId]) {
    return null;
  }

  return (
    <BlockContainer {...props}>
      <BaseStoryData
        storyId={story.id}
        values={doc.data[story.rawId]}
        pagination={pagination}
      />
    </BlockContainer>
  );
};
