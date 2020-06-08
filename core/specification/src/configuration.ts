import { StoryRenderFn } from './utility';

/**
 * global configuration
 * stored in a file named main.js/main.ts
 */
export interface Configuration {
  /**
   * wild card search string for the stories
   * internally using `glob` for the search: https://www.npmjs.com/package/glob
   * example: "./stories/**/ /*.stories.(js|jsx|tsx|mdx)"
   */
  stories?: string[];

  /**
   * story decorator functions - used to wrap stories
   * example: [story => <ThemeProvider>{story()}</ThemeProvider>]
   */
  decorators?: StoryRenderFn[];
  /**
   * global options object
   */
  options?: {
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
     * base url path for API documentation pages. Default is "docs/"
     */
    docsPath?: string;

    /**
     * Label for docs menu. Default is Docs
     */
    docsLabel?: string;

    /**
     * base url path for blogs pages. Default is "blogs/"
     */
    blogsPath?: string;

    /**
     * Label for blog menu. Default is Blog
     */
    blogsLabel?: string;

    /**
     * story sorting function
     */
    storySort?: (a: string, b: string) => number;
  };
}
