/** @jsx jsx */
import { jsx, useColorMode, Box } from 'theme-ui';
import { FC } from 'react';
import Octicon, {
  PrimitiveDot,
  PrimitiveDotStroke,
} from '@primer/octicons-react';
import { Toggle, ToggleProps } from '@component-controls/components';

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
            <Box
              variant="colormode.innericon"
              sx={{
                pl: 1,
                color: '#000',
              }}
            >
              <Octicon icon={PrimitiveDotStroke} />
            </Box>
          </Box>
        }
        checkedIcon={
          <Box variant="colormode.outericon">
            <Box
              variant="colormode.innericon"
              sx={{
                color: '#32e798',
              }}
            >
              <Octicon icon={PrimitiveDot} />
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
