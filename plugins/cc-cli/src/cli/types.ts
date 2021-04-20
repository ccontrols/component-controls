import { TemplateOptions } from '../types';

export type CliOptions<P extends TemplateOptions = TemplateOptions> = {
  overwrite: boolean;
  test: string;
  /**
   * components to include
   */
  include?: string[];
  /**
   * components to exclude
   */
  exclude?: string[];
} & P;
