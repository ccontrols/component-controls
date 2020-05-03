/** @jsx jsx */
import { FC } from 'react';
import styled from '@emotion/styled';
import { jsx, Box, Theme } from 'theme-ui';
import { ActionBar, ActionItem } from '../ActionBar';

const StyledContainer = styled(Box)`
  ${({ theme }: { theme: Theme }) => `
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px ${theme.colors?.shadow};
    border: 1px solid  ${theme.colors?.shadow};
  `}
`;

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
      {plain ? children : <StyledContainer>{children}</StyledContainer>}
    </div>
  );
};
