/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text } from 'theme-ui';
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
    <Box variant="documentlistitem.container">
      <Link href={link}>
        <Subtitle>{page.title}</Subtitle>
      </Link>
      {page.description && <Markdown>{page.description}</Markdown>}
      <Box variant="documentlistitem.info.container">
        <Box variant="documentlistitem.info.inner">
          {date ? (
            <Box variant="documentlistitem.info.date">
              {new Date(date).toDateString()}
            </Box>
          ) : (
            ''
          )}
          {page.author && (
            <Box variant="documentlistitem.info.author">
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
            </Box>
          )}
        </Box>
        <TagsList tags={tags} />
      </Box>
    </Box>
  );
};
