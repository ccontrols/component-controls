/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, Flex, Link, Divider, Box, useThemeUI } from 'theme-ui';
import Octicon, {
  Link as LinkIcon,
  ChevronRight,
  ChevronDown,
} from '@primer/octicons-react';
import { Subtitle } from '../Subtitle';
import { Collapsible } from '../Collapsible';

export interface BlockContainerProps {
  /**
   * optional section title for the block
   */
  title?: string;
}

/**
 * a collapsible block with a title. The title creates also an attribute id and an octicon for github style navigation.
 *
 */
export const BlockContainer: FC<BlockContainerProps> = ({
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const id = title ? title.toLowerCase().replace(/\s/g, '-') : undefined;
  //workaround for storybook iframe url
  const url =
    (window.location != window.parent.location
      ? document.referrer
      : document.location.href) || '';
  return (
    <Box
      sx={{
        position: 'relative',
        mt: 3,
        mb: 4,
      }}
      id={id}
    >
      <Flex
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          pb: 2,
          ':hover': {
            a: {
              visibility: 'visible',
            },
          },
        }}
      >
        {id && (
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
            href={`${url.split('#')[0]}#${id}`}
          >
            <Octicon icon={LinkIcon} />
          </Link>
        )}
        {title && (
          <Link
            aria-label={isOpen ? 'Collapse this block' : 'Expand this block'}
            css={{
              cursor: 'pointer',
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
              <Subtitle css={{ paddingRight: 10 }}>{title}</Subtitle>
              <Octicon icon={isOpen ? ChevronDown : ChevronRight} />
            </Flex>
          </Link>
        )}
      </Flex>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
      {!isOpen && <Divider />}
    </Box>
  );
};
