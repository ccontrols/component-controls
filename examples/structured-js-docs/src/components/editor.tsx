import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Box } from 'theme-ui';

interface EditorProps {
  value?: string;
  onChange?: (value: string) => void;
}
export const Editor: React.FC<EditorProps> = ({ onChange, value }) => {
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
      />
    </Box>
  );
};
