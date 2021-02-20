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

  /**
   * raw string values, useful for highlighting search results
   */
  raw?: string[];

  /**
   * limit the number of tags to display
   */
  limit?: number;
}

/**
 * displays a row of tags assigned to the current document, with links to their pages
 */
export const TagsList: FC<TagsListProps> = ({ tags, raw, limit = -1 }) => {
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

  if (!tags) {
    return null;
  }
  const largerThanLimit = limit !== -1 && tags.length > limit;
  return (
    <Box
      variant="taglist.container"
      sx={{
        maxWidth: largerThanLimit ? 'unset' : undefined,
      }}
    >
      {tags.slice(0, limit).map((tag, index) => {
        const rawTag = raw ? raw[index] : undefined;
        return (
          <Link key={tag} href={getDocPath('tags', undefined, store, tag)}>
            <Tag
              color={tagColors[tag] || 'muted'}
              variant="tag.leftmargin"
              raw={rawTag}
            >
              {tag}
            </Tag>
          </Link>
        );
      })}
      {largerThanLimit && (
        <Tag color="muted" variant="tag.leftmargin">
          ...more
        </Tag>
      )}
    </Box>
  );
};
