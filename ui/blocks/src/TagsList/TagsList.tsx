/** @jsx jsx */
import { FC, useState, useEffect } from 'react';
import { jsx, Box } from 'theme-ui';
import { getDocPath } from '@component-controls/core';
import { Tag, Link, getPaletteColor } from '@component-controls/components';
import { useStore, useDocPropCount } from '@component-controls/store';

export interface TagsListProps {
  /**
   * string list of tag names
   */
  tags?: string[];
}

/**
 * displays a row of tags assigned to the current document, with links to their pages
 */
export const TagsList: FC<TagsListProps> = ({ tags }) => {
  const [tagColors, setTagColors] = useState<{ [tag: string]: string }>({});
  const tagCounts = useDocPropCount('tags');
  const store = useStore();
  useEffect(() => {
    setTagColors(
      Object.keys(tagCounts).reduce(
        (acc, key, index) => ({
          ...acc,
          [key]: getPaletteColor(index),
        }),
        {},
      ),
    );
  }, [tagCounts]);

  return tags ? (
    <Box variant="taglist.container">
      {tags.map(tag => (
        <Link key={tag} href={getDocPath('tags', undefined, store, tag)}>
          <Tag color={tagColors[tag] || '#dddddd'} variant="tag.leftmargin">
            {tag}
          </Tag>
        </Link>
      ))}
    </Box>
  ) : null;
};
