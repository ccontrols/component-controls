/** @jsx jsx */
import { FC, useContext, useMemo } from 'react';
import { jsx, Box, Heading, Image } from 'theme-ui';
import { DocType, getDocTypePath, getHomePath } from '@component-controls/core';
import { ActionBar, ActionItems, Link } from '@component-controls/components';
import {
  ColorMode,
  SidebarContext,
  Header as AppHeader,
} from '@component-controls/components';
import {
  useConfig,
  useDocTypeCount,
  useCurrentDocument,
  getIndexPage,
  useStore,
} from '@component-controls/store';
import { Search } from '@component-controls/blocks';
import * as logoImg from './media/logo.png';

export interface HeaderProps {
  toolbar?: {
    left?: ActionItems;
    right?: ActionItems;
  };
}
/**
 * application header component
 */
export const Header: FC<HeaderProps> = ({ toolbar = {} }) => {
  const { SidebarToggle, collapsed, responsive } = useContext(SidebarContext);
  const store = useStore();
  const homePage = useMemo(() => getIndexPage(store), [store]);
  const homePath = getHomePath(store);
  const docCounts = useDocTypeCount();
  const config = useConfig();
  const doc = useCurrentDocument();
  const { pages, siteTitle, logo, siteDescription } = config || {};
  const leftActions: ActionItems = useMemo(() => {
    const LogoLink: FC = ({ children }) => (
      <Link
        variant="appheader.title"
        href={homePath}
        aria-label={siteTitle}
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        {children}
      </Link>
    );
    const LogoImage: FC<{ src: string }> = ({ src }) => (
      <Image alt={siteDescription} variant="appheader.logo" src={src} />
    );
    const actions: ActionItems = [
      {
        node: logo ? (
          typeof logo === 'string' ? (
            <LogoLink>
              <LogoImage src={logo} />
            </LogoLink>
          ) : (
            logo
          )
        ) : logo === null ? (
          'Home'
        ) : (
          <LogoLink>
            <LogoImage src={logoImg.default} />
          </LogoLink>
        ),
        href: homePath,
        'aria-label': 'go to home page',
        id: 'home',
      },
    ];
    if (pages) {
      const pageItems = Object.keys(pages)
        .map(type => {
          const docType = type as DocType;
          return { page: pages[docType], docType };
        })
        .filter(({ page, docType }) => {
          const docInfo = docCounts[docType];
          return (
            page.topMenu &&
            docInfo &&
            docInfo.count &&
            homePage.docId !== docInfo.home?.title
          );
        })
        .map(({ page }) => ({
          id: page.label?.toLowerCase(),
          'aria-label': `go to page ${page.label}`,
          href: getDocTypePath(store, page),
          node: page.label,
        }));
      if (pageItems.length) {
        Array.prototype.push.apply(actions, pageItems);
      } else {
        actions[0].node = (
          <LogoLink>
            {logo === null ? (
              <Heading as="h2">{siteTitle}</Heading>
            ) : (
              <LogoImage src={logoImg.default} />
            )}
          </LogoLink>
        );
      }
    }
    return toolbar.left ? [...actions, ...toolbar.left] : actions;
  }, [
    pages,
    toolbar.left,
    logo,
    docCounts,
    homePath,
    store,
    homePage,
    siteTitle,
    siteDescription,
  ]);

  const rightActions: ActionItems = useMemo(() => {
    const actions: ActionItems = [
      { node: <Search />, id: 'search' },
      { node: <ColorMode />, id: 'colormode' },
    ];
    return toolbar.right ? [...toolbar.right, ...actions] : actions;
  }, [toolbar.right]);
  return (
    <AppHeader>
      <Box variant="appheader.items">
        {doc?.navSidebar && collapsed && <SidebarToggle />}
        <ActionBar themeKey="toolbar" actions={leftActions} />
      </Box>
      <Box variant="appheader.items">
        {!responsive && <ActionBar themeKey="toolbar" actions={rightActions} />}
      </Box>
    </AppHeader>
  );
};
