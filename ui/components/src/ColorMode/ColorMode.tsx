/** @jsx jsx */
import { jsx, useColorMode, Box } from 'theme-ui';
import { FC } from 'react';
import { Toggle, ToggleProps } from '../Toggle';

/**
 * dark/light mode toggle for theme-ui themes
 */
export const ColorMode: FC<Omit<
  ToggleProps,
  'checked' | 'onChange'
>> = props => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (checked: boolean) => {
    setColorMode(checked ? `dark` : `light`);
  };

  return (
    <Box variant="colormode.container">
      <Toggle
        aria-label="Toggle dark mode"
        uncheckedIcon={
          <Box variant="colormode.outericon">
            <Box variant="colormode.innericon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="1.25rem"
                height="1.25rem"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </Box>
          </Box>
        }
        checkedIcon={
          <Box variant="colormode.outericon">
            <Box variant="colormode.innericon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="1.25rem"
                height="1.25rem"
                stroke="#ddd"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-moon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </Box>
          </Box>
        }
        checked={isDark}
        onChange={toggleColorMode}
        onColor="#333"
        offColor="#ddd"
        {...props}
      />
    </Box>
  );
};
