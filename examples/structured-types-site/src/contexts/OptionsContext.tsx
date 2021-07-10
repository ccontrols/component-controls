import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { useURLParams } from '@component-controls/blocks';
import {
  OptionValueType,
  defaultOptions,
  OptionsName,
  OptionsType,
  optionNames,
} from './options';

type PureOptions = Record<string, OptionValueType> | undefined;

type OptionsContextProps = [PureOptions, (newOptions: PureOptions) => void];

const Contexts: Record<OptionsName, React.Context<OptionsContextProps>> = {
  tsOptions: createContext<OptionsContextProps>({} as OptionsContextProps),
  parseOptions: createContext<OptionsContextProps>({} as OptionsContextProps),
};

export const getPureConfig = (value: OptionsType): PureOptions => {
  const modifiedOptions: Record<string, OptionValueType> = {};
  Object.keys(value).forEach(sectionName => {
    const section = value[sectionName];
    Object.keys(section).forEach(optionName => {
      const option = section[optionName];

      if (
        option.defaultValue !== option.value &&
        typeof option.value !== 'undefined'
      ) {
        modifiedOptions[optionName] = option.value;
      }
    });
  });
  return Object.keys(modifiedOptions).length ? modifiedOptions : undefined;
};

const getDecoratedConfig = (
  name: OptionsName,
  options: PureOptions,
): OptionsType => {
  const config: OptionsType = { ...defaultOptions[name] };
  if (options) {
    Object.keys(config).forEach(sectionName => {
      const section = config[sectionName];
      Object.keys(section).forEach(optionName => {
        if (typeof options[optionName] !== 'undefined') {
          section[optionName].value = options[optionName];
        }
      });
    });
  }
  return config;
};

export const OptionsProvider: FC = ({ children }) => {
  const params: Record<OptionsName, OptionsContextProps> = optionNames.reduce(
    (acc, name: OptionsName) => ({
      ...acc,
      [name]: useURLParams<PureOptions>(
        name,
        getPureConfig(defaultOptions[name]),
      ),
    }),
    {} as Record<OptionsName, OptionsContextProps>,
  );
  return (
    <>
      {optionNames.reduce((acc, name) => {
        const Context = Contexts[name];
        return (
          <Context.Provider key={name} value={params[name]}>
            {acc}
          </Context.Provider>
        );
      }, children)}
    </>
  );
};

export const useParams = (name: OptionsName): OptionsContextProps => {
  return useContext(Contexts[name]);
};

export const useOptions = <T extends OptionsType>(
  name: OptionsName,
): [T, (newOptions: T) => void] => {
  const [params, setParams] = useParams(name);
  const [options, setOptions] = useState<T>(defaultOptions[name] as T);
  useEffect(() => {
    const fullOptions = getDecoratedConfig(name, params) as T;
    setOptions(fullOptions);
  }, [name, params]);
  return [
    options,
    newOptions => {
      setOptions(newOptions);
      setParams(getPureConfig(newOptions));
    },
  ];
};

export const useUpdateOptions = (
  paramName: OptionsName,
  title: string,
): ((value: OptionValueType) => void) => {
  const [options, setOptions] = useOptions(paramName);
  return (value: OptionValueType) => {
    const newOptions = { ...options };
    for (const section in newOptions) {
      for (const optionName in newOptions[section]) {
        if (optionName === title) {
          if (value === newOptions[section][optionName].defaultValue) {
            delete newOptions[section][optionName].value;
          } else {
            newOptions[section] = {
              ...newOptions[section],
              [optionName]: { ...newOptions[section][optionName], value },
            };
          }
        }
      }
    }
    setOptions(newOptions);
  };
};
