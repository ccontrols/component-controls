import * as path from 'path';
import { followImports, FollowImportType } from '../src';

export type ComponentCallback = (component: FollowImportType) => void;

export const followFixture = (
  importName: string,
  filePathName: string,
  callback: ComponentCallback,
): void => {
  it(importName, () => {
    const results = followImports(importName, filePathName);
    callback(results);
  });
};
describe('follow-imports-custom', () => {
  followFixture(
    'BooleanEditor',
    path.resolve(
      __dirname,
      '../../../ui/editors/src/BooleanEditor/BooleanEditor.stories.tsx',
    ),
    data => {
      expect(data).toMatchObject({
        exportedAs: 'BooleanEditor',
        imports: {
          React: {
            name: 'React',
            importedName: 'default',
            from: 'react',
          },
          Toggle: {
            name: 'Toggle',
            importedName: 'Toggle',
            from: '@component-controls/components',
          },
          ComponentControlBoolean: {
            name: 'ComponentControlBoolean',
            importedName: 'ComponentControlBoolean',
            from: '@component-controls/core',
          },
          ControlTypes: {
            name: 'ControlTypes',
            importedName: 'ControlTypes',
            from: '@component-controls/core',
          },
          useControl: {
            name: 'useControl',
            importedName: 'useControl',
            from: '@component-controls/store',
          },
          PropertyEditor: {
            name: 'PropertyEditor',
            importedName: 'PropertyEditor',
            from: '../types',
          },
          addPropertyEditor: {
            name: 'addPropertyEditor',
            importedName: 'addPropertyEditor',
            from: '../prop-factory',
          },
        },
        importedName: 'BooleanEditor',
        from: './BooleanEditor',
      });
    },
  );

  followFixture(
    'Markdown',
    path.resolve(
      __dirname,
      '../../../ui/components/src/Markdown/Markdown.stories.tsx',
    ),
    data => {
      expect(data).toMatchObject({
        exportedAs: 'Markdown',
        imports: {
          FC: {
            name: 'FC',
            importedName: 'FC',
            from: 'react',
          },
          jsx: {
            name: 'jsx',
            importedName: 'jsx',
            from: 'theme-ui',
          },
          MarkdownToJSX: {
            name: 'MarkdownToJSX',
            importedName: 'default',
            from: 'markdown-to-jsx',
          },
          MarkdownOptions: {
            name: 'MarkdownOptions',
            importedName: 'MarkdownOptions',
            from: 'markdown-to-jsx',
          },
          markdownComponents: {
            name: 'markdownComponents',
            importedName: 'markdownComponents',
            from: './MarkdownComponents',
          },
        },
        importedName: 'Markdown',
        from: './Markdown',
      });
    },
  );

  followFixture(
    'Title',
    path.resolve(__dirname, '../../../ui/blocks/src/Title/Title.stories.tsx'),
    data => {
      expect(data).toMatchObject({
        exportedAs: 'Title',
        imports: {
          FC: {
            name: 'FC',
            importedName: 'FC',
            from: 'react',
          },
          jsx: {
            name: 'jsx',
            importedName: 'jsx',
            from: 'theme-ui',
          },
          Themed: {
            name: 'Themed',
            importedName: 'Themed',
            from: 'theme-ui',
          },
          BoxProps: {
            name: 'BoxProps',
            importedName: 'BoxProps',
            from: 'theme-ui',
          },
          useStory: {
            name: 'useStory',
            importedName: 'useStory',
            from: '@component-controls/store',
          },
          useDocument: {
            name: 'useDocument',
            importedName: 'useDocument',
            from: '@component-controls/store',
          },
          useStoryComponent: {
            name: 'useStoryComponent',
            importedName: 'useStoryComponent',
            from: '@component-controls/store',
          },
          StoryInputProps: {
            name: 'StoryInputProps',
            importedName: 'StoryInputProps',
            from: '@component-controls/store',
          },
          getStoryTitle: {
            name: 'getStoryTitle',
            importedName: 'getStoryTitle',
            from: '../utils',
          },
          ComponentContributors: {
            name: 'ComponentContributors',
            importedName: 'ComponentContributors',
            from: '../ComponentContributors',
          },
        },
        importedName: 'Title',
        from: './',
      });
    },
  );
});
