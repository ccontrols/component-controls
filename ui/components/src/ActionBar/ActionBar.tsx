/** @jsx jsx */
import { FunctionComponent } from 'react';
import { transparentize } from 'polished';
import {
  Theme,
  Box,
  Flex,
  Button,
  jsx,
  useThemeUI,
  SxStyleProp,
} from 'theme-ui';
import { getSortedActions, ActionItems } from './utils';

export interface ActionBarProps {
  /**
   * collection of action items
   */
  actions: ActionItems;
}

const ActionColors = ({
  theme,
  disabled,
}: {
  theme: Theme;
  disabled: boolean | undefined;
}) => {
  const styles: SxStyleProp = {
    color: disabled ? '#ddd' : 'background',
    cursor: disabled ? 'not-allowed' : undefined,
    px: 2,
    py: 1,
    lineHeight: 1,
    borderRadius: 1,
    display: 'inline-block',
  };
  if (theme.colors) {
    styles.backgroundColor = transparentize(
      0.15,
      theme.colors['highlight'] as string,
    );
    styles.boxShadow = `${transparentize(
      0.9,
      theme.colors.text as string,
    )} 0 1px 3px 1px, ${transparentize(
      0.35,
      theme.colors.text as string,
    )} 0 0 0 1px`;
    styles.border = `1px solid ${theme.colors['highlight'] as string}`;
  }
  return styles;
};

/**
 * a strip of actions to be attached to a container
 * the action items contain the labels and click event handler
 * actions can accept an order prop, and can also be superimposed
 *
 */
export const ActionBar: FunctionComponent<ActionBarProps> = ({
  actions = [],
}) => {
  const { theme } = useThemeUI();
  const sortedItems = getSortedActions(actions);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Flex
        sx={{
          position: 'absolute',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            zIndex: 1,
            marginLeft: 'auto',
          }}
        >
          {sortedItems.map(
            (
              { title, onClick, disabled, 'aria-label': ariaLabel, group },
              index,
            ) => {
              const nextGroup =
                index < sortedItems.length - 1
                  ? sortedItems[index + 1].group
                  : group;
              return (
                <Box
                  key={`${typeof title === 'string' ? title : 'item'}_${index}`}
                  sx={{
                    mt: 1,
                    mr: index === 0 ? 1 : 0,
                    ml: nextGroup != group || group === undefined ? 2 : 1,
                    fontSize: 1,
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
          )}
        </div>
      </Flex>
    </div>
  );
};
