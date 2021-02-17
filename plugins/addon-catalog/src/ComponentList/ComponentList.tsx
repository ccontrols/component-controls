/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, BoxProps } from 'theme-ui';
import { ComponentCard } from '../ComponentCard';

export type ComponentListProps = {
  /**
   * minimum card width in pixels. defaults to 420px
   */
  minWidth?: number;
  /**
   * story ids
   */

  stories: string[];
};

/**
 * Grid display of component cards
 */
export const ComponentList: FC<ComponentListProps & BoxProps> = ({
  stories,
  minWidth = 420,
  ...rest
}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill,minmax(${minWidth}px,1fr))`,
        columnGap: 3,
        rowGap: 4,
      }}
      {...rest}
    >
      {stories.map((storyId, idx) => (
        <ComponentCard key={`${storyId}_${idx}`} id={storyId} />
      ))}
    </Box>
  );
};
