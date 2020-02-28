import React, { FunctionComponent, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { Theme } from 'theme-ui';

const Container = styled.div(({ theme }: { theme?: Theme }) => ({
  bottom: 0,
  right: 0,
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  background: theme?.colors?.background,
}));

interface ActionButtonProps {
  disabled?: boolean;
}
export const ActionButton = styled.button<ActionButtonProps>(
  ({ theme }: { theme: Theme } & ActionButtonProps) => ({
    border: '0 none',
    padding: '4px 10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: theme?.colors?.text,
    background: theme?.colors?.background,

    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 'bold',

    borderBottom: `1px solid ${theme?.colors?.muted}`,
    borderLeft: `1px solid ${theme?.colors?.muted}`,
    borderRight: `1px solid ${theme?.colors?.muted}`,
    marginLeft: -1,

    borderRadius: `4px 0 0 0`,

    '&:not(:last-child)': { borderRight: `1px solid ${theme?.colors?.muted}` },
    '& + *': {
      borderLeft: `1px solid ${theme?.colors?.muted}`,
      borderRadius: 0,
    },

    '&:focus': {
      boxShadow: `${theme?.colors?.secondary} 0 -3px 0 0 inset`,
      outline: '0 none',
    },
  }),
  ({ disabled }) =>
    disabled && {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
);
ActionButton.displayName = 'ActionButton';

export interface ActionItem {
  title: string | JSX.Element;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export interface ActionBarProps {
  actionItems: ActionItem[];
}

export const ActionBar: FunctionComponent<ActionBarProps> = ({
  actionItems,
  ...props
}) => (
  <Container {...props}>
    {actionItems.map(({ title, onClick, disabled }, index: number) => (
      <ActionButton
        key={`${typeof title === 'string' ? title : 'item'}_${index}`}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </ActionButton>
    ))}
  </Container>
);
