import Markdown from "utils/Markdown";
import React, { useContext } from "react";
import { Box, Image as ChakraImage, Text } from "@chakra-ui/core";

interface ImageProps {
  alt?: string;
  caption?: string;
  defaultSize?: string;
  invertInDarkMode?: boolean;
  src: string;
}

const Image = ({ alt, caption, invertInDarkMode = false, src }: ImageProps) => {
  const isSVG = src.endsWith("svg");
  const extension = src.split(".").slice(-1);
  const imageWidths = [114, 272, 340, 544, 680, 1360];

  const webpSrcSet = imageWidths
    .map(
      (size) =>
        `/api/image?name=/images/posts/${src}&w=${size}&fm=webp ${size}w`
    )
    .join(", ");

  const srcSet = imageWidths
    .map(
      (size) =>
        `/api/image?name=/images/posts/${src}&w=${size}&fm=${extension} ${size}w`
    )
    .join(", ");

  const defaultSizes =
    "(min-width: 860px) 680px, (min-width: 621px) calc(57.14vw + 189px), calc(90.63vw - 18px)";
  const sizes = defaultSizes;

  const img = (
    <>
      <picture>
        {!isSVG && (
          <>
            <source sizes={sizes} srcSet={webpSrcSet} type="image/webp" />
            <source sizes={sizes} srcSet={srcSet} type={`image/${extension}`} />
          </>
        )}
        <ChakraImage
          alt={alt}
          borderRadius={6}
          className={invertInDarkMode ? "invertInDarkMode" : ""}
          mx="auto"
          sizes={sizes}
          src={"/images/posts/" + src}
          textAlign="center"
        />
      </picture>
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          .invertInDarkMode {
            filter: invert(100%) hue-rotate(180deg);
          }
        }
      `}</style>
    </>
  );

  return (
    <Box m="2rem 0">
      {img}
      {caption && (
        <Box textAlign="center" fontSize={["14px", "16px"]}>
          <Markdown>{caption}</Markdown>
        </Box>
      )}
    </Box>
  );
};

export default Image;
