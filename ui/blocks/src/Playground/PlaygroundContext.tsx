import { createContext } from 'react';

export interface PlaygroundContextProps {
  useDescription: boolean;
}
export const PlaygroundContext = createContext<PlaygroundContextProps>({
  useDescription: false,
});
