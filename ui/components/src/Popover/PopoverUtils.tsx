/** @jsx jsx */
import { FC, forwardRef, Ref } from 'react';
import { jsx, Box, BoxProps } from 'theme-ui';

const SPACING = 8;

const match = (
  requested: string,
  actual: string,
  value: number | string,
  fallback: number | string = 0,
) => (actual.split('-')[0] === requested ? value : fallback);

const matchPx = (
  requested: string,
  actual: string,
  value: number | string,
  fallback: number | string = 0,
) => {
  const result = match(requested, actual, value, fallback);
  return typeof result === 'number' ? `${result}px` : result;
};

export const Arrow: FC<{
  placement: string;
  borderColor: string;
} & BoxProps> = forwardRef(
  ({ placement, borderColor, ...rest }, ref: Ref<HTMLDivElement>) => (
    <Box
      sx={{
        position: 'absolute',
        borderStyle: 'solid',
        background: 'background',
        marginBottom: matchPx('top', placement, 0, SPACING),
        marginTop: matchPx('bottom', placement, 0, SPACING),
        marginRight: matchPx('left', placement, 0, SPACING),
        marginLeft: matchPx('right', placement, 0, SPACING),

        bottom: matchPx('top', placement, SPACING * -1, 'auto'),
        top: matchPx('bottom', placement, SPACING * -1, 'auto'),
        right: matchPx('left', placement, SPACING * -1, 'auto'),
        left: matchPx('right', placement, SPACING * -1, 'auto'),

        borderBottomWidth: matchPx('top', placement, 0, SPACING),
        borderTopWidth: matchPx('bottom', placement, 0, SPACING),
        borderRightWidth: matchPx('left', placement, 0, SPACING),
        borderLeftWidth: matchPx('right', placement, 0, SPACING),

        borderTopColor: match(
          'top',
          placement,
          borderColor,
          'transparent',
        ) as string,
        borderBottomColor: match(
          'bottom',
          placement,
          borderColor,
          'transparent',
        ) as string,
        borderLeftColor: match(
          'left',
          placement,
          borderColor,
          'transparent',
        ) as string,
        borderRightColor: match(
          'right',
          placement,
          borderColor,
          'transparent',
        ) as string,
      }}
      ref={ref}
      {...rest}
    />
  ),
);

export const Wrapper: FC<{
  placement: string;
  borderColor: string;
  hidden: boolean;
} & BoxProps> = forwardRef(
  ({ placement, borderColor, hidden, ...rest }, ref: Ref<HTMLDivElement>) => (
    <Box
      sx={{
        display: hidden ? 'none' : 'inline-block',
        background: 'background',
        marginTop: matchPx('bottom', placement, SPACING + 2, 0),
        marginLeft: matchPx('right', placement, SPACING + 2, 0),
        marginRight: matchPx('left', placement, SPACING + 2, 0),
        filter: `
  drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
  drop-shadow(0 1px 3px rgba(0,0,0,0.1))
`,
        borderRadius: 8,
        fontSize: 12,
        border: `1px solid ${borderColor}`,
      }}
      ref={ref}
      {...rest}
    />
  ),
);
