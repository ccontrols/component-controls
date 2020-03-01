/**
 * position in the stories source code
 * usually taken from AST traverse loaders
 */

export interface CodePosition {
  line: number;
  column: number;
}

/**
 * location in the source code of a story or part of it
 * ie. arguments, usage of arguments
 
*/
export interface CodeLocation {
  start: CodePosition;
  end: CodePosition;
}
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
 * arguments passed to the 'story' as extracted by an AST loader
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
 * list of story arguments. The first argument contains the 'controls' name/value pairs
 * the second argument can contain the context
 */
export type StoryArguments = StoryArgument[];

/**
 * information about the repository of the stories and components
 *
 */
export interface Repository {
  /**
   * link for browsing the file
   */
  browse: string;

  /**
   * link for project readme
   */
  docs: string;

  /**
   * link for filing issues with the project
   */
  issues: string;
}
/**
 * component specified for stories or story files
 */
export interface StoryComponent {
  /**
   * name of the component as used in the fiel
   */
  name: string;
  /**
   * imported name ex: import { Btn as Button } from 'buttons';
   */
  imported?: string;

  /**
   * imported from
   */
  from?: string;

  /**
   * import string for the component
   */
  import?: string;

  /**
   * resolved import request
   */
  request?: string;

  /**
   * location of the import statement in the source code file
   */
  loc?: CodeLocation;

  /**
   * component project repository information
   */
  repository?: Repository;
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
   * configuration parameters passed to the story
   */
  parameters?: StoryArguments;
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
   * any parameters passed to the story groupds, such as title, parameters etc
   */
  parameters?: StoryArguments;

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
