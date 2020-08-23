import { Configuration as WebpackConfiguration } from 'webpack';
import { ActionItems } from '@component-controls/components';
import { ComponentType, ReactNode } from 'react';
import { StoryRenderFn } from './utility';
import { ReactElement } from 'react';
import { Store } from './document';

/**
 * render function by framework. By default 'react'
 */
export type FrameworkRenderFn = (
  storyId: string,
  store: Store,
  options?: any,
) => ReactElement;

/**
 * story type pages can have multiple tabs with separate page configurations.
 */
export interface TabConfiguration {
  /**
   * tab route string
   */
  route?: string;
  /**
   * title will be used as tab caption
   */
  title: string;
  /**
   * page container type - a key into the component-controls/pages package
   */
  type?: string;
  /**
   * render function, returns a react component
   */
  render?: (props: any) => ReactNode;
}

export type PageTabs = TabConfiguration[];

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
  tabs?: PageTabs;
} & PageLayoutProps;

export type PagesConfiguration = Record<DocType, PageConfiguration>;

type WebpackConfigFn = (
  config: WebpackConfiguration,
  options?: any,
) => WebpackConfiguration;
type WebpackConfig = WebpackConfiguration | WebpackConfigFn;

export type PagesOnlyRoutes = Record<
  DocType,
  Pick<PageConfiguration, 'basePath' | 'sideNav'> & {
    tabs?: Pick<TabConfiguration, 'route'>[];
  }
>;

/**
 * global configuration used at build time
 * stored in a file named main.js/main.ts
 */
export interface BuildConfiguration {
  /**
   * wild card search string for the stories
   * internally using `glob` for the search: https://www.npmjs.com/package/glob
   * example: "./stories/**/ /*.stories.(js|jsx|tsx|mdx)"
   */
  stories?: string[];
  /**
   * base url path for API documentation pages. Default is "docs/"
   */
  pages?: PagesOnlyRoutes;

  /**
   * page types that are considered as categories fields as well
   */
  categories?: DocType[];
  /**
   * custom webpack configuration setup. One or the other will be used
   */
  webpack?: WebpackConfig;
  finalWebpack?: WebpackConfig;

  /**
   * instrumentation configuration
   */
  instrument?: any;
}

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
 * configuration options for the controls module
 */
export interface ControlsConfig {
  /**
   * threshold for when to display the controls in their own table
   * separate from the props table
   */
  threshold?: number;
}

/**
 * global configuration used at build time
 * stored in a file named main.js/main.ts
 */
export interface RunOnlyConfiguration {
  /**
   * framework-specific render function. By default react render
   */
  renderFn?: FrameworkRenderFn;
  /**
   * story decorator functions - used to wrap stories
   * example: [story => <ThemeProvider>{story()}</ThemeProvider>]
   */
  decorators?: StoryRenderFn[];
  /**
   * standalone site title. Default is "Component controls"
   */
  siteTitle?: string;

  /**
   * Deployed site url. Default is "https://component-controls.com"
   */
  siteUrl?: string;

  /**
   * site description. siteDescription: Default is "Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site."
   */
  siteDescription?: string;

  /**
   * copyright notice displayed in the footer
   */
  siteCopyright?: string;
  /**
   * site language, Deault is "en"
   */
  siteLanguage?: string;

  /**
   * author: Default is "@component-controls"
   */
  author?: string;

  /**
   * link to site image
   */
  siteImage?: string;

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
   * controls module configuration options
   */
  controls?: ControlsConfig;
  /**
   * custom props to components
   * ex:
   * components: { story:{ wrapper: 'iframe' } },
   *
   */
  components?: Record<string, any>;

  /**
   * analytics options
   */
  analytics?: any;
}

export type RunConfiguration = RunOnlyConfiguration &
  Omit<BuildConfiguration, 'pages'>;

export const defaultRunConfig: RunConfiguration = {
  siteTitle: 'Component controls',
  siteUrl: 'https://component-controls.com',
  siteDescription:
    'Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site.',
  siteLanguage: 'en',
  author: '@component-controls',
  controls: {
    threshold: 10,
  },
  pages: {
    story: {
      label: 'Docs',
      navSidebar: true,
      contextSidebar: true,
      topMenu: true,
      tabs: [
        { title: 'Documentation', type: 'ClassicPage' },
        { title: 'Testing', type: 'TestingPage' },
      ],
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

export const defaultBuildConfig: BuildConfiguration = {
  categories: ['author', 'tags'],
  pages: {
    story: {
      basePath: 'docs/',
      sideNav: {
        storyPaths: true,
        collapseSingle: true,
      },
      tabs: [{ route: 'page' }, { route: 'test' }],
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
};
