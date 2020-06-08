import { StoryRenderFn } from './utility';

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
  docsPath?: string;
  /**
   * base url path for blogs pages. Default is "blogs/"
   */
  blogsPath?: string;
}

/**
 * global configuration used at build time
 * stored in a file named main.js/main.ts
 */
export interface RunConfiguration {
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
   * Label for docs menu. Default is Docs
   */
  docsLabel?: string;

  /**
   * Label for blog menu. Default is Blog
   */
  blogsLabel?: string;
  /**
   * story sorting function
   */
  storySort?: (a: string, b: string) => number;

  /**
   * the following used in both run time and build time. Should be set in the build config and 
   * they will be carried to the run config
  /**
   * base url path for API documentation pages. Default is "docs/"
   */
  docsPath?: string;
  /**
   * base url path for blogs pages. Default is "blogs/"
   */
  blogsPath?: string;
}

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
  docsLabel: 'Docs',
  blogsLabel: 'Blog',
};

export const defaultBuildConfig: BuildConfiguration = {
  docsPath: 'docs/',
  blogsPath: 'blogs/',
};
