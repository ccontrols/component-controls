/** @jsx jsx */
import { FC, useState } from 'react';
import { jsx, Flex, Link, Divider, Box, BoxProps, Text } from 'theme-ui';
import { ChevronRightIcon, ChevronDownIcon } from '@primer/octicons-react';
import { Collapsible } from '../Collapsible';
import { LinkHeading } from '../LinkHeading';
import { Description } from '../Description';

export interface BlockContainerOwnProps {
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
   * testing id
   */
  'data-testid'?: string;
  /**
   * inner container variant or plain
   */
  plain?: boolean;
}

export type BlockContainerProps = BlockContainerOwnProps & BoxProps;

/**
 * Collapsible block container with a title. The title creates also an attribute id and an octicon for github style navigation.
 *
 */
export const BlockContainer: FC<BlockContainerProps> = ({
  children,
  title,
  id,
  description,
  collapsible = true,
  plain = false,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const blockId = id !== '.' ? id || title : title;
  const content = !plain ? (
    <Box variant="blockcontainer.inner">{children}</Box>
  ) : (
    children
  );
  return (
    <Box variant="blockcontainer.container" {...rest}>
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
      {description && <Description>{description}</Description>}
      {collapsible ? (
        <Collapsible isOpen={isOpen}>{content}</Collapsible>
      ) : (
        content
      )}
      {!isOpen && <Divider />}
    </Box>
  );
};
