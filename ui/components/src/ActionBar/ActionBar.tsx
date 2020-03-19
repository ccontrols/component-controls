/** @jsx jsx */
import React, { FunctionComponent, MouseEvent } from 'react';
import { transparentize } from 'polished';
import { Theme, Box, Flex, Button, jsx, useThemeUI } from 'theme-ui';

/**
 * an item in the ActionBar component
 */
export interface ActionItem {
  /**
   * optional id, used if title is not set
   */
  id?: string;
  /**
   * title - if a string, will use the Button component, else can prvide custom React component
   */
  title: React.ReactNode;
  /**
   * onClick event when passing a string as the title
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /**
   * displays the Button as disabled
   */
  disabled?: boolean;
  /**
   * hide an action item
   */
  hidden?: boolean;

  /**
   * optional order, if not provided will use the natural order of items from right to left
   */
  order?: number;
}

export interface ActionBarProps {
  actions: ActionItem[];
}

const ActionColors = ({
  theme,
  disabled,
}: {
  theme: Theme;
  disabled: boolean | undefined;
}) => ({
  backgroundColor: transparentize(0.15, theme.colors?.['highlight'] as string),
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
});

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
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Flex
        sx={{
          position: 'absolute',
          flexDirection: 'row-reverse',
          width: '100%',
        }}
      >
        {actions
          .filter(({ hidden }) => !hidden)
          .reduce((acc: ActionItem[], item: ActionItem) => {
            const accIndex = acc.findIndex(
              accItem =>
                (accItem.id ?? accItem.title) === (item.id ?? item.title),
            );
            if (accIndex > -1) {
              acc[accIndex] = { ...acc[accIndex], ...item };
              return acc;
            } else {
              return [...acc, item];
            }
          }, [])
          .map(
            ({ order, ...item }, index) =>
              ({
                ...item,
                order: order ?? index,
              } as ActionItem),
          )
          .sort((a: ActionItem, b: ActionItem) => {
            //@ts-ignore
            return a.order - b.order;
          })
          .map(({ title, onClick, disabled }, index) => (
            <Box
              key={`${typeof title === 'string' ? title : 'item'}_${index}`}
              sx={{
                mt: 1,
                mx: 1,
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
      </Flex>
    </Box>
  );
};
