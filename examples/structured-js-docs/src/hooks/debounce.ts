import { useState, useEffect } from 'react';

export const useDebounce = (
  value: string | undefined,
  delay: number,
): string | undefined => {
  const [state, setState] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setState(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return state;
};
