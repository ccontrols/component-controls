/* eslint-disable react/display-name */
/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, Flex, Link, Divider, Box, SxStyleProp, Text } from 'theme-ui';
import { ChevronRightIcon, ChevronDownIcon } from '@primer/octicons-react';
import { Markdown } from '../Markdown';
import { Collapsible } from '../Collapsible';
import { LinkHeading } from '../LinkHeading';

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

  /**
   * testing id
   */
  'data-testid'?: string;
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
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const blockId = id !== '.' ? id : undefined || title;

  return (
    <Box variant="blockcontainer.container" sx={sxStyle} {...rest}>
      {(blockId || title || collapsible) && (
        <LinkHeading
          as={collapsible ? 'h3' : 'h4'}
          id={blockId}
          title={title}
          sx={{ my: 0, py: 1 }}
        >
          {title &&
            (collapsible ? (
              <Flex variant="blockcontainer.titleblock">
                {title}
                <Link
                  aria-label={
                    isOpen ? 'Collapse this block' : 'Expand this block'
                  }
                  sx={{
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Text variant="blockcontainer.expandicon">
                    {isOpen ? (
                      <ChevronDownIcon verticalAlign="middle" />
                    ) : (
                      <ChevronRightIcon verticalAlign="middle" />
                    )}
                  </Text>
                </Link>
              </Flex>
            ) : (
              title
            ))}
        </LinkHeading>
      )}
      {description && (
        <Markdown
          components={{
            p: props => (
              <Box as="p" variant="blockcontainer.description.p" {...props} />
            ),
          }}
        >
          {description}
        </Markdown>
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
