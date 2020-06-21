/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import {
  StoriesDoc,
  getDocPath,
  defPageType,
  RunConfiguration,
  dateToLocalString,
} from '@component-controls/core';
import { Subtitle, Markdown, Tag, Link } from '@component-controls/components';
import { TagsList } from '../TagsList';

export interface PageListItemProps {
  /**
   * link to the document
   */
  link: string;

  /**
   * document to be displayed
   */
  page: StoriesDoc;
  /**
   * store configuration object
   */
  config?: RunConfiguration;
}

/**
 * displays a single doument item
 */
export const DocumentItem: FC<PageListItemProps> = ({ page, link, config }) => {
  const { tags = [], date, type = defPageType } = page;
  return (
    <Box variant="documentitem.container">
      <Box variant="documentitem.titlerow">
        <Link href={link}>
          <Subtitle>{page.title}</Subtitle>
        </Link>
        {type && (
          <Link href={`/${config?.pages?.[type].basePath}`}>
            <Tag transparentAmount={0.3} color="#f49342">
              {type}
            </Tag>
          </Link>
        )}
      </Box>
      {page.description && <Markdown>{page.description}</Markdown>}
      <Box variant="documentitem.info.container">
        <Box variant="documentitem.info.inner">
          {date ? (
            <Box variant="documentitem.info.date">{`created: ${dateToLocalString(
              date,
            )}`}</Box>
          ) : (
            ''
          )}
          {page.author && (
            <Box variant="documentitem.info.author">
              {date && <Text variant="documentitem.info.comma">,</Text>}
              <Text variant="documentitem.info.by">by</Text>
              <Link
                href={getDocPath(
                  'author',
                  undefined,
                  config?.pages,
                  page.author,
                )}
              >
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
