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
}

/**
 * a boxed container with actions.
 */
export const ActionContainer: FC<ActionContainerProps> = ({
  children,
  actions,
  paddingTop,
}) => {
  const { theme } = useThemeUI();
  return (
    <div>
      {actions && <ActionBar actions={actions} />}
      <Box
        sx={{
          borderRadius: 4,
          boxShadow: `${transparentize(
            0.9,
            theme.colors?.text as string,
          )} 0 1px 3px 1px, ${transparentize(
            0.9,
            theme.colors?.text as string,
          )} 0 0 0 1px`,
          'div:first-child, svg:first-child': {
            paddingTop,
          },
        }}
      >
        {children}
      </Box>
    </div>
  );
};
