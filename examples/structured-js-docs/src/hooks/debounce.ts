import { useState, useEffect } from 'react';

export const useDebounce = (value: any, delay: number): any => {
  const [state, setState] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setState(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(value), delay]);

  return state;
};
