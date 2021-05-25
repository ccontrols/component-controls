import { Story, getASTSource } from '@component-controls/core';
import { followImports } from '@component-controls/follow-imports';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './extract-function-parameters';
import { sourceLocation } from '../misc/source-location';
import { InstrumentOptions, MDXExportType } from '../types';

export const followStoryImport = (
  storyName: string,
  importedName: string,
  filePath: string,
  source: string,
  options: InstrumentOptions,
  exports?: MDXExportType,
): Story | undefined => {
  const follow = followImports(importedName, filePath, {
    resolver: options?.resolver,
    parser: options?.parser,
    resolveFile: options?.components?.resolveFile,
  });
  if (follow) {
    const story: Story = { name: storyName, id: storyName };
    if (follow.loc) {
      const loc = sourceLocation(follow.loc);
      story.loc = loc;
      story.source = getASTSource(follow.source, loc);
      traverse(
        follow.node,
        extractFunctionParameters(story, exports),
        follow.path.scope,
      );
    }
    return story;
  }
  return undefined;
};
