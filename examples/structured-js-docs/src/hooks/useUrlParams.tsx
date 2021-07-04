import { useState, useEffect } from 'react';
import { getUrlParams, getUpdatedUrlParams } from '@component-controls/blocks';

export const useURLParamas = <S extends unknown>(
  name: string,
  initialState: S,
): [S, (newState: S) => void] => {
  const [state, setState] = useState<S>(initialState);
  useEffect(() => {
    const urlConfig = getUrlParams(name);
    if (urlConfig) {
      setState(JSON.parse(urlConfig));
    }
  }, [name]);
  return [
    state,
    newState => {
      const newUrl = getUpdatedUrlParams(
        name,
        newState ? JSON.stringify(newState) : undefined,
      );
      if (newUrl && window.location.href !== newUrl) {
        window.history.replaceState(null, '', newUrl);
      }
      setState(newState);
    },
  ];
};
