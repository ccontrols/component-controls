import * as path from 'path';
import {
  defaultParserOptions,
  defaultResolveOptions,
  defaultComponentOptions,
} from '../src/index';
import { followImports } from '../src/babel/follow-imports';

describe('follow-imports-custom', () => {
  const loadTestFiles = (
    componentName: string,
    fileName: string,
    source?: string,
  ) => {
    it(componentName, async () => {
      expect(
        await followImports(componentName, fileName, source, {
          parser: defaultParserOptions,
          resolver: defaultResolveOptions,
          components: defaultComponentOptions,
        }),
      ).toMatchSnapshot();
    });
  };
  loadTestFiles(
    'BooleanEditor',
    path.resolve(
      __dirname,
      '../../../ui/editors/src/BooleanEditor/BooleanEditor.stories.tsx',
    ),
    `
    import React from 'react';
    import { ControlTypes } from '@component-controls/specification';
    import { BooleanEditor } from './BooleanEditor';
    
    export default {
        title: 'Editors/BooleanEditor',
        component: BooleanEditor,
    };
    
    export const sample = () => {
        const [state, setState] = React.useState(false);
        return (
            <BooleanEditor
                name="prop"
                onChange={(name, newVal) => setState(newVal)}
                prop={{ type: ControlTypes.BOOLEAN, value: state }}
            />
        );
    };
`,
  );

  loadTestFiles(
    'Markdown',
    path.resolve(
      __dirname,
      '../../../ui/components/src/Markdown/Markdown.stories.tsx',
    ),
  );

  loadTestFiles(
    'Title',
    path.resolve(__dirname, '../../../ui/blocks/src/Title/Title.stories.tsx'),
  );
});
