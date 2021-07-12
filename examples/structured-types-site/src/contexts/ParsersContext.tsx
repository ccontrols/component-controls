import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { useDebounce } from '../hooks/usDebounce';
import { useParams } from './OptionsContext';
import { useCodeContext } from './CodeContext';

export const parserNames = [
  'structured-types',
  'react-docgen-typescript',
  'react-docgen',
  'jsdoc',
  'typedoc',
  'ts-json-schema-generator',
] as const;
export type ParserNames = typeof parserNames[number];

type ParserResults = Record<string, any> | undefined;
type DataContextState = { params: string; data: ParserResults } | undefined;
type DataContextProps = [DataContextState, (newData: DataContextState) => void];

const Contexts: Record<ParserNames, React.Context<DataContextProps>> = {
  jsdoc: createContext<DataContextProps>({} as DataContextProps),
  'react-docgen': createContext<DataContextProps>({} as DataContextProps),
  'react-docgen-typescript': createContext<DataContextProps>(
    {} as DataContextProps,
  ),
  'structured-types': createContext<DataContextProps>({} as DataContextProps),
  'ts-json-schema-generator': createContext<DataContextProps>(
    {} as DataContextProps,
  ),
  typedoc: createContext<DataContextProps>({} as DataContextProps),
};

const ParserContextProvider: FC<{ name: ParserNames }> = ({
  children,
  name,
}) => {
  const [state, setState] = useState<DataContextState>(undefined);
  const Context = Contexts[name];
  return (
    <Context.Provider key={name} value={[state, setState]}>
      {children}
    </Context.Provider>
  );
};
export const ParsersContextProvider: FC = ({ children }) => {
  return (
    <>
      {parserNames.reduce((acc, name) => {
        return (
          <ParserContextProvider key={name} name={name}>
            {acc}
          </ParserContextProvider>
        );
      }, children)}
    </>
  );
};

export const useParseResults = (name: ParserNames): ParserResults => {
  const [state, setState] = useContext(Contexts[name]);
  const { code } = useCodeContext();
  const debouncedCode = useDebounce(code, 300);
  const [tsOptions] = useParams('tsOptions');
  const [parseOptions] = useParams('parseOptions');
  const params = useMemo(() => {
    return `${
      debouncedCode ? `?code=${encodeURIComponent(debouncedCode)}` : ''
    }${
      parseOptions
        ? `&config=${encodeURIComponent(JSON.stringify(parseOptions))}`
        : ''
    }${
      tsOptions
        ? `&tsoptions=${encodeURIComponent(JSON.stringify(tsOptions))}`
        : ''
    }`;
  }, [debouncedCode, parseOptions, tsOptions]);
  useEffect(() => {
    if (params && state?.params !== params) {
      const fetchData = async () => {
        setState(undefined);
        try {
          const response = await fetch(`/api/${name}${params}`);
          const data = await response.json();
          setState({ data, params });
        } catch (e) {
          console.error(e);
          setState(undefined);
        }
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, params, setState]);

  return state?.data;
};
