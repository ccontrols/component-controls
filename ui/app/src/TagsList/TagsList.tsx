/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Box } from 'theme-ui';
import { getDocPath } from '@component-controls/specification';
import { Tag } from '@component-controls/components';
import { BlockContext } from '@component-controls/blocks';
import { Link } from '@component-controls/app-components';

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

  return tags ? (
    <Box variant="taglist.container">
      {tags.map(tag => (
        <Link
          key={tag}
          href={getDocPath('tags', undefined, storeProvider?.config, tag)}
        >
          <Tag transparentAmount={0.5} color="#dddddd" variant="tag.leftmargin">
            {tag}
          </Tag>
        </Link>
      ))}
    </Box>
  ) : null;
};
