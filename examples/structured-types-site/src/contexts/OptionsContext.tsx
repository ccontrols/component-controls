import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { getUrlParams, getUpdatedUrlParams } from '@component-controls/blocks';
import {
  OptionValueType,
  TSOptionsType,
  ParseOptionsType,
  defaultTSOptions,
  defaultParseOptions,
} from './options';

export type OptionsType = 'tsOptions' | 'parseOptions';
type OptionsContextType = {
  updateOption: (
    paramName: OptionsType,
    title: string,
    value: OptionValueType,
  ) => void;
  parseOptions: ParseOptionsType;
  tsOptions: TSOptionsType;
};
const OptionsContext = createContext<OptionsContextType>(
  {} as OptionsContextType,
);

export const getPureConfig = (
  value: TSOptionsType | ParseOptionsType,
): Record<string, OptionValueType> | undefined => {
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

export const OptionsContextProvider: FC = ({ children }) => {
  const [options, setOptions] = useState<{
    parseOptions: ParseOptionsType;
    tsOptions: TSOptionsType;
  }>({ parseOptions: defaultParseOptions, tsOptions: defaultTSOptions });
  useEffect(() => {
    const getURLOptions = (
      paramName: OptionsType,
      defaults: TSOptionsType | ParseOptionsType,
    ): ParseOptionsType | TSOptionsType => {
      const urlConfig = getUrlParams(paramName);
      if (urlConfig) {
        const newOptions = JSON.parse(urlConfig);
        const config = { ...defaults };
        Object.keys(config).forEach(sectionName => {
          const section = config[sectionName];
          Object.keys(section).forEach(optionName => {
            if (typeof newOptions[optionName] !== 'undefined') {
              section[optionName].value = newOptions[optionName];
            }
          });
        });
        return config;
      }
      return defaults;
    };
    const tsOptions = getURLOptions('tsOptions', defaultTSOptions);
    const parseOptions = getURLOptions('parseOptions', defaultParseOptions);
    setOptions({ tsOptions, parseOptions });
  }, []);
  const onChangeOptions = (
    paramName: OptionsType,
    value: TSOptionsType | ParseOptionsType,
  ): void => {
    const config = getPureConfig(value);
    const newUrl = getUpdatedUrlParams(
      paramName,
      config ? JSON.stringify(config) : undefined,
    );
    if (newUrl && window.location.href !== newUrl) {
      window.history.replaceState(null, '', newUrl);
    }
    setOptions({ ...options, [paramName]: value });
  };
  const updateOption = (
    paramName: OptionsType,
    title: string,
    value: OptionValueType,
  ): void => {
    const values = options[paramName];
    for (const section in values) {
      for (const optionName in values[section]) {
        if (optionName === title) {
          if (value === values[section][optionName].defaultValue) {
            const newOptions = { ...values };
            delete newOptions[section][optionName].value;
            onChangeOptions(paramName, newOptions);
          } else {
            onChangeOptions(paramName, {
              ...values,
              [section]: {
                ...values[section],
                [optionName]: { ...values[section][optionName], value },
              },
            });
          }
          return;
        }
      }
    }
  };
  return (
    <OptionsContext.Provider
      value={{
        tsOptions: options.tsOptions,
        parseOptions: options.parseOptions,
        updateOption,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = (): {
  parseOptions: ParseOptionsType;
  tsOptions: TSOptionsType;
} => {
  return useContext(OptionsContext);
};

export const useUpdateOptions = (
  paramName: OptionsType,
  title: string,
): ((value: OptionValueType) => void) => {
  const context = useContext(OptionsContext);
  return (value: OptionValueType) => {
    return context.updateOption(paramName, title, value);
  };
};
