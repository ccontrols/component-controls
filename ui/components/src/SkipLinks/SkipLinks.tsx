/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, LinkProps } from 'theme-ui';

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
  <Box
    variant="skiplinks.container"
    as="section"
    aria-label="skip tab order to linked items"
  >
    {items.map((item, idx) => (
      <Box variant="skiplinks.item" key={`skip_link_${idx}`}>
        <SkiLinksItem {...item} />
      </Box>
    ))}
  </Box>
);
