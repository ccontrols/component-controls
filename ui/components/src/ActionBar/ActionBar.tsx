/** @jsx jsx */
import { FC, useMemo } from 'react';
import { Box, Button, jsx } from 'theme-ui';
import { getSortedActions, ActionItems } from './utils';
import { Link } from '../Link';

export interface ActionBarProps {
  /**
   * collection of action items
   */
  actions?: ActionItems;

  /**
   * two possible layouts from the theme
   */
  themeKey?: 'actionbar' | 'toolbar';
}

/**
 * a strip of actions to be attached to a container
 * the action items contain the labels and click event handler
 * actions can accept an order prop, and can also be superimposed
 *
 */
export const ActionBar: FC<ActionBarProps> = ({
  actions = [],
  themeKey = 'actionbar',
}) => {
  const items = useMemo(() => {
    const sortedItems = getSortedActions(actions);
    return sortedItems.map(
      ({ title, onClick, 'aria-label': ariaLabel, group, href }, index) => {
        const nextGroup =
          index < sortedItems.length - 1 ? sortedItems[index + 1].group : group;
        return (
          <Box
            key={`${typeof title === 'string' ? title : 'item'}_${index}`}
            variant={`${themeKey}.item`}
            sx={{
              mr: index === 0 ? 1 : 0,
              ml: nextGroup !== group || group === undefined ? 2 : 1,
            }}
          >
            {typeof title === 'string' ? (
              href ? (
                <Link href={href} aria-label={ariaLabel}>
                  {title}
                </Link>
              ) : (
                <Button onClick={onClick} aria-label={ariaLabel}>
                  {title}
                </Button>
              )
            ) : (
              title
            )}
          </Box>
        );
      },
    );
  }, [actions, themeKey]);
  return (
    <Box variant={`${themeKey}.container`}>
      <Box variant={`${themeKey}.inner`}>{items}</Box>
    </Box>
  );
};
