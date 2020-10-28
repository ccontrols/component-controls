/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState, FC, useMemo } from 'react';
import { Result } from 'axe-core';

export type Selection = string[];

export interface AxeResults {
  violations: Result[];
  passes: Result[];
  incomplete: Result[];
}

export interface AxeContextProps {
  results: AxeResults;
}

export interface AxeSetContextProps {
  setResults: (value: AxeResults) => void;
}

export const AxeContext = createContext<AxeContextProps>({
  results: {
    violations: [],
    passes: [],
    incomplete: [],
  },
});

export const AxeSetContext = createContext<AxeSetContextProps>({
  setResults: () => {},
});
export const AxeContextProvider: FC = ({ children }) => {
  const [state, setState] = useState<AxeResults>({
    violations: [],
    passes: [],
    incomplete: [],
  });
  return (
    <AxeContext.Provider
      value={{
        results: state,
      }}
    >
      <AxeSetContext.Provider value={{ setResults: setState }}>
        {children}
      </AxeSetContext.Provider>
    </AxeContext.Provider>
  );
};

export const useTaggedList = (): { [tag: string]: string[] } => {
  const {
    results: { violations },
  } = useContext(AxeContext);
  return violations.reduce(
    (acc: { [tag: string]: string[] }, result: Result) => {
      result.tags.forEach(tag => {
        if (acc[tag] === undefined) {
          acc[tag] = [];
        }
        result.nodes.forEach(node => {
          node.target.forEach(target => {
            if (!acc[tag].includes(target)) {
              acc[tag].push(target);
            }
          });
        });
      });
      return acc;
    },
    {},
  );
};

export interface SelectionContextProps {
  selection: string[];
  setSelection: (value: string[]) => void;
  isSelected: (targets: string[]) => boolean;
}
export const SelectionContext = createContext<SelectionContextProps>({
  selection: [],
  setSelection: () => {},
  isSelected: () => false,
});

export const SelectionContextProvider: FC = ({ children }) => {
  const [selection, setSelection] = useState<string[]>([]);
  const value = useMemo(
    () => ({
      selection,
      setSelection,
      isSelected: (targets: string[]) =>
        targets.some((s: string) => selection.includes(s)),
    }),
    [selection],
  );
  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useIsTagSelected = (tag: string = ''): boolean => {
  const tagged = useTaggedList();
  const { selection } = useContext(SelectionContext);
  return tagged[tag]
    ? tagged[tag].some((s: string) => selection.includes(s))
    : false;
};
