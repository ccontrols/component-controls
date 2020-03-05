import { CodeLocation, Repository } from './utility';

/**
 * docgen generated property types
 */
export interface PropType {
  /**
   * default value for the property
   */
  defaultValue: { value?: string | boolean; computed: boolean };
  /**
   * propertty type
   */
  type: { name?: string };
  /**
   * is the property required
   */
  required: boolean;
  /**
   * description of the property
   */
  description: string;
  /**
   * where was the propetyy declared
   */
  parent?: {
    /**
     * file name where the parent property was declared
     */
    fileName: string;

    /**
     * name of the parent/inherited property
     */
    name: string;
  };
}

/**
 * list of properties of the component
 */
export interface PropTypes {
  [key: string]: PropType;
}

/**
 * DocGen type onfo generated for a compoennt
 */
export interface ComponentInfo {
  /**
   * name of the component
   */
  displayName: string;

  /**
   * optional description
   */
  description?: string;

  /**
   * component props
   */
  props: PropTypes;
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
  /**
   * the source code of the component file, extracted byt the AST instrumenting loaders
   */
  source?: string;
  /**
   * docgen generated component info
   */
  info?: ComponentInfo;
}
