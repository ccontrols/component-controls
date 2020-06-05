/** @jsx jsx */
import { Text, Flex, Link, jsx } from 'theme-ui';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      variant="footer"
      sx={{ flexDirection: 'column', alignItems: 'center' }}
    >
      <Text>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </Text>
      <Flex
        sx={{
          alignItems: `center`,
          p: 1,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Link
          aria-label="visit component-controls repository"
          href="https://github.com/ccontrols/component-controls"
        >
          component controls
        </Link>
      </Flex>
    </Flex>
  );
};
