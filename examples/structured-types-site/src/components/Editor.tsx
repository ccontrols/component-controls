import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Box, useColorMode } from 'theme-ui';
import { useOptions } from '../contexts/OptionsContext';
import { useCodeContext } from '../contexts/CodeContext';

export const Editor: React.FC = () => {
  const [colorMode] = useColorMode();
  const [tsOptions] = useOptions('tsOptions');
  const { code, updateCode } = useCodeContext();
  const language =
    tsOptions.General.lang.value || tsOptions.General.lang.defaultValue;
  function handleEditorChange(value: string | undefined) {
    updateCode(value || '');
  }

  return (
    <Box style={{ height: '90vh' }}>
      <MonacoEditor
        language={language as string}
        value={code}
        onChange={handleEditorChange}
        theme={colorMode === 'dark' ? 'vs-dark' : 'vs-light'}
      />
    </Box>
  );
};
