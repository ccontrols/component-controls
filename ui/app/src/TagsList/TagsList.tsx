/** @jsx jsx */
import { FC } from 'react';
import { jsx, Flex } from 'theme-ui';
import { Tag } from '@component-controls/components';

export interface TagsListProps {
  tags?: string[];
}
export const TagsList: FC<TagsListProps> = ({ tags }) => {
  return tags ? (
    <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
      {tags.map(tag => (
        <Tag key={tag} color="#333333" sx={{ ml: 1 }}>
          {tag}
        </Tag>
      ))}
    </Flex>
  ) : null;
};
