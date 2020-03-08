/** @jsx jsx */
import React, { FunctionComponent, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { Box, Button, jsx } from 'theme-ui';

export interface ActionItem {
  title: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  hidden?: boolean;
}

export interface ActionBarProps {
  actionItems: ActionItem[];
}

const StyledContainer = styled.div`
  position: relative;
`;

const StyledFlex = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row-reverse;
  width: 100%;
`;

const ActionColors = (disabled: boolean | undefined) => ({
  backgroundColor: 'highlight',
  color: disabled ? '#ddd' : 'background',
  cursor: disabled ? 'not-allowed' : undefined,
  px: 2,
  py: 1,
  lineHeight: 1,
  borderRadius: 0,
  border: 'none',
});
export const ActionBar: FunctionComponent<ActionBarProps> = ({
  actionItems,
}) => (
  <StyledContainer>
    <StyledFlex>
      {actionItems
        .filter(({ hidden }) => !hidden)
        .map(({ title, onClick, disabled }, index: number) => (
          <Box
            key={`${typeof title === 'string' ? title : 'item'}_${index}`}
            sx={{
              ml: 1,
              fontSize: 1,
              a: ActionColors(disabled),
              button: ActionColors(disabled),
            }}
          >
            {typeof title === 'string' ? (
              <Button onClick={onClick} disabled={disabled}>
                {title}
              </Button>
            ) : (
              title
            )}
          </Box>
        ))}
    </StyledFlex>
  </StyledContainer>
);
