/** @jsx jsx */
import { FC } from 'react';
import { transparentize } from 'polished';
import { jsx, Box, useThemeUI } from 'theme-ui';
import { ActionBar, ActionItem } from '../ActionBar';

export interface ActionContainerProps {
  /**
   * optional actions provided to the component
   */
  actions?: ActionItem[];

  /**
   * padding at the top, to account for the absolute position of the ActionBar
   */
  paddingTop?: string | number;

  /**
   * if plain, skip the border and spacing around the children
   */
  plain?: boolean;
}

/**
 * a boxed container with actions.
 */
export const ActionContainer: FC<ActionContainerProps> = ({
  children,
  actions,
  paddingTop,
  plain,
}) => {
  const { theme } = useThemeUI();
  return (
    <div>
      {actions && <ActionBar actions={actions} />}
      {plain ? (
        children
      ) : (
        <Box
          sx={{
            borderRadius: 4,
            border: `1px solid ${transparentize(
              0.9,
              theme.colors ? theme.colors.text : 'black',
            )}`,
            'div:first-child, svg:first-child': {
              paddingTop,
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};
