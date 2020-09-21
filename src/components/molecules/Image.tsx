import React from "react";
import { Box, Image as ChakraImage, ImageProps } from "@chakra-ui/core";
import Link from "atoms/Link";
import ReactMarkdown from "react-markdown";
interface Props extends ImageProps {
  alt?: string;
  caption?: string;
  defaultSize?: string;
  invertInDarkMode?: boolean;
  src: string;
}

const Image = ({ alt, caption, src, ...rest }: Props) => {
  const extension = src.split(".").slice(-1);
  const imageWidths = [114, 272, 340, 544, 680, 1360];
  const renderers = {
    link: Link,
  };

  const webpSrcSet = imageWidths
    .map((size) => `/api/image?name=/images/${src}&w=${size}&fm=webp ${size}w`)
    .join(", ");

  const srcSet = imageWidths
    .map(
      (size) =>
        `/api/image?name=/images/${src}&w=${size}&fm=${extension} ${size}w`
    )
    .join(", ");

  return (
    <Box>
      {
        <picture>
          <ChakraImage
            alt={alt}
            borderRadius={6}
            mx="auto"
            my="2em"
            srcSet={webpSrcSet}
            src={srcSet}
            textAlign="center"
            width="40rem"
            userSelect="none"
            // @ts-ignore
            type="image/webp"
            {...rest}
          />
        </picture>
      }
      {caption && (
        <Box fontSize={["14px", "16px"]} textAlign="center" mt="-2em">
          <ReactMarkdown renderers={renderers} source={caption} />
        </Box>
      )}
    </Box>
  );
};

export default Image;
