import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Box, useColorMode } from 'theme-ui';

interface EditorProps {
  value?: string;
  onChange?: (value: string) => void;
}
export const Editor: React.FC<EditorProps> = ({ onChange, value }) => {
  const [colorMode] = useColorMode();
  function handleEditorChange(value: string | undefined) {
    if (onChange) {
      onChange(value || '');
    }
  }

  return (
    <Box style={{ height: '90vh' }}>
      <MonacoEditor
        defaultLanguage="typescript"
        value={value}
        onChange={handleEditorChange}
        theme={colorMode === 'dark' ? 'vs-dark' : 'vs-light'}
      />
    </Box>
  );
};
