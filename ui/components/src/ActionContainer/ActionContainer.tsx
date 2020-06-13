/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { ActionBar, ActionItem } from '../ActionBar';

export interface ActionContainerProps {
  /**
   * optional actions provided to the component
   */
  actions?: ActionItem[];

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
  plain,
}) => {
  const hasActions = actions && !!actions.length;
  return (
    <div>
      {hasActions && <ActionBar actions={actions} />}
      {plain ? children : <Box variant="actioncontainer">{children}</Box>}
    </div>
  );
};
