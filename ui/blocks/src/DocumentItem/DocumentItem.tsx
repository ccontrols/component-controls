/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import {
  Document,
  defDocType,
  getDocPath,
  dateToLocalString,
} from '@component-controls/core';
import { Subtitle, Markdown, Link } from '@component-controls/components';
import { useStore } from '@component-controls/store';
import { PageTypeTag } from '../PageTypeTag';
import { TagsList } from '../TagsList';

export interface DocumentItemProps {
  /**
   * link to the document
   */
  link: string;

  /**
   * document to be displayed
   */
  doc: Document;
}

/**
 * displays a single doument item
 */
export const DocumentItem: FC<DocumentItemProps> = ({ doc, link }) => {
  const { type = defDocType, tags = [], date, author } = doc;
  const store = useStore();
  const dateNode = date ? (
    <Box variant="documentitem.info.inner">
      {date ? (
        <Box variant="documentitem.info.date">{`created: ${dateToLocalString(
          date,
        )}`}</Box>
      ) : (
        ''
      )}
      {author && (
        <Box variant="documentitem.info.author">
          {date && <Text variant="documentitem.info.comma">,</Text>}
          <Text variant="documentitem.info.by">by</Text>
          <Link href={getDocPath('author', undefined, store, author)}>
            {author}
          </Link>
        </Box>
      )}
    </Box>
  ) : null;
  const tagsNode = tags.length ? <TagsList tags={tags} /> : null;
  return (
    <Box variant="documentitem.container">
      <Box variant="documentitem.titlerow">
        <Link href={link}>
          <Subtitle>{doc.title}</Subtitle>
        </Link>
        <PageTypeTag type={type} />
      </Box>
      {doc.description && typeof doc.description === 'string' ? (
        <Markdown>{doc.description}</Markdown>
      ) : (
        doc.description
      )}
      {(tagsNode || dateNode) && (
        <Box variant="documentitem.info.container">
          {dateNode || <div />}
          {tagsNode}
        </Box>
      )}
    </Box>
  );
};
