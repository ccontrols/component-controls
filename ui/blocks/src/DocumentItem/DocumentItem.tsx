/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text, BoxProps, Image, Theme } from 'theme-ui';
import {
  defDocType,
  dateToLocalString,
  DocInfo,
} from '@component-controls/core';
import { Subtitle, Markdown, Link } from '@component-controls/components';
import { PageTypeTag } from '../PageTypeTag';
import { TagsList } from '../TagsList';

export interface DocumentItemProps {
  /**
   * document to be displayed
   */
  item: DocInfo;

  /**
   * if true, will also display the doc image
   */
  showImage?: boolean;
}
/**
 * displays a single doument item
 */
export const DocumentItem: FC<DocumentItemProps & BoxProps> = ({
  item,
  showImage,
  ...rest
}) => {
  const {
    title,
    description,
    type = defDocType,
    rawType,
    tags = [],
    rawTags,
    date,
    author,
    authorLink,
    link,
    image,
  } = item;
  const dateNode = date ? (
    <Box variant="documentitem.info.inner">
      {date ? (
        <Box variant="documentitem.info.date">{`created: ${dateToLocalString(
          new Date(date),
        )}`}</Box>
      ) : (
        ''
      )}
      {author && (
        <Box variant="documentitem.info.author">
          {date && <Text variant="documentitem.info.comma">,</Text>}
          <Text variant="documentitem.info.by">by</Text>
          <Link href={authorLink}>
            <Text dangerouslySetInnerHTML={{ __html: author }} />
          </Link>
        </Box>
      )}
    </Box>
  ) : null;
  const tagsNode = tags.length ? (
    <TagsList
      tags={tags}
      raw={rawTags}
      sx={{ fontSize: 0, lineHeight: '1rem' }}
    />
  ) : null;
  return (
    <Box variant="documentitem.container" {...rest}>
      {showImage && image && (
        <Link href={link}>
          <Box variant="documentitem.imageBox">
            <Image src={image} alt={title} variant="documentitem.image" />
          </Box>
        </Link>
      )}
      <Box variant="documentitem.content">
        <Box variant="documentitem.titlerow">
          <Link href={link}>
            <Subtitle
              sx={{ mr: 1 }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Link>
          <PageTypeTag type={type} raw={rawType} />
        </Box>
        {description && typeof description === 'string' ? (
          <Markdown>{description}</Markdown>
        ) : (
          description
        )}
        {(tagsNode || dateNode) && (
          <Box variant="documentitem.info.container">
            {dateNode || <div />}
            {tagsNode}
          </Box>
        )}
      </Box>
    </Box>
  );
};
