import React, { FC } from 'react';
import { Image, ImageProps, Embed, Text, Box } from 'theme-ui';

/**
 * image components with a title if available
 */
export const TitledImage: FC<Omit<ImageProps, 'ref'>> = props => {
  const { title, src } = props;
  const youTbeRegEx = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/;
  const isYouTube = src && youTbeRegEx.test(src);
  const img = isYouTube ? (
    <Embed src={src} />
  ) : (
    <Image variant="titledimage.image" src={src} {...props} />
  );
  return title ? (
    <Box variant="titledimage.container">
      {img}
      <Text variant="titledimage.title">{title}</Text>
    </Box>
  ) : (
    img
  );
};
