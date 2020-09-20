import React from "react";
import {
  Text,
  Heading,
  Container,
  useColorModeValue,
  Box,
} from "@chakra-ui/core";
import { NextSeo } from "next-seo";
export default function NotFoundPage() {
  return (
    <>
      <NextSeo description="page not found" title="404 | mufradmabni" />
      <Container color={useColorModeValue("#c40707", "#802b2b")}>
        <Box my="auto" pt={"70px"} textAlign="center">
          <Heading fontSize={[25, 30]} mb={[2, 5]}>
            404 NOT FOUND
          </Heading>
          <Text>You just hit a route that doesn`t exist... the sadness.</Text>
        </Box>
      </Container>
    </>
  );
}
