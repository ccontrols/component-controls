/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import {
  StoriesDoc,
  getDocPath,
  defPageType,
  RunConfiguration,
} from '@component-controls/specification';
import { Subtitle, Markdown, Tag } from '@component-controls/components';
import { Link } from '@component-controls/app-components';
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
export const DocumentsListItem: FC<PageListItemProps> = ({
  page,
  link,
  config,
}) => {
  const { tags = [], date, type = defPageType } = page;
  return (
    <Box variant="documentlistitem.container">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
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
