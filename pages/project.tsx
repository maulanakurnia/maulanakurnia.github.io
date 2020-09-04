import { Fragment } from "react";
import PageHeader from "atoms/pageHeader";
import { Box, useColorModeValue, Text, Container } from "@chakra-ui/core";
import { NextSeo } from "next-seo";

export default function Project() {
  const bg = useColorModeValue(
    "1px solid #dadce0",
    "1px solid rgb(39, 41, 46)"
  );
  return (
    <Fragment>
      <NextSeo
        description="I write about TypeScript, Node.js, React, security and privacy."
        noindex={true}
        openGraph={{
          title: "Project by Maulana Kurnia",
        }}
        title="Project"
        titleTemplate="%s | mufradmabni"
      />
      <Container maxW="xl">
        <PageHeader title="Project" />
        <Box border={bg} borderRadius={6} p={10} w="full">
          <Text fontWeight="700">COMING SOON</Text>
        </Box>
      </Container>
    </Fragment>
  );
}
