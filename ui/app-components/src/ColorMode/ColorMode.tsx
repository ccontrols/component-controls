/** @jsx jsx */
import { jsx, useColorMode, Flex } from 'theme-ui';
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
    <Toggle
      aria-label="Toggle dark mode"
      uncheckedIcon={
        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Flex
            css={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
              paddingLeft: '3px',
              color: '#000',
            }}
          >
            <Octicon icon={PrimitiveDotStroke} />
          </Flex>
        </Flex>
      }
      checkedIcon={
        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <Flex
            css={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
              color: '#32e798',
            }}
          >
            <Octicon icon={PrimitiveDot} />
          </Flex>
        </Flex>
      }
      checked={isDark}
      onChange={toggleColorMode}
      onColor="#333"
      offColor="#ddd"
      {...props}
    />
  );
};
