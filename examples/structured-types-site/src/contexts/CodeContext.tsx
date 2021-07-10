import React, { FC, createContext, useContext } from 'react';
import { useURLParams } from '@component-controls/blocks';

type CodeContextType = {
  code: string;
  updateCode: (source: string) => void;
};
const CodeContext = createContext<CodeContextType>({} as CodeContextType);

export const CodeContextProvider: FC = ({ children }) => {
  const [code, setCode] = useURLParams('code', '');
  return (
    <CodeContext.Provider
      value={{
        code,
        updateCode: source => {
          setCode(source);
        },
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = (): CodeContextType => useContext(CodeContext);
