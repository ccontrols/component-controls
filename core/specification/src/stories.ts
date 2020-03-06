import { CodeLocation, Repository } from './utility';
import { StoryComponent } from './components';

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
 * list of configuration attributes for stories and 'kinds'
 * can be specified either through CSF or MDX tags
 */
export interface StoryAttributes {
  [name: string]: any;
}

/**
 * Story interface - usually extracted by the AST instrumenting loader
 */
export interface Story {
  /**
   * name of the Story.
   */
  name?: string;
  /**
   * title of the file/group of stories
   */
  kind?: string;
  /**
   * arguments pass to a CSF story
   * eg `export const story = props => <Story {...props} />;`
   */
  arguments?: StoryArguments;
  /**
   * configuration attributes passed to the story - either CSF or MDX Story attributes
   */
  attributes?: StoryAttributes;
  /**
   * location in the source file of the story definition
   */
  loc?: CodeLocation;
  /**
   * the source code of the story, extracted byt the AST instrumenting loaders
   */
  source?: string;

  /**
   * id for component associated with the story
   */
  component?: string;
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
 * in the case of MDX stories, the kind is crated using a <Meta /> tag
 */
export interface StoriesKind {
  /**
   * title of the groups of stories (or kind). used to generate CSF story ids
   */
  title: string;
  /**
   * list of stories contained in the file/groups
   */
  stories?: string[];
  /**
   * any attributes passed to the story groupds, such as title, parameters etc
   * configured either as CSF default export
   * or MDX <Meta /> tag
   */
  attributes?: StoryAttributes;

  /**
   * source code of the entire file of stories
   */
  source?: string;

  /**
   *  id for component associated with the stories file
   */
  component?: string;

  /**
   * file name of the file of stories
   */
  fileName?: string;

  /**
   * project repository information
   */
  repository?: Repository;
}

/**
 * store of stories information in memory afte the loader is applied
 */
export interface StoriesStore {
  kinds: {
    [title: string]: StoriesKind;
  };
  stories: {
    [id: string]: Story;
  };
  components: {
    [id: string]: StoryComponent;
  };
}
