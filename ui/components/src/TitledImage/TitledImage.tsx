import React, { FC } from 'react';
import { Image, ImageProps, Text, Box } from 'theme-ui';

export { ImageProps as TitledImageProps };
/**
 * image components with a title if available
 */
export const TitledImage: FC<Omit<ImageProps, 'ref'>> = props => {
  const { title } = props;
  const img = <Image variant="titledimage.image" {...props} />;
  return title ? (
    <Box variant="titledimage.container">
      {img}
      <Text variant="titledimage.title">{title}</Text>
    </Box>
  ) : (
    img
  );
};
