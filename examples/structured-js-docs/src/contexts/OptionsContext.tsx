import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { getUrlParams, getUpdatedUrlParams } from '@component-controls/blocks';
import { OptionsType, defaultOptions } from './ts-options';

type ContextType = {
  updateOption: (title: string, value: string | boolean) => void;
  options: OptionsType;
};
const OptionsContext = createContext<ContextType>({} as ContextType);

const getPureConfig = (
  value: OptionsType,
): Record<string, string | boolean> | undefined => {
  const modifiedOptions: Record<string, string | boolean> = {};
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

export const OptionsContextProvider: FC = ({ children }) => {
  const [options, setOptions] = useState(defaultOptions);
  useEffect(() => {
    const urlConfig = getUrlParams('config');
    if (urlConfig) {
      const newOptions = JSON.parse(urlConfig);
      const config = { ...defaultOptions };
      Object.keys(config).forEach(sectionName => {
        const section = config[sectionName];
        Object.keys(section).forEach(optionName => {
          if (typeof newOptions[optionName] !== 'undefined') {
            section[optionName].value = newOptions[optionName];
          }
        });
      });
      setOptions(config);
    }
  }, []);
  const onChangeOptions = (value: OptionsType): void => {
    const config = getPureConfig(value);
    if (config) {
      const newUrl = getUpdatedUrlParams(
        'config',
        Object.keys(config).length ? JSON.stringify(config) : undefined,
      );
      if (newUrl && window.location.href !== newUrl) {
        window.history.replaceState(null, '', newUrl);
      }
    }
    setOptions(value);
  };
  const updateOption = (title: string, value: string | boolean): void => {
    for (const section in options) {
      for (const optionName in options[section]) {
        if (optionName === title) {
          if (value === options[section][optionName].defaultValue) {
            const newOptions = { ...options };
            delete newOptions[section][optionName].value;
            onChangeOptions(newOptions);
          } else {
            onChangeOptions({
              ...options,
              [section]: {
                ...options[section],
                [optionName]: { ...options[section][optionName], value },
              },
            });
          }
          return;
        }
      }
    }
  };
  return (
    <OptionsContext.Provider value={{ options, updateOption }}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = (): OptionsType => {
  const context = useContext(OptionsContext);
  return context.options;
};

export const useUpdateOptions = (
  title: string,
): ((value: string | boolean) => void) => {
  const context = useContext(OptionsContext);
  return (value: string | boolean) => context.updateOption(title, value);
};

export const useConfig = (): ReturnType<typeof getPureConfig> => {
  const options = useOptions();
  const config = getPureConfig(options);
  return config;
};
