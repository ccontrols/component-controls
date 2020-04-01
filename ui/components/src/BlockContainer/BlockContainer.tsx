/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, Flex, Link, Divider, Box, SxStyleProp } from 'theme-ui';
import Octicon, {
  Link as LinkIcon,
  ChevronRight,
  ChevronDown,
} from '@primer/octicons-react';
import { Subtitle } from '../Subtitle';
import { Collapsible } from '../Collapsible';

export interface BlockContainerProps {
  /**
   * optional section title for the block.
   */
  title?: string;

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
  collapsible = true,
  sxStyle,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const blockId =
    id || (title ? title.toLowerCase().replace(/\s/g, '-') : undefined);
  const BlockTitle: FC = () => (
    <Subtitle
      color="text"
      as={collapsible ? 'h2' : 'h3'}
      css={{ fontWeight: 400, paddingRight: 10 }}
    >
      {title}
    </Subtitle>
  );
  //workaround for storybook iframe url
  const url =
    (window.location != window.parent.location
      ? document.referrer
      : document.location.href) || '';
  return (
    <Box
      sx={{
        position: 'relative',
        mt: 4,
        mb: 4,
        width: '100%',
        ...sxStyle,
      }}
      id={blockId}
    >
      {(blockId || title || collapsible) && (
        <Flex
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            pb: title ? 2 : 0,
            ':hover': {
              a: {
                visibility: 'visible',
              },
            },
          }}
        >
          {blockId && (
            <Link
              sx={{
                position: 'absolute',
                left: -4,
                px: 2,
                visibility: 'hidden',
                ':hover': {
                  visibility: 'visible',
                },
              }}
              href={`${url.split('#')[0]}#${blockId}`}
            >
              <Octicon icon={LinkIcon} />
            </Link>
          )}
          {title && collapsible && (
            <Link
              aria-label={isOpen ? 'Collapse this block' : 'Expand this block'}
              css={{
                cursor: 'pointer',
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
                <BlockTitle />
                <Octicon icon={isOpen ? ChevronDown : ChevronRight} />
              </Flex>
            </Link>
          )}
          {title && !collapsible && <BlockTitle />}
        </Flex>
      )}
      {collapsible && children ? (
        <Collapsible isOpen={isOpen}>{children}</Collapsible>
      ) : (
        children
      )}
      {!isOpen && <Divider />}
    </Box>
  );
};
