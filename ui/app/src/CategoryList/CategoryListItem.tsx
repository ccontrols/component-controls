/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
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
    <li sx={{ my: 2 }}>
      <Link href={link}>
        <Subtitle>{`${name} (${count})`}</Subtitle>
      </Link>
    </li>
  );
};
