import { TemplateOptions } from '../types';

export type CliOptions<P extends TemplateOptions = TemplateOptions> = {
  overwrite: boolean;
  test: string;
} & P;
