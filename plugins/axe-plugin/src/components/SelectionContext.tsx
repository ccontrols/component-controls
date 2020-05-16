import React, { useState, useEffect, createContext, FC } from 'react';
import { AxeResults, Result } from 'axe-core';

export type Selection = string[];
export interface SelectionContextProps {
  selection: Selection;
  isSelected: (selector: string[]) => boolean;
  isTagSelected: (tag: string) => boolean;
  toggleSelection: (selector: string[]) => void;
  toggleTagSelected: (tag: string) => void;
}
//@ts-ignore
export const SelectionContext = createContext<SelectionContextProps>({});

interface SelectionContextProviderProps {
  results: Pick<AxeResults, 'violations' | 'passes' | 'incomplete'>;
}
export const SelectionContextProvider: FC<SelectionContextProviderProps> = ({
  children,
  results,
}) => {
  const [selection, setSelection] = useState<Selection>([]);
  const [tagged, setTagged] = useState<{
    [tag: string]: string[];
  }>({});
  useEffect(() => {
    setTagged(
      results.violations.reduce(
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
      ),
    );
    setSelection([]);
  }, [results]);
  const isSelected = (selector: string[]) =>
    selector.some(s => selection.includes(s));

  const toggleSelection = (selector: string[]) => {
    if (isSelected(selector)) {
      setSelection(selection.filter(e => !selector.includes(e)));
    } else {
      setSelection([...selection, ...selector]);
    }
  };
  const isTagSelected = (tag: string) =>
    tagged[tag] ? isSelected(tagged[tag]) : false;
  const toggleTagSelected = (tag: string) => {
    if (tagged[tag]) {
      const wasSelected = isSelected(tagged[tag]);
      setSelection(selection.filter(e => !tagged[tag].includes(e)));
      if (!wasSelected) {
        setSelection([...selection, ...tagged[tag]]);
      }
    }
  };
  return (
    <SelectionContext.Provider
      value={{
        selection,
        isSelected,
        toggleSelection,
        isTagSelected,
        toggleTagSelected,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
