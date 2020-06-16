/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { Subtitle, Link } from '@component-controls/components';

export interface CategoryListItemProps {
  /**
   * link url
   */
  link: string;
  /**
   * category name
   */
  name: string;
  /**
   * how many documents of this category
   */
  count: number;
}

/**
 * category list item displays the unique categories with a link, and the count of docs for each
 */
export const CategoryListItem: FC<CategoryListItemProps> = ({
  name,
  count,
  link,
}) => {
  return (
    <li>
      <Box variant="categorylist.item">
        <Link href={link}>
          <Subtitle>{`${name} (${count})`}</Subtitle>
        </Link>
      </Box>
    </li>
  );
};
