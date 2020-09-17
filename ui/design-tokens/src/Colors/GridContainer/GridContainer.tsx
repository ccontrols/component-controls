import React, { FC, RefObject } from 'react';
import { Grid, GridProps } from 'theme-ui';
import { ContainerProps } from '../types';

export type GridContainerProps = ContainerProps & Omit<GridProps, 'children'>;

export const GridContainer: FC<GridContainerProps> = ({
  ColorBlock,
  palette,
  gap = 2,
  columns = [3],
  ref,
  ...rest
}) => (
  <Grid
    ref={ref as RefObject<HTMLDivElement>}
    gap={gap}
    columns={columns}
    {...rest}
  >
    {Object.keys(palette).map(color => (
      <ColorBlock
        key={`color_item_${color}_${palette[color]}`}
        name={color}
        color={palette[color]}
      />
    ))}
  </Grid>
);
