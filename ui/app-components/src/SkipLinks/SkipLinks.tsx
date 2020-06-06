/** @jsx jsx */
import { FC } from 'react';
import { jsx, Flex, LinkProps, SxStyleProp, Theme } from 'theme-ui';

const skipNavStyles: SxStyleProp = {
  border: (t: Theme) => `1px solid ${t.colors?.primary}`,
  clip: `react(0 0 0 0)`,
  width: '0.01em',
  height: '0.01em',
  whiteSpace: 'nowrap',
  padding: 0,
  overflow: `hidden`,
  position: `absolute`,
  flexDirection: 'column',
  '&:focus-within': {
    padding: 3,
    position: `fixed`,
    top: `50px`,
    left: `15px`,
    backgroundColor: `background`,
    zIndex: 15,
    width: `auto`,
    height: `auto`,
    clip: `auto`,
    textDecoration: `none`,
  },
};
export interface SkiLinksItemOwnProps {
  /**
   * target's id property, without the # char
   */
  target: string;
  /**
   * text message to be displayed
   */
  text: string;
}

export type SkiLinksItemProps = SkiLinksItemOwnProps & LinkProps;

/**
 * single skip link anchor item
 */
export const SkiLinksItem: FC<SkiLinksItemProps & LinkProps> = ({
  target,
  text,
  ...rest
}) => (
  <a {...rest} href={`#${target}`} data-skip-link="true">
    {text}
  </a>
);

export interface SkipLinksProps {
  items: SkiLinksItemProps[];
}

/**
 * list of anchor elements to skip to
 *
 */

export const SkipLinks: FC<SkipLinksProps> = ({ items }) => (
  <Flex
    sx={{ ...skipNavStyles }}
    as="section"
    aria-label="skip tab order to linked items"
  >
    {items.map((item, idx) => (
      <SkiLinksItem key={`skip_link_${idx}`} {...item} />
    ))}
  </Flex>
);
