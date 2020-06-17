/** @jsx jsx */
import { FC, useMemo } from 'react';
import { transparentize } from 'polished';
import { Theme, Box, Flex, Button, jsx } from 'theme-ui';
import { getSortedActions, ActionItems } from './utils';
import { useTheme } from '../ThemeContext';

export interface ActionBarProps {
  /**
   * collection of action items
   */
  actions?: ActionItems;
}

const ActionColors = ({
  theme,
  disabled,
}: {
  theme: Theme;
  disabled: boolean | undefined;
}) => ({
  backgroundColor: theme.colors?.['action'],
  color: disabled ? '#ddd' : 'background',
  //safari fix:
  WebkitTextFillColor: 'initial',
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
  border: `1px solid ${theme.colors?.['action'] as string}`,
});

/**
 * a strip of actions to be attached to a container
 * the action items contain the labels and click event handler
 * actions can accept an order prop, and can also be superimposed
 *
 */
export const ActionBar: FC<ActionBarProps> = ({ actions = [] }) => {
  const theme = useTheme();
  const items = useMemo(() => {
    const sortedItems = getSortedActions(actions);
    return sortedItems.map(
      ({ title, onClick, disabled, 'aria-label': ariaLabel, group }, index) => {
        const nextGroup =
          index < sortedItems.length - 1 ? sortedItems[index + 1].group : group;
        return (
          <Box
            key={`${typeof title === 'string' ? title : 'item'}_${index}`}
            variant="actionbar.item"
            sx={{
              mr: index === 0 ? 1 : 0,
              ml: nextGroup !== group || group === undefined ? 2 : 1,
              a: ActionColors({ theme, disabled }),
              button: ActionColors({ theme, disabled }),
            }}
          >
            {typeof title === 'string' ? (
              <Button
                onClick={onClick}
                disabled={disabled}
                aria-label={ariaLabel}
              >
                {title}
              </Button>
            ) : (
              title
            )}
          </Box>
        );
      },
    );
  }, [theme, actions]);
  return (
    <Box variant="actionbar.container">
      <Flex variant="actionbar.inner">{items}</Flex>
    </Box>
  );
};
