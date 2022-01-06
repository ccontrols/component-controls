/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { CodeLocation, PackageInfo, StoryRenderFn } from './utility';
import { Components } from './components';
import { StoryProps } from './common';
import { ComponentControl } from './controls';
import {
  RunConfiguration,
  DocType,
  PageLayoutProps,
  FrameworkRenderFn,
} from './configuration';
import { SearchResult } from './search';
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

/**
 * Story interface - usually extracted by the AST instrumenting loader
 */
export type Story<Props = any> = {
  /**
   * name of the Story.
   */
  name: string;

  /**
   * alternative name prop
   */
  storyName?: string;
  /**
   * id of the story
   */
  id?: string;

  /**
   * raw id for the story as declared in ESM format
   */
  rawId?: string;
  /**
   * title of the file/group of stories
   */
  doc?: string;

  /**
   * render function for the story
   */
  storyFn?: StoryRenderFn;

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
  /**
   * if set to true, the function is dynamically creating stories, returns a list of Story objects
   */
  dynamic?: boolean;

  /**
   * if the story was created by a dynamic story (factory), this is the original story id.
   * it is set internally and will be used to create a story URL
   */
  dynamicId?: string;
} & StoryProps<Props>;

export type DynamicExamples = Story[];

export type ExampleControl = ComponentControl<ExampleControls> | any;

export type ExampleControls = {
  [name: string]: ExampleControl;
};

/**
 * es named export function, excapsulates a contained example code.
 */
export type Example<Props = any> = {
  (props: Props, context?: any): any;
  bind: (props?: Story<Props>) => Example<Props>;
} & Omit<Story<Props>, 'controls'> & {
    controls?: ExampleControls;
  };

/**
 * records of storyid/data pairs, to be associated with documents
 */
export type DocumentData = Record<string, ExampleControls>;
/**
 * dynamic story creator function type.
 * returns an array of dynamically loaded stories
 */
export type StoryFactoryFn = (doc: Document) => Story[] & Story;

export const defDocType: DocType = 'story';
/**
 * A documentation file's metadata.
 * For MDX files, fromtmatter is used to declare the document properties.
 * For ESM (ES Modules) documentation files, the default export is used.
 */
export type Document<Props = any> = {
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
   *  optional date the document was created. If not assigned, the instrumentation process will use birthtime
   */
  date?: string;

  /**
   *  optional date the document was last modified. If not assigned, the instrumentation process will use mtime
   */
  dateModified?: string;

  /**
   * if set to draft, the document will be hidden in production builds.
   */
  status?: 'draft' | 'published';

  /**
   *  comma-separated list of document tags, used for search and for SOE keywords unless keyswords are specified.
   */
  tags?: string[];

  /**
   *  comma-separated list of SEO keywords
   */
  keywords?: string[];

  /**
   *  documentation file description
   */
  description?: string | JSX.Element;
  /**
   * link to an image for the document, will be used for SEO
   */
  image?: string;
  /**
   * document author
   */
  author?: string;

  /**
   * document order, used to sort documents within the same parent
   */
  order?: number;

  /**
   * to which static menu to attach the document
   * compatibility with docz
   */
  menu?: string;

  /**
   * template component to be linked to document stories
   */
  template?: Example<Props>;
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
   * optional specify which test files are asociated with the document
   */
  testFiles?: string[];

  /**
   * optional specify which files to use for test coverage
   */
  testCoverage?: string[];

  /**
   * optional test data file
   */
  testData?: string;

  /**
   * each document can have a different renderer - JSON, react etc.
   */
  renderFn?: FrameworkRenderFn;
  /**
   * loaded data associated with the document
   */
  data?: DocumentData;
  /**
   * lookup into the global store.components
   * since multiple components of the same name can be used
   * example: ['Button']: 'c:/myapp/Button.tsx'
   */
  componentsLookup?: {
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
  /**
   * storybook compatibility field
   */
  parameters?: any;
  /**
   * custom document props
   */
  [key: string]: any;
} & StoryProps<Props> &
  PageLayoutProps;
export const dateToLocalString = (date?: Date): string =>
  date
    ? new Date(date).toLocaleDateString('en-US', {
        timeZone: 'UTC',
      })
    : '';
/**
 * short document information. used in search results, or index page
 */
export type DocInfo = Pick<
  Document,
  'title' | 'description' | 'type' | 'tags' | 'date' | 'author' | 'image'
> & {
  /**
   * following fields are useful for highlighting search results
   */
  link: string;
  authorLink?: string;
  rawTags?: string[];
  rawType?: string;
};

/**
 * list of story files, or groups
 */
export type Documents = Record<string, Document>;

export type Pages = Document[];

/**
 * list of stories
 */
export type Stories = Record<string, Story>;

/**
 * list of repositories
 */
export type Packages = Record<string, PackageInfo>;

export type StoreObserver = (story?: Story) => void;

/**
 * Shorthand id to denote the current story
 */
export const CURRENT_STORY = '.';
/**
 * Store of stories information in memory after the loader is applied
 */
export interface Store {
  /**
   * build-time error string
   */
  error?: string;
  /**
   * global configuration for config file
   */
  config: RunConfiguration;
  /**
   * list of documents (pages)
   */
  docs: Documents;
  /**
   * list of stories
   */
  stories: Stories;
  /**
   * list of components used in stories and documents
   */
  components: Components;

  /**
   * list of package.json files and their data
   * used by the components and the stories of the project
   */
  packages: Packages;

  /**
   * storybook integration notifiers
   */
  addObserver: (observer: StoreObserver) => void;
  removeObserver: (observer: StoreObserver) => void;
  /**
   * update store, for example controls or state
   */
  updateStory: (story: Story) => void;
  search?: (store: Store) => SearchResult;
}

class DefaultStore {
  private observers: StoreObserver[] = [];
  config = {} as RunConfiguration;
  components = {};
  docs = {};
  packages = {};
  stories = {};
  addObserver = (observer: StoreObserver) => {
    this.observers.push(observer);
  };
  removeObserver = (observer: StoreObserver) => {
    this.observers = this.observers.filter(o => o !== observer);
  };
  updateStory = (story: Story) => {
    if (story) {
      if (story.id) {
        this.stories = {
          ...this.stories,
          [story.id]: story,
        };
        this.observers.forEach(o => o(story));
      }
    }
  };
}

export const getDefaultStore = (): Store => new DefaultStore();

export const assignProps = (
  obj: Document | Story,
  //@ts-expect-error remove story shorthand
  { storyName, story, ...props }: Document | Story,
): Document | Story => {
  //preserve component and subcomponents as strings
  const componentName = obj.component;
  const subcomponentsName = obj.subcomponents;
  Object.assign(obj, props);
  if (componentName !== undefined) {
    obj.component = componentName;
  }
  if (subcomponentsName !== undefined) {
    obj.subcomponents = subcomponentsName;
  }
  if (storyName) {
    obj.name = storyName;
  }
  return obj;
};
