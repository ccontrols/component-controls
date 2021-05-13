import {
  FC,
  ComponentType,
  ReactNode,
  DetailedHTMLProps,
  LinkHTMLAttributes,
  ReactElement,
} from 'react';
import { BuildProps } from './build';
import { StoryProps } from './common';
import { ActionItems } from './utility';
import { Story, Document, ExampleControls } from './document';
import { SearchOptions } from './search';
import { TokenOptions } from './tokens';

/**
 * render function by framework. By default 'react'
 */
export type FrameworkRenderFn = (props: {
  story: Story;
  doc?: Document;
  values?: ExampleControls;
  options?: any;
}) => ReactElement;

/**
 * story type pages can have multiple tabs with separate page configurations.
 */
export interface TabConfiguration {
  /**
   * title will be used as tab caption
   */
  title?: string;
  /**
   * page template - can be a package default export
   */
  component: FC<Partial<TabConfiguration>>;

  /**
   * page container react component
   */
  container?: ComponentType | null;

  /**
   * variant key in the pagecontainer theme value
   */
  variant?: string;

  /**
   * callback to determine if the tab is visible
   */
  isVisible?: (props: {
    config: RunConfiguration;
    story: Story;
    doc: Document;
  }) => boolean;
  /**
   * any custom page options
   */
  [option: string]: any;
}

export type PageTab = string | TabConfiguration | [string, TabConfiguration];

export type PageTabs = Record<string, PageTab>;

export const loadDefaultExport = (
  imported?: { default: TabConfiguration } | TabConfiguration,
): TabConfiguration => {
  return (imported as { default: TabConfiguration })?.default || imported;
};
export const loadPageTab = (
  tab: PageTab,
  imported?: TabConfiguration,
): TabConfiguration => {
  if (imported) {
    if (Array.isArray(tab)) {
      if (tab.length === 2) {
        const loaded =
          typeof tab[0] === 'string' ? loadDefaultExport(imported) : tab[0];
        return { ...loaded, ...tab[1] };
      }
    }
    if (typeof tab === 'string') {
      return loadDefaultExport(imported);
    }
  }
  return tab as TabConfiguration;
};

export type DocType = 'story' | 'blog' | 'page' | 'tags' | 'author' | string;

/**
 * page layout - sidebars, full width
 */

export interface PageLayoutProps {
  /**
   * whether to add navigation sidebar to the page
   */
  navSidebar?: boolean;
  /**
   * whether to add conext sidebar to navigate the sections of the current document
   */
  contextSidebar?: boolean;
  /**
   * whether to take a fullpage theme option
   */
  fullPage?: boolean;
}
export interface SideNavConfiguration {
  /**
   * if true, generate story-based paths. This is for documents with a navSidebar that would allow selection of specific stories.
   */
  storyPaths?: boolean;

  /**
   * if a single story in the document, and storyPaths is true= will only generate a single menu item for the doc itself
   */
  collapseSingle?: boolean;
}
export type PageConfiguration = {
  /**
   * base url path for the page
   */
  basePath?: string;

  /**
   * side navigation configuration
   */
  sideNav?: SideNavConfiguration;

  /**
   * label - used for menu labels
   */
  label?: string;
  /**
   * whether to have an index home page for the doc type.
   * if false, will show the first document of the doc type as the home page.
   */
  indexHome?: boolean;

  /**
   * whether to add to the top navigation menu
   */
  topMenu?: boolean;

  /**
   * page container react component
   */
  container?: ComponentType | null;

  /**
   * tabs configuration for story-type pages
   */
  tabs?: Record<string, TabConfiguration>;
} & PageLayoutProps;

export type PagesConfiguration = Record<DocType, PageConfiguration>;

export type PagesOnlyRoutes = Record<
  DocType,
  Pick<PageConfiguration, 'basePath' | 'sideNav'> & {
    tabs?: PageTabs;
  }
>;

export interface SitemapConfigPage {
  priority: number;
}
export type SitemapConfig =
  | {
      pages?: {
        home: SitemapConfigPage;
        index: SitemapConfigPage;
        doc: SitemapConfigPage;
      };
    }
  | boolean;

/**
 * global configuration used at build time
 * stored in a file named main.js/main.ts
 */
export type BuildConfiguration = BuildProps & {
  /**
   * wild card search string for the stories
   * internally using `glob` for the search: https://www.npmjs.com/package/glob
   * example: "./stories/**/ /*.stories.(js|jsx|tsx|mdx)"
   */
  stories?: string | string[];
  /**
   * alternative naming for docz compatibility
   */
  files?: string | string[];
  /**
   * the site base url, by default the site starts at /
   */
  siteRoot?: string;
  /**
   * files to ignore. by default ['readme.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']
   */
  ignore?: string[];

  /**
   * base url path for API documentation pages. Default is "docs/"
   */
  pages?: PagesOnlyRoutes;

  /**
   * page types that are considered as categories fields as well
   */
  categories?: DocType[];
  /**
   * if false, disable automatic sitemap generation
   */
  siteMap?: SitemapConfig;

  /**
   * Deployed site url. Also used for auto generated sitemap.
   */
  siteUrl?: string;
  /**
   * instrumentation configuration
   */
  instrument?: any;
  /**
   * search options
   */
  search?: SearchOptions;
  tokens?: TokenOptions;
} & StoryProps;

export interface ToolbarConfig {
  /**
   * left side toolbar items
   */
  left?: ActionItems;

  /**
   * right side toolbar items
   */
  right?: ActionItems;
}

/**
 * static menu items
 */
export type StaticMenuItem = string | { name: string; menu?: StaticMenuItem[] };
export type StaticMenuItems = StaticMenuItem[];

/**
 * global configuration used at build time
 * stored in a file named main.js/main.ts
 */
export type RuntimeConfiguration = {
  /**
   * framework-specific render function. By default react render
   */
  renderFn?: FrameworkRenderFn;
  /**
   * standalone site title. Default is "Component controls"
   */
  title?: string;

  /**
   * logo for the site - can be a string link to an image, or a react node
   */
  logo?: string | ReactNode;

  /**
   * application wrapper, can be used to insert tags or styles. The application will be passed as children
   */
  app?: FC;

  /**
   * site description. Default is "Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site."
   */
  description?: string;

  /**
   * copyright notice displayed in the footer
   */
  copyright?: string;
  /**
   * site language, Default is "en"
   */
  language?: string;

  /**
   * author: Default is "@component-controls"
   */
  author?: string;

  /**
   * link to site image
   */
  image?: string;
  /**
   * meta links for seo header
   */
  links?: DetailedHTMLProps<
    LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  >[];

  /**
   * custom seo rendering.
   */
  seo?: ReactNode;
  /**
   * page types configurations
   */
  pages?: PagesConfiguration;

  /**
   * theme-ui theme configuration
   */
  theme?: { [key: string]: any };

  /**
   * story sorting function
   */
  storySort?: (a: string, b: string) => number;

  /**
   * custom toolbar items
   */
  toolbar?: ToolbarConfig;

  /**
   * custom footer items
   */
  footer?: ToolbarConfig;

  /**
   * custom sidebar items
   */
  sidebar?: ActionItems;

  /**
   * static menu items, can be used in conjunction with the menu prop on the document
   * provides compatibility with docz
   */
  menu?: StaticMenuItems;

  /**
   * custom props to components
   * ex:
   * components: { story:{ wrapper: 'iframe' } },
   *
   */
  components?: Record<string, unknown>;

  /**
   * analytics options
   */
  analytics?: any;
} & StoryProps;

export type RunConfiguration = Omit<RuntimeConfiguration, 'renderFn'> &
  Required<Pick<RuntimeConfiguration, 'renderFn'>> &
  Omit<BuildConfiguration, 'pages'>;

export const defaultBuildConfig: BuildConfiguration = {
  siteRoot: '/',
  siteMap: {
    pages: {
      home: {
        priority: 1,
      },
      index: {
        priority: 0.8,
      },
      doc: {
        priority: 0.5,
      },
    },
  },
  categories: ['author', 'tags'],
  ignore: [
    'readme.md',
    'changelog.md',
    'code_of_conduct.md',
    'contributing.md',
    'license.md',
  ],
  pages: {
    story: {
      basePath: 'docs/',
      sideNav: {
        storyPaths: true,
        collapseSingle: true,
      },
      tabs: {
        page: '@component-controls/pages/ClassicPage',
        test: '@component-controls/pages/TestingPage',
        design: '@component-controls/pages/DesignPage',
      },
    },
    blog: {
      basePath: 'blogs/',
    },
    author: {
      basePath: 'authors/',
    },
    page: {
      basePath: 'pages/',
    },
    tags: {
      basePath: 'tags/',
    },
  },
  search: {
    /**
     * the search plugin search routine
     */
    searchingModule: '@component-controls/search-fusejs',
  },
};
export const defaultRunConfig: Omit<RunConfiguration, 'renderFn'> &
  Partial<Pick<RunConfiguration, 'renderFn'>> = {
  title: 'Component controls',
  description:
    'Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site.',
  language: 'en',
  author: '@component-controls',
  pages: {
    story: {
      label: 'Docs',
      navSidebar: true,
      contextSidebar: true,
      topMenu: true,
    },
    blog: {
      label: 'Blog',
      contextSidebar: true,
      topMenu: true,
      indexHome: true,
    },
    author: {
      label: 'Authors',
    },
    page: {
      label: 'Page',
      container: null,
    },
    tags: {
      label: 'Tags',
    },
  },
};

export const convertConfig = (config: RunConfiguration): RunConfiguration => {
  return config;
};
