/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import {
  Document,
  defDocType,
  RunConfiguration,
} from '@component-controls/core';
import { Subtitle, Markdown, Link } from '@component-controls/components';
import { PageTypeTag } from '../PageTypeTag';
import { DocumentShortItem } from './DocumentShortItem';

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
  const { type = defDocType } = doc;
  return (
    <Box variant="documentitem.container">
      <Box variant="documentitem.titlerow">
        <Link href={link}>
          <Subtitle>{doc.title}</Subtitle>
        </Link>
        <PageTypeTag type={type} />
      </Box>
      {doc.description && <Markdown>{doc.description}</Markdown>}
      <DocumentShortItem config={config} doc={doc} />
    </Box>
  );
};
