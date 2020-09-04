import Markdown from "utils/Markdown";
import React, { useContext } from "react";
import WebPSupportContext from "atoms/WebPSupportContext";
import { Box, Image as ChakraImage, Text } from "@chakra-ui/core";

interface ImageProps {
  align?: "left" | "right";
  alt?: string;
  caption?: string;
  defaultSize?: string;
  invertInDarkMode?: boolean;
  src: string;
}

const Image = ({
  align,
  alt,
  caption,
  invertInDarkMode = false,
  src,
}: ImageProps) => {
  const usesSrcSet = !src.endsWith("svg");
  const extension = src.split(".").slice(-1);
  const imageWidths = [114, 272, 340, 544, 680, 1360];

  // Assume webp support by default to limit requests on modern browsers
  const webPSupport = useContext(WebPSupportContext);

  const srcSet = imageWidths
    .map(
      (size) =>
        `/api/image?name=/images/posts/${src}&w=${size}&fm=${
          webPSupport ? "webp" : extension
        }
        ${size}w`
    )
    .join(", ");

  const defaultSizes =
    "(min-width: 860px) 680px, (min-width: 621px) calc(57.14vw + 189px), calc(90.63vw - 18px)";
  const sizes = defaultSizes;

  const img = (
    <>
      <ChakraImage
        alt={alt}
        borderRadius={6}
        className={invertInDarkMode ? "invertInDarkMode" : ""}
        loading="lazy"
        mx="auto"
        sizes={sizes}
        src={"/images/posts/" + src}
        srcSet={usesSrcSet ? srcSet : ""}
        textAlign="center"
      />
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
        <Text size="100px" textAlign="center">
          {caption}
        </Text>
      )}
    </Box>
  );
};

export default Image;
