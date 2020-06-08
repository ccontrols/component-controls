import { CodeLocation, PackageInfo, StoryRenderFn } from './utility';
import { StoryComponent } from './components';
import { ComponentControls } from './controls';
import { RunConfiguration } from './configuration';
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
 * list of configuration parameters for indivudual stories and docs files
 * can be specified either through CSF or MDX tags
 */
export interface StoryParameters {
  [name: string]: any;
}

/**
 * Story interface - usually extracted by the AST instrumenting loader
 */
export interface Story {
  /**
   * name of the Story.
   */
  name: string;

  /**
   * csf id of the story
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
   * arguments pass to a CSF story
   * eg `export const story = props => <Story {...props} />;`
   */
  arguments?: StoryArguments;
  /**
   * configuration parameters passed to the story - either CSF or MDX
   */
  parameters?: StoryParameters;
  /**
   * location in the source file of the story definition
   */
  loc?: CodeLocation;
  /**
   * the source code of the story, extracted byt the AST instrumenting loaders
   */
  source?: string;

  /**
   * optional story subtitle property
   */
  subtitle?: string;

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
   * story decorators (or wrappers)
   */
  decorators?: StoryRenderFn[];
}

/**
 * map of stories. The id is compatible with CSF story ids
 */
export interface Stories {
  [id: string]: Story;
}

/**
 * a group of stories. Usually multiple stories are in one  csf file
 * and the 'group' is the default export
 * in the case of MDX stories, the doc is created using a <Meta /> tag
 */
export interface StoriesDoc {
  /**
   * title of the groups of stories contained in the doc file. used to generate story ids
   */
  title: string;
  /**
   * document type - blogs a and stories. By default - storie
   */
  type?: 'story' | 'blog' | 'page';
  /**
   * list of stories contained in the file/groups
   */
  stories?: string[];

  /**
   * if provided, will be used as the route for the page
   * if not provided, the title in lowercase will be used as the route
   */
  route?: string;

  /**
   * configuration parameters passed to the story groups
   * configured either as CSF default export
   * or MDX <Meta /> tag
   */
  parameters?: StoryParameters;

  /**
   * source code of the entire file of stories
   */
  source?: string;

  /**
   * id for component associated with the stories file
   */
  component?: string | object;

  /**
   * multiple components option
   */
  subcomponents?: string[] | object[];

  /**
   * story decorators (or wrappers)
   */
  decorators?: StoryRenderFn[];

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
  components: {
    [name: string]: string;
  };

  /**
   * list of stories to exclude from the stories file
   * can also use regexp match
   */
  excludeStories?: string[] | RegExp;

  /**
   * list of stories to include in the stories file
   * can also use regexp match
   */

  includeStories?: string[] | RegExp;

  /**
   * object of key/value pairs specifying the controls for the stories file
   * this will apply to all the stories in the file
   */
  controls?: ComponentControls;

  /**
   * for MDX pages, this is an MDXContent function, to be rendered inside a MDXProvider
   */
  MDXPage?: any;

  /**
   * if true, will display the documentation page full view
   */
  fullPage?: boolean;

  /**
   * side menu - hide
   */
  menu?: boolean | string;
  [name: string]: any;
}

/**
 * list of components used in stories
 */

export interface StoryComponents {
  [fileName: string]: StoryComponent;
}

/**
 * list of story files, or groups
 */
export interface StoryDocs {
  [title: string]: StoriesDoc;
}

/**
 * list of stories
 */
export interface StoryStories {
  [id: string]: Story;
}

/**
 * list of repositories
 */
export interface StoryPackages {
  [id: string]: PackageInfo;
}

/**
 * store of stories information in memory after the loader is applied
 */
export interface StoriesStore {
  /**
   * global configuration for config file
   */
  config?: RunConfiguration;
  /**
   * list of story files, or groups
   */
  docs: StoryDocs;
  /**
   * list of stories
   */
  stories: StoryStories;
  /**
   * list of components used in stories
   */
  components: StoryComponents;

  /**
   * list of package.json files and their data
   * used by the components and the stories of the project
   */
  packages: StoryPackages;
}
