import { Stories, Story } from '../types';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './get-function-parameters';

export const extractCSFStories = (stories: Stories) => ({
  ExportNamedDeclaration: (path: any) => {
    const {
      declaration: {
        declarations: [declaration],
      },
    } = path.node;
    const el = declaration.init.body;
    const name = declaration.id.name;
    const story: Story = {
      source: {
        start: {
          column: el.loc.start.column,
          line: el.loc.start.line,
        },
        end: {
          column: el.loc.end.column,
          line: el.loc.end.line,
        },
      },
    };
    traverse(path.node, extractFunctionParameters(story), path.scope, path);
    stories[name] = story;
  },
});
