import React, { FC, createContext, useContext } from 'react';
import { useURLParamas } from '../hooks/useUrlParams';

type CodeContextType = {
  code: string;
  updateCode: (source: string) => void;
};
const CodeContext = createContext<CodeContextType>({} as CodeContextType);

export const CodeContextProvider: FC = ({ children }) => {
  const [code, setCode] = useURLParamas('code', '');
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
