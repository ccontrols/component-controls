import { CodeLocation, PackageInfo, StoryRenderFn } from './utility';
import { StoryComponent } from './components';
import { ComponentControls } from './controls';
import { RunConfiguration, DocType, PageLayout } from './configuration';
/**
 * an identifier/variable.argument in the source code
 */
export interface SourceIdentifier {
  name: string;
  loc?: CodeLocation;
}
export interface ArgUsageLocation {
  /**
   * where in the story source code is the argument used
   * code location is relative to the start of the story
   */
  loc: CodeLocation;

  /**
   * optional name for the usage of the argument
   * example: export const story = ({ value }) => <Story value={{ age: value }} />;
   * in this example the name will be 'age'
   */
  name?: SourceIdentifier;

  /** true if the property is a 'shorthand'.
   * { prop: value } - not a shorthand.
   * { prop } - a shorthand.
   */
  shorthand?: boolean;
}

/**
 * arguments passed to the 'story' function, extracted by an AST loader
 */
export interface StoryArgument {
  /**
   * either the name used (or a variable alias), or an array of sub-arguments
   * ({ name: alias })
   */
  value: string | StoryArguments;
  /**
   * the original name of the argument
   */
  name?: string;
  /**
   * location of the argument declaration, relative to the story source code
   */
  loc?: CodeLocation;
  /**
   * list of locations where the argument is used in the body of the story
   */
  usage?: ArgUsageLocation[];
}

/**
 * list of story arguments. Each argument can be a deconstructed argument of itself
 * the first argument are the control 'values'
 */
export type StoryArguments = StoryArgument[];

export interface SmartControls {
  /**
   * whether to generate "smart" controls for a story
   */
  smart?: boolean;
  /**
   * include props only
   */
  include?: string[];

  /**
   * exclude props only
   */
  exclude?: string[];
}

/**
 * story prooperties that can be inherited from the document, or each story can have its properties
 */

export interface StoryProps {
  /**
   * id for component associated with the story
   */
  component?: string | object;

  /**
   * multiple components option
   */
  subcomponents?: {
    [key: string]: string | object;
  };

  /**
   * object of key/value pairs specifying the controls for the story
   */
  controls?: ComponentControls;

  /**
   * "smart" controls options
   */
  smartControls?: SmartControls;
  /**
   * array of wrapper functions (decorators) to be called when rendering each individual story.
   */
  decorators?: StoryRenderFn[];
}

/**
 * Story interface - usually extracted by the AST instrumenting loader
 */
export type Story = {
  /**
   * name of the Story.
   */
  name: string;

  /**
   * id of the story
   */
  id?: string;

  /**
   * title of the file/group of stories
   */
  doc?: string;

  /**
   * render function for the story
   */
  renderFn?: StoryRenderFn;

  /**
   * story extended description. can use markdown.
   */
  description?: string;

  /**
   * arguments passed to the story function.
   * eg `export const story = props => <Story {...props} />;`
   */
  arguments?: StoryArguments;
  /**
   * location in the source file of the story definition
   */
  loc?: CodeLocation;
  /**
   * the source code of the story, extracted by the AST instrumenting loaders
   */
  source?: string;

  /**
   * optional story subtitle property
   */
  subtitle?: string;
} & StoryProps;

/**
 * map of stories. The id is compatible with storybook's story ids
 */
export interface Stories {
  [id: string]: Story;
}

export const defDocType: DocType = 'story';
/**
 * A documentation file's metadata.
 * For MDX files, fromtmatter is used to declare the document properties.
 * For ESM (ES Modules) documentation files, the default export is used.
 */
export type Document = {
  /**
   * title of the document. If no 'route' parameter is specifified, the title is used to generate the document url.
   * This is the only required field, to show the document in the menu structures.
   */
  title: string;

  /**
   * document type - blogs, pages, stories and even custom ones. By default - story
   */
  type?: DocType;

  /**
   * if provided, will be used as the route for the page.
   * if not provided, the title in lowercase will be used as the route
   */
  route?: string;

  /**
   * page layout - sidebars, full width
   */
  layout?: PageLayout;

  /**
   *  optional date the document was created. If not assigned, the instrumentation process will use birthtime
   */
  date?: Date;

  /**
   *  optional date the document was last modified. If not assigned, the instrumentation process will use mtime
   */
  dateModified?: Date;

  /**
   * if set to true, the document will be hidden in production builds.
   */
  draft?: boolean;

  /**
   *  comma-separated list of document tags, used for search
   */
  tags?: string[];

  /**
   *  documentation file description
   */
  description?: string;

  /**
   * document author
   */
  author?: string;

  /**
   * document order, used to sort documents within the same parent
   */
  order?: number;

  //next generated by the instrumentation process

  /**
   * list of story ids contained in the document.
   */
  stories?: string[];

  /**
   * source code of the entire file of stories
   */
  source?: string;

  /**
   * file name of the file of stories
   */
  fileName?: string;

  /**
   * lookup into the global store of PackageInfo package.json
   */
  package?: string;

  /**
   * lookup into the global store.components
   * since multiple components of the same name can be used
   * example: ['Button']: 'c:/myapp/Button.tsx'
   */
  componentsLookup: {
    [name: string]: string;
  };

  /**
   * for MDX documents, this is an MDXContent function, to be rendered inside a MDXProvider
   */
  MDXPage?: any;

  /**
   * custom prop set by mdxjs
   */
  isMDXComponent?: boolean;
} & StoryProps;

export const dateToLocalString = (date?: Date): string =>
  date
    ? new Date(date).toLocaleDateString('en-US', {
        timeZone: 'UTC',
      })
    : '';
/**
 * list of components used in stories
 */

export interface StoreComponents {
  [fileName: string]: StoryComponent;
}

/**
 * list of story files, or groups
 */
export interface Documents {
  [title: string]: Document;
}

export type Pages = Document[];

/**
 * list of stories
 */
export interface StoreStories {
  [id: string]: Story;
}

/**
 * list of repositories
 */
export interface StorePackages {
  [id: string]: PackageInfo;
}

export type StoreObserver = (story?: Story) => void;

export const CURRENT_STORY = '.';
/**
 * store of stories information in memory after the loader is applied
 */
export interface Store {
  /**
   * global configuration for config file
   */
  config?: RunConfiguration;
  /**
   * list of story files, or groups
   */
  docs: Documents;
  /**
   * list of stories
   */
  stories: StoreStories;
  /**
   * list of components used in stories
   */
  components: StoreComponents;

  /**
   * list of package.json files and their data
   * used by the components and the stories of the project
   */
  packages: StorePackages;

  /**
   * storybook integration notifiers
   */
  addObserver: (observer: StoreObserver) => void;
  removeObserver: (observer: StoreObserver) => void;
  /**
   * update store, for example controls or state
   */
  updateStory: (story: Story) => void;
}

export const defaultStore: Store = {
  components: {},
  docs: {},
  packages: {},
  stories: {},
  addObserver: () => {},
  removeObserver: () => {},
  updateStory: function(story: Story) {
    if (story) {
      if (story.id) {
        this.stories = {
          ...this.stories,
          [story.id]: story,
        };
      }
    }
  },
};
