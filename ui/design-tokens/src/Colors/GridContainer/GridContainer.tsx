import React, { FC, RefObject, useState } from 'react';
import { Grid, GridProps } from 'theme-ui';
import { ContainerProps } from '../types';

export type GridContainerProps = ContainerProps & Omit<GridProps, 'children'>;

export const GridContainer: FC<GridContainerProps> = ({
  children,
  palette,
  gap = 2,
  columns = [3],
  ref,
  ...rest
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      ref={ref as RefObject<HTMLDivElement>}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      gap={gap}
      columns={columns}
      {...rest}
    >
      {Object.keys(palette).map(color =>
        children({ name: color, value: palette[color], hover }),
      )}
    </Grid>
  );
};
