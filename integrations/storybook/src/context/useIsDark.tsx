import React from 'react';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

export const useIsDark = (): boolean => {
  const [isDark, setIsDark] = React.useState(prefersDark.matches);
  React.useEffect(() => {
    //inspired from: https://github.com/hipstersmoothie/storybook-dark-mode/blob/46476b4e96a5b310f13e7dccc69e2baa5e477814/src/Tool.tsx#L111
    const prefersDarkUpdate = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };
    prefersDark.addListener(prefersDarkUpdate);

    return () => {
      prefersDark.removeListener(prefersDarkUpdate);
    };
  });
  return isDark;
};
