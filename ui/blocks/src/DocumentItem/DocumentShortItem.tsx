/** @jsx jsx */
import { FC, Fragment } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import {
  Document,
  getDocPath,
  dateToLocalString,
  RunConfiguration,
} from '@component-controls/core';
import { Link } from '@component-controls/components';
import { TagsList } from '../TagsList';

export interface DocumentShortItemProps {
  /**
   * document to be displayed
   */
  doc?: Document;
  /**
   * store configuration object
   */
  config?: RunConfiguration;

  reverse?: boolean;
}
export const DocumentShortItem: FC<DocumentShortItemProps> = ({
  doc,
  config,
  reverse,
}) => {
  const { tags = [], date, author } = doc || {};
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
          <Link href={getDocPath('author', undefined, config?.pages, author)}>
            {author}
          </Link>
        </Box>
      )}
    </Box>
  ) : null;
  const tagsNode = tags.length ? <TagsList tags={tags} /> : null;
  return tagsNode || dateNode ? (
    <Box variant="documentitem.info.container">
      {reverse ? (
        <Fragment>
          {tagsNode || <div />}
          {dateNode}
        </Fragment>
      ) : (
        <Fragment>
          {dateNode || <div />}
          {tagsNode}
        </Fragment>
      )}
    </Box>
  ) : null;
};
