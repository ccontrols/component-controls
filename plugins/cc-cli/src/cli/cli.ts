import { cliArgs } from '@component-controls/webpack-compile/cli';
import { jestCliArgs } from './args';
import { cliStore } from './cli-store';
import { cliStory } from './cli-story';
import { CliOptions } from './utils';

/**
 * cc-cli central function. based on the selected g/generate option will call the specific
 * cli function - store, stories
 */
export const run = async (): Promise<void> => {
  const args = cliArgs(jestCliArgs);
  const parsedArgs = args.parse();
  const {
    renderer,
    format,
    overwrite,
    config,
    test,
    bundle,
    name,
    output,
    include,
    exclude,
    ally,
    data,
    seed,
  } = parsedArgs;
  switch (parsedArgs.generate) {
    case 'store':
      return await cliStore({
        renderer,
        format,
        overwrite,
        config,
        test,
        bundle,
        name,
        output,
        include,
        exclude,
        ally,
        data,
        seed,
      } as CliOptions);
    case 'story':
    case 'doc':
      return await cliStory(
        {
          renderer,
          format,
          overwrite,
          config,
          test,
          bundle,
          name,
          output,
          include,
          exclude,
          ally,
          data,
          seed,
        } as CliOptions,
        parsedArgs.generate === 'doc',
      );
  }
};
