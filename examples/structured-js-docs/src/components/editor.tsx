import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Box, useColorMode } from 'theme-ui';
import { useOptions } from '../contexts/OptionsContext';

interface EditorProps {
  value?: string;
  onChange?: (value: string) => void;
}
export const Editor: React.FC<EditorProps> = ({ onChange, value }) => {
  const [colorMode] = useColorMode();
  const { tsOptions } = useOptions();
  const language =
    tsOptions.General.lang.value || tsOptions.General.lang.defaultValue;
  function handleEditorChange(value: string | undefined) {
    if (onChange) {
      onChange(value || '');
    }
  }

  return (
    <Box style={{ height: '90vh' }}>
      <MonacoEditor
        language={language as string}
        value={value}
        onChange={handleEditorChange}
        theme={colorMode === 'dark' ? 'vs-dark' : 'vs-light'}
      />
    </Box>
  );
};
