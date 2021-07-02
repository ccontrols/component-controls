import React, {
  FC,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { getUrlParams, getUpdatedUrlParams } from '@component-controls/blocks';

type CodeContextType = {
  code: string;
  updateCode: (source: string) => void;
};
const CodeContext = createContext<CodeContextType>({} as CodeContextType);

export const CodeContextProvider: FC = ({ children }) => {
  const [code, setCode] = useState('');
  useEffect(() => {
    const urlCode = getUrlParams('code');
    if (urlCode) {
      setCode(urlCode);
    }
  }, []);
  return (
    <CodeContext.Provider
      value={{
        code,
        updateCode: source => {
          const newUrl = getUpdatedUrlParams('code', source);
          if (newUrl && window.location.href !== newUrl) {
            window.history.replaceState(null, '', newUrl);
          }
          setCode(source);
        },
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = (): CodeContextType => useContext(CodeContext);
