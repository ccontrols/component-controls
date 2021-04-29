/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  FC,
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
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
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <AxeContext.Provider
      value={{
        results: state,
      }}
    >
      <AxeSetContext.Provider
        value={{
          setResults: results => {
            if (mounted) {
              setState({ ...results });
            }
          },
        }}
      >
        {children}
      </AxeSetContext.Provider>
    </AxeContext.Provider>
  );
};

export const trimNode = (tag: string): string => {
  const trimmedList = tag.split('>');
  const storyNode = trimmedList.findIndex(s =>
    s.includes('[data-testid="story"]'),
  );
  trimmedList.splice(0, storyNode + 1);
  trimmedList.pop();
  return trimmedList.join('>');
};

const trimNodeList = (tagList: string[]): string[] => {
  return tagList.map(el => trimNode(el));
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
      setSelection: (newSelection: string[]) => {
        setSelection(newSelection);
      },
      isSelected: (targets: string[]) =>
        tagSelectedList(selection, targets, true).length > 0,
    }),
    [selection],
  );
  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useIsTagSelected = (tag = ''): boolean => {
  const tagged = useTaggedList();
  const { selection } = useContext(SelectionContext);
  return tagged[tag]
    ? tagSelectedList(selection, tagged[tag], true).length > 0
    : false;
};

export const tagSelectedList = (
  selection: string[],
  tags: string[],
  selected: boolean,
): string[] => {
  const tagsTrimmed = trimNodeList(tags);
  return selection.filter((e: string) => {
    return tagsTrimmed.includes(trimNode(e)) === selected;
  });
};
