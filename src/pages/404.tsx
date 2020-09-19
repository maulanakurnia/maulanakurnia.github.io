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
      <NextSeo title="404 | mufradmabni" description="page not found" />
      <Container
        color={useColorModeValue("#c40707", "#802b2b")}
      >
        <Box textAlign="center" my="auto" pt={"70px"}>
          <Heading fontSize={[25, 30]} mb={[2, 5]}>
            404 NOT FOUND
          </Heading>
          <Text>
            You just hit a route that doesn't exist... the sadness.
          </Text>
        </Box>
      </Container>
    </>
  );
}
