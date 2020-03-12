/** @jsx jsx */
import React, { FunctionComponent, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { Theme, Box, Button, jsx, useThemeUI } from 'theme-ui';

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

const ActionColors = ({
  theme,
  disabled,
}: {
  theme: Theme;
  disabled: boolean | undefined;
}) => {
  console.log(theme);
  return {
    backgroundColor: transparentize(
      0.15,
      theme.colors?.['highlight'] as string,
    ),
    color: disabled ? '#ddd' : 'background',
    cursor: disabled ? 'not-allowed' : undefined,
    px: 2,
    py: 1,
    lineHeight: 1,
    borderRadius: 1,
    display: 'inline-block',
    boxShadow: `${transparentize(
      0.9,
      theme.colors?.text as string,
    )} 0 1px 3px 1px, ${transparentize(
      0.35,
      theme.colors?.text as string,
    )} 0 0 0 1px`,
    border: `1px solid ${theme.colors?.['highlight'] as string}`,
  };
};
export const ActionBar: FunctionComponent<ActionBarProps> = ({
  actionItems,
}) => {
  const { theme } = useThemeUI();
  return (
    <StyledContainer>
      <StyledFlex>
        {actionItems
          .filter(({ hidden }) => !hidden)
          .map(({ title, onClick, disabled }, index: number) => (
            <Box
              key={`${typeof title === 'string' ? title : 'item'}_${index}`}
              sx={{
                mt: 2,
                mr: 2,
                fontSize: 1,
                a: ActionColors({ theme, disabled }),
                button: ActionColors({ theme, disabled }),
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
};
