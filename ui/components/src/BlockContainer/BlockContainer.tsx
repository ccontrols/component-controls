/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, Box, Flex, Link, Divider } from 'theme-ui';
import Octicon, {
  Link as LinkIcon,
  ChevronRight,
  ChevronDown,
} from '@primer/octicons-react';
import styled from '@emotion/styled';
import { Subtitle } from '../Subtitle';
import { Collapsible } from '../Collapsible';
import { ActionBar, ActionItem } from '../ActionBar';

const SpacedBlockContainer = styled.div(() => ({
  position: 'relative',
  margin: '25px 0 40px 0',
}));

const FramedBlockContainer = styled.div(() => ({
  boxSadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
  borderRadius: 4,
  border: '1px solid rgba(0, 0, 0, 0.1)',
}));

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
  const id = title ? title.toLowerCase().replace(/\s/g, '-') : undefined;
  //workaround for storybook iframe url
  const url =
    (window.location != window.parent.location
      ? document.referrer
      : document.location.href) || '';
  return (
    <SpacedBlockContainer id={id}>
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

        {title && <Subtitle css={{ paddingRight: 10 }}>{title}</Subtitle>}
        <Link
          aria-label={isOpen ? 'Collapse this block' : 'Expand this block'}
          css={{
            cursor: 'pointer',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Octicon icon={isOpen ? ChevronDown : ChevronRight} />
        </Link>
      </Flex>
      <Collapsible isOpen={isOpen}>
        {actions && <ActionBar actionItems={actions} />}
        <FramedBlockContainer>{children}</FramedBlockContainer>
      </Collapsible>
      {!isOpen && <Divider />}
    </SpacedBlockContainer>
  );
};
