/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import {
  Document,
  getDocPath,
  defDocType,
  RunConfiguration,
  dateToLocalString,
} from '@component-controls/core';
import { Subtitle, Markdown, Link } from '@component-controls/components';
import { TagsList } from '../TagsList';
import { PageTypeTag } from '../PageTypeTag';

export interface DocumentItemProps {
  /**
   * link to the document
   */
  link: string;

  /**
   * document to be displayed
   */
  doc: Document;
  /**
   * store configuration object
   */
  config?: RunConfiguration;
}

/**
 * displays a single doument item
 */
export const DocumentItem: FC<DocumentItemProps> = ({ doc, link, config }) => {
  const { tags = [], date, type = defDocType } = doc;
  return (
    <Box variant="documentitem.container">
      <Box variant="documentitem.titlerow">
        <Link href={link}>
          <Subtitle>{doc.title}</Subtitle>
        </Link>
        <PageTypeTag type={type} />
      </Box>
      {doc.description && <Markdown>{doc.description}</Markdown>}
      <Box variant="documentitem.info.container">
        <Box variant="documentitem.info.inner">
          {date ? (
            <Box variant="documentitem.info.date">{`created: ${dateToLocalString(
              date,
            )}`}</Box>
          ) : (
            ''
          )}
          {doc.author && (
            <Box variant="documentitem.info.author">
              {date && <Text variant="documentitem.info.comma">,</Text>}
              <Text variant="documentitem.info.by">by</Text>
              <Link
                href={getDocPath(
                  'author',
                  undefined,
                  config?.pages,
                  doc.author,
                )}
              >
                {doc.author}
              </Link>
            </Box>
          )}
        </Box>
        <TagsList tags={tags} />
      </Box>
    </Box>
  );
};
