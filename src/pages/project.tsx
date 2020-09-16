import { Fragment } from "react";
import PageHeader from "atoms/pageHeader";
import {
  Box,
  useColorModeValue,
  Container,
} from "@chakra-ui/core";
import { NextSeo } from "next-seo";
import { useContent } from "context/contentContext";
import { CardProject } from "molecules/CardProjects";

export default function Project() {
  const { myProject } = useContent();
  const bg = useColorModeValue(
    "1px solid #dadce0",
    "1px solid rgb(39, 41, 46)"
  );

  return (
    <Fragment>
      <NextSeo
        title="Project | mufradmabni"
        description="I write about TypeScript, Node.js, React, security and privacy."
        openGraph={{
          title: "Project by Maulana Kurnia",
        }}
      />
      <Container maxW="xl">
        <PageHeader title="Project" />
        <Box border={bg} borderRadius={6} p={10} w="full">
          {myProject.map(({ title, cover, url, ...rest }, index) => (
            <CardProject
              cover={cover}
              key={index}
              title={title}
              url={url}
              {...rest}
            />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
}
