import React, { FC, HTMLAttributes } from 'react';
import { Link, BoxOwnProps, LinkProps } from 'theme-ui';

export interface ExternalLinkOwnProps {
  /**
   * specifies that the target will be downloaded when a user clicks on the hyperlink.
   */
  download?: any;
  /**
   * specifies the URL of the page the link goes to.
   */
  href?: string;
  /**
   * specifies the language of the linked document.
   */
  hrefLang?: string;
  /**
   * specifies what media/device the linked document is optimized for.
   */
  media?: string;
  /**
   * specifies a list of URLs to be notified if the user follows the hyperlink.
   */
  ping?: string;
  /**
   * specifies the media type of the linked document.
   */
  type?: string;
  /**
   * specifies which referrer to send.
   */
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'unsafe-url';
}

export type ExternalLinkProps = ExternalLinkOwnProps &
  BoxOwnProps &
  HTMLAttributes<'a'>;

/**
 * Anchor link to an external url,
 * adds the default `target="_blank" rel="noopener noreferrer"` props
 */
export const ExternalLink: FC<ExternalLinkProps> = props => (
  <Link {...(props as LinkProps)} target="_blank" rel="noopener noreferrer" />
);
