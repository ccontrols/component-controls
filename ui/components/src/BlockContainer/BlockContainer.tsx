/** @jsx jsx */
import React, { FC } from 'react';
import { transparentize } from 'polished';
import { jsx, Flex, Link, Divider, Box, useThemeUI } from 'theme-ui';
import Octicon, {
  Link as LinkIcon,
  ChevronRight,
  ChevronDown,
} from '@primer/octicons-react';
import { Subtitle } from '../Subtitle';
import { Collapsible } from '../Collapsible';
import { ActionBar, ActionItem } from '../ActionBar';

export interface BlockContainerProps {
  /**
   * optional section title for the block
   */
  title?: string;
  /**
   * additional actions provided to the component
   */
  actions?: ActionItem[];
}

export const BlockContainer: FC<BlockContainerProps> = ({
  children,
  title,
  actions,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const { theme } = useThemeUI();
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
      <Collapsible isOpen={isOpen}>
        {actions && <ActionBar actionItems={actions} />}
        <Box
          sx={{
            borderRadius: 4,
            boxShadow: `${transparentize(
              0.9,
              theme.colors?.text as string,
            )} 0 1px 3px 1px, ${transparentize(
              0.9,
              theme.colors?.text as string,
            )} 0 0 0 1px`,
          }}
        >
          {children}
        </Box>
      </Collapsible>
      {!isOpen && <Divider />}
    </Box>
  );
};
