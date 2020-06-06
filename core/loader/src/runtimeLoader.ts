import { loadConfiguration, extractStories } from '@component-controls/config';
import { stringifyRequest } from 'loader-utils';
import { replaceSource, StoryPath } from './replaceSource';
import { store } from './store';

module.exports = function(content: string) {
  //@ts-ignore
  const params = JSON.parse(this.query.slice(1));
  //@ts-ignore
  const config = loadConfiguration(this.rootContext, params.config);
  store.config = config?.optionsFilePath
    ? require(config?.optionsFilePath)
    : undefined;
  const stories: StoryPath[] = (config ? extractStories(config) || [] : []).map(
    fileName => ({
      absPath: fileName,
      //@ts-ignore
      relPath: stringifyRequest(this, fileName),
    }),
  );

  content = replaceSource(
    stories,
    config?.optionsFilePath,
    `__COMPILATION_HASH__${params.compilationHash}`,
  );
  return content;
};
