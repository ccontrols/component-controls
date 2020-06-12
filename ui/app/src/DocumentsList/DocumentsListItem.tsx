/** @jsx jsx */
import { FC } from 'react';
import { jsx, Flex, Text } from 'theme-ui';
import {
  StoriesDoc,
  getDocPath,
  RunConfiguration,
} from '@component-controls/specification';
import { Subtitle, Markdown } from '@component-controls/components';
import { Link } from '@component-controls/app-components';
import { TagsList } from '../TagsList';

export interface PageListItemProps {
  link: string;
  page: StoriesDoc;
  config?: RunConfiguration;
}
export const DocumentsListItem: FC<PageListItemProps> = ({
  page,
  link,
  config,
}) => {
  const { tags = [], date } = page;
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Link href={link}>
        <Subtitle>{page.title}</Subtitle>
      </Link>
      {page.description && <Markdown>{page.description}</Markdown>}
      <Flex sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Flex
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {date ? new Date(date).toDateString() : ''}
          {page.author && (
            <Flex
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {date && (
                <Text
                  sx={{
                    mr: 2,
                  }}
                >
                  ,
                </Text>
              )}
              <Text
                sx={{
                  mr: 1,
                }}
              >
                by
              </Text>
              <Link href={getDocPath('author', undefined, config, page.author)}>
                {page.author}
              </Link>
            </Flex>
          )}
        </Flex>
        <TagsList tags={tags} />
      </Flex>
    </Flex>
  );
};
