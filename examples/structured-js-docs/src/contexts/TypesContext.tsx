import React, {
  FC,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { PropTypes } from '@component-controls/structured-js-types/types';
import { useDebounce } from '../hooks/usDebounce';
import { getPureConfig, useOptions } from './OptionsContext';
import { useCodeContext } from './CodeContext';

type TypesContextType = {
  loading: boolean;
  types: PropTypes;
};
const TypesContext = createContext<TypesContextType>({} as TypesContextType);

export const TypesContextProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const options = useOptions();
  const { code } = useCodeContext();
  const [types, setTypes] = useState({});
  const debouncedCode = useDebounce(code, 300);

  useEffect(() => {
    if (debouncedCode) {
      setLoading(true);
      const tsOptions = getPureConfig(options.tsOptions);
      const parseOptions = getPureConfig(options.parseOptions);
      const url = `/api?code=${debouncedCode}${
        tsOptions || parseOptions
          ? `&config=${JSON.stringify({
              tsOptions,
              ...parseOptions,
            })}`
          : ''
      }`;
      fetch(encodeURI(url))
        .then(data => data.json())
        .then(json => {
          setLoading(false);
          setTypes(json);
        })
        .catch(() => {
          debugger;
          setLoading(false);
        });
    } else {
      setTypes({});
    }
  }, [debouncedCode, options]);
  return (
    <TypesContext.Provider
      value={{
        loading,
        types,
      }}
    >
      {children}
    </TypesContext.Provider>
  );
};

export const useTypesContext = (): TypesContextType => useContext(TypesContext);
