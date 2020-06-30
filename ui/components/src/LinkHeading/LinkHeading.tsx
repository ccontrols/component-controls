/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Link, HeadingProps, Heading } from 'theme-ui';
import { LinkIcon } from '@primer/octicons-react';
import { pageLink, titleToId } from './pageLink';

const iconSize: Record<string, { size: number; level: number }> = {
  h1: { size: 32, level: 1 },
  h2: { size: 28, level: 2 },
  h3: { size: 20, level: 3 },
  h4: { size: 16, level: 4 },
  h5: { size: 14, level: 5 },
  h6: { size: 12, level: 6 },
};
export type LinkHeadingProps = HeadingProps;
/**
 * h1-h6 heading component that generates automatically a github-style anchor to navigate to a section
 */
export const LinkHeading: FC<LinkHeadingProps> = ({
  as = 'h3',
  id,
  children,
  title,
  ...rest
}) => {
  const { size, level } = iconSize[as as string];
  const padding = 4;
  const linkId = titleToId(id || children);
  return (
    <Box id={linkId} variant="linkheading.container">
      <Box variant="linkheading.inner">
        {(id || typeof children === 'string') && (
          <Link
            sx={{ paddingRight: `${padding}px`, left: -(size + padding) }}
            variant="linkheading.link"
            href={pageLink(linkId)}
            data-title={title || children}
            data-id={linkId}
            data-level={level}
          >
            <LinkIcon size={size} verticalAlign="middle" />
          </Link>
        )}
        <Heading as={as} variant={`styles.${as}`} {...rest}>
          {children}
        </Heading>
      </Box>
    </Box>
  );
};
