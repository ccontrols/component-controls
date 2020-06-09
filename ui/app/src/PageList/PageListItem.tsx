/** @jsx jsx */
import { FC } from 'react';
import { jsx, Flex } from 'theme-ui';
import { StoriesDoc } from '@component-controls/specification';
import { Subtitle } from '@component-controls/components';
import { Link } from '@component-controls/app-components';
import { TagsList } from '../TagsList';

export interface PageListItemProps {
  link: string;
  page: StoriesDoc;
}
export const PageListItem: FC<PageListItemProps> = ({ page, link }) => {
  const { tags = '', date } = page;
  console.log(tags);
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Link href={link}>
        <Subtitle>{page.title}</Subtitle>
      </Link>
      <Flex sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>{date ? new Date(date).toDateString() : ''}</div>
        <TagsList tags={tags.split(',')} />
      </Flex>
    </Flex>
  );
};
