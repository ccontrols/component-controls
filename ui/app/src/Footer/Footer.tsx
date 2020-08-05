/** @jsx jsx */
import { FC, useMemo } from 'react';
import { Text, Box, Link, jsx } from 'theme-ui';
import { useConfig } from '@component-controls/store';
import { ActionBar, ActionItems } from '@component-controls/components';

/**
 * application footer component
 */
export const Footer: FC = () => {
  const config = useConfig();
  const {
    author,
    siteUrl,
    siteTitle,
    siteCopyright = `Copyright \u00A9 ${new Date().getFullYear()}`,
    footer,
  } = config || {};
  const leftActions: ActionItems = useMemo(() => {
    const actions: ActionItems = [];
    if (siteCopyright || author) {
      actions.push({
        node: <Text>{`${siteCopyright}${author ? ` by ${author}` : ''}`}</Text>,
        id: 'copyright',
      });
    }
    return footer?.left ? [...actions, ...footer.left] : actions;
  }, [footer?.left, siteCopyright, author]);

  const rightActions: ActionItems = useMemo(() => {
    const actions: ActionItems = [];
    if (siteTitle || siteUrl) {
      actions.push({
        node: (
          <Link aria-label="visit project home page" href={siteUrl}>
            {siteTitle}
          </Link>
        ),
        id: 'site',
      });
    }
    return footer?.right ? [...footer.right, ...actions] : actions;
  }, [footer?.right, siteTitle, siteUrl]);

  if (leftActions.length || rightActions.length) {
    return (
      <Box as="footer" variant="appfooter.container">
        <ActionBar themeKey="footer" actions={leftActions} />
        <ActionBar themeKey="footer" actions={rightActions} />
      </Box>
    );
  }
  return null;
};
