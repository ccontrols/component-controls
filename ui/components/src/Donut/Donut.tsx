import React, { FC, forwardRef, Ref } from 'react';
import { Box } from 'theme-ui';

export type DonutRef = Ref<HTMLDivElement>;

export interface DonutProps {
  /**
   * svg area size
   */
  size?: number;
  /**
   * circle stroke size
   */
  strokeWidth?: number;
  /**
   * initial value = between min and max
   */
  value?: number;
  /**
   * minimum value
   */
  min?: number;
  /**
   * maximum value
   */
  max?: number;
  /**
   * a title for the graphic
   */
  title?: string;
  ref?: DonutRef;
}
export const Donut: FC<DonutProps> = forwardRef(function Donut(
  { size = 128, strokeWidth = 2, value = 0, min = 0, max = 1, title, ...rest },
  ref: DonutRef,
) {
  const r = 16 - strokeWidth;
  const C = 2 * r * Math.PI;
  // eslint-disable-next-line no-mixed-operators
  const offset = max !== min ? C - ((value - min) / (max - min)) * C : 0;
  return (
    <Box
      ref={ref}
      as="svg"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      viewBox="0 0 32 32"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      fill="none"
      stroke="currentcolor"
      role="img"
      aria-label={`donut graphic value ${value} - from ${min} tp ${max}`}
      sx={{
        color: 'primary',
      }}
      {...rest}
    >
      {title && <title>{title}</title>}
      <circle cx={16} cy={16} r={r} opacity={1 / 8} />
      <circle
        cx={16}
        cy={16}
        r={r}
        strokeDasharray={C}
        strokeDashoffset={offset}
        transform="rotate(-90 16 16)"
      />
    </Box>
  );
});
