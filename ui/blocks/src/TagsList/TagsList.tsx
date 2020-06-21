/** @jsx jsx */
import { FC, useContext, useState, useEffect } from 'react';
import { jsx, Box } from 'theme-ui';
import { getDocPath } from '@component-controls/core';
import { Tag, Link, getPaletteColor } from '@component-controls/components';
import { BlockContext } from '../context';

export interface TagsListProps {
  /**
   * string list of tag names
   */
  tags?: string[];
}

/**
 * row of tags with link to their page
 */
export const TagsList: FC<TagsListProps> = ({ tags }) => {
  const { storeProvider } = useContext(BlockContext);
  const [tagColors, setTagColors] = useState<{ [tag: string]: string }>({});
  useEffect(() => {
    const uniqueTags = storeProvider.getUniquesByCategory('tags');
    setTagColors(
      Object.keys(uniqueTags).reduce(
        (acc, key, index) => ({
          ...acc,
          [key]: getPaletteColor(index),
        }),
        {},
      ),
    );
  }, [storeProvider]);

  return tags ? (
    <Box variant="taglist.container">
      {tags.map(tag => (
        <Link
          key={tag}
          href={getDocPath(
            'tags',
            undefined,
            storeProvider?.config?.pages,
            tag,
          )}
        >
          <Tag color={tagColors[tag] || '#dddddd'} variant="tag.leftmargin">
            {tag}
          </Tag>
        </Link>
      ))}
    </Box>
  ) : null;
};
