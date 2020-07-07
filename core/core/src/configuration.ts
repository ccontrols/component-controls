import { Configuration as WebpackConfiguration } from 'webpack';
import { ActionItems } from '@component-controls/components';
import { ComponentType, ReactNode } from 'react';
import { StoryRenderFn } from './utility';

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

export type DocumentType =
  | 'story'
  | 'blog'
  | 'page'
  | 'tags'
  | 'author'
  | string;

export interface PageConfiguration {
  /**
   * base url path for the page
   */
  basePath?: string;

  /**
   * if true, generate story-based paths. This is for documents with a navSidebar that would allow selection of specific stories.
   */
  storyPaths?: boolean;

  /**
   * label - used for menu labels
   */
  label?: string;

  /**
   * whether to take a fullpage theme option
   */
  fullPage?: boolean;

  /**
   * whether to have an index home page for the doc type.
   * if false, will show the first document of the doc type as the home page.
   */
  indexHome?: boolean;

  /**
   * whether to add navigation sidebar to the page
   */
  navSidebar?: boolean;

  /**
   * whether to add conext sidebar to navigate the sections of the current document
   */
  contextSidebar?: boolean;

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
}

export type PagesConfiguration = Record<DocumentType, PageConfiguration>;

type WebpackConfigFn = (
  config: WebpackConfiguration,
  options?: any,
) => WebpackConfiguration;
type WebpackConfig = WebpackConfiguration | WebpackConfigFn;

export type PagesOnlyRoutes = Record<
  DocumentType,
  Pick<PageConfiguration, 'basePath' | 'storyPaths'> & {
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
  categories?: DocumentType[];
  /**
   * custom webpack configuration setup. One or the other will be used
   */
  webpack?: WebpackConfig;
  finalWebpack?: WebpackConfig;
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
 * global configuration used at build time
 * stored in a file named main.js/main.ts
 */
export interface RunOnlyConfiguration {
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
   * site alt for images. Default is "Component controls - https://github.com/ccontrols/component-controls"
   */
  siteTitleAlt?: string;

  /**
   * Site headline. Default is "Component controls gatsby"
   */
  siteHeadline?: string;

  /**
   * Deployed site url. Default is "https://component-controls-gatsby.netlify.app"
   */
  siteUrl?: string;

  /**
   * site description. siteDescription: Default is "Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site."
   */
  siteDescription?: string;

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
}

export type RunConfiguration = RunOnlyConfiguration &
  Omit<BuildConfiguration, 'pages'>;

export const defaultRunConfig: RunConfiguration = {
  siteTitle: 'Component controls',
  siteTitleAlt:
    'Component controls - https://github.com/ccontrols/component-controls',
  siteHeadline: 'Component controls gatsby',
  siteUrl: 'https://component-controls-gatsby.netlify.app',
  siteDescription:
    'Component controls stories. Write your components documentation with MDX and JSX. Design, develop, test and review in a single site.',
  siteLanguage: 'en',
  author: '@component-controls',
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
      storyPaths: true,
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
