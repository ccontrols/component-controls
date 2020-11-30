/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import { JSXNode } from '@component-controls/core';
import { Tag } from '@component-controls/components';

export const JSXTreeNode: FC<{
  node: JSXNode;
  isExpanded: boolean;
}> = ({ node, isExpanded }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      color: 'secondary',
    }}
  >
    <Text variant="small" sx={{ fontWeight: 'bold' }}>{`<${node.name}`}</Text>
    <Box
      sx={{
        pr: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'primary',
      }}
    >
      {node.attributes?.map(attr => (
        <Tag
          variant="tag.small"
          key={`${attr}`}
          borderSize={0}
          color="lightgrey"
        >
          {attr}
        </Tag>
      ))}
    </Box>
    <Text variant="small" sx={{ fontWeight: 'bold' }}>
      {`${!isExpanded || !node.children?.length ? '/>' : '>'}`}
    </Text>
  </Box>
);
