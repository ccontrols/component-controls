/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { Subtitle } from '@component-controls/components';
import { Link } from '@component-controls/app-components';

export interface CategoryListItemProps {
  link: string;
  name: string;
  count: number;
}
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
