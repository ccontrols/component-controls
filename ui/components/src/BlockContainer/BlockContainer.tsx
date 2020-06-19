/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, Flex, Link, Divider, Box, SxStyleProp } from 'theme-ui';
import Octicon, {
  Link as LinkIcon,
  ChevronRight,
  ChevronDown,
} from '@primer/octicons-react';
import { Markdown } from '../Markdown';
import { Subtitle } from '../Subtitle';
import { Subheading } from '../Subheading';
import { Collapsible } from '../Collapsible';
import { pageLink } from './pageLink';

export interface BlockContainerProps {
  /**
   * optional section title for the block.
   */
  title?: string;

  /**
   * optional markdown description.
   */
  description?: string;

  /**
   * optional id to be used for the block
   * if no id is provided, one will be calculated automatically
   * from the title.
   */
  id?: string;

  /**
   * if false, will nothave a collapsible frame.
   */
  collapsible?: boolean;

  /**
   * theme-ui styling object for Block Box
   */
  sxStyle?: SxStyleProp;
}

/**
 * a collapsible block with a title. The title creates also an attribute id and an octicon for github style navigation.
 *
 */
export const BlockContainer: FC<BlockContainerProps> = ({
  children,
  title,
  id,
  description,
  collapsible = true,
  sxStyle,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const blockId =
    id !== '.'
      ? id
      : undefined ||
        (title ? title.toLowerCase().replace(/\s/g, '-') : undefined);
  const BlockTitle: FC = () =>
    collapsible ? (
      <Subtitle>{title}</Subtitle>
    ) : (
      <Subheading>{title}</Subheading>
    );
  return (
    <Box variant="blockcontainer.container" sx={sxStyle} id={blockId}>
      {(blockId || title || collapsible) && (
        <Flex variant="blockcontainer.inner">
          {blockId && (
            <Link
              variant="blockcontainer.link"
              href={pageLink(blockId)}
              data-title={title}
            >
              <Octicon icon={LinkIcon} />
            </Link>
          )}
          {title && collapsible && (
            <Link
              aria-label={isOpen ? 'Collapse this block' : 'Expand this block'}
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
                <BlockTitle />
                <Octicon
                  sx={{ ml: 2 }}
                  icon={isOpen ? ChevronDown : ChevronRight}
                />
              </Flex>
            </Link>
          )}
          {title && !collapsible && <BlockTitle />}
        </Flex>
      )}
      {description && <Markdown>{description}</Markdown>}
      {collapsible && children ? (
        <Collapsible isOpen={isOpen}>{children}</Collapsible>
      ) : (
        children
      )}
      {!isOpen && <Divider />}
    </Box>
  );
};
