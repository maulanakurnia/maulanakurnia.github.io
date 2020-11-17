import React from "react";
import {
  Text,
  Heading,
  Container,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
export default function NotFoundPage() {
  const color = useColorModeValue("#c40707", "#802b2b");
  return (
    <>
      <NextSeo description="page not found" title="404 | mufradmabni" />
      <Box
        textAlign="center"
        position="absolute"
        top="35%"
        left="10%"
        right="10%"
      >
        <Text fontSize={[60, 90]} fontWeight="600" mb="-20px" color={color}>
          404
        </Text>
        <Text fontWeight="700" fontSize={[25, 20]} mb="20px" color={color}>
          Page Not Found
        </Text>
        <Text>You just hit a route that doesn`t exist... the sadness.</Text>
      </Box>
    </>
  );
}
