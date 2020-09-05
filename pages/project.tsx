import { Fragment } from "react";
import PageHeader from "atoms/pageHeader";
import {
  Box,
  useColorModeValue,
  Text,
  Container,
  Image,
  Link,
  Button,
  Flex,
} from "@chakra-ui/core";
import { NextSeo } from "next-seo";
import { useContent } from "context/contentContext";

export default function Project() {
  const { myProject } = useContent();
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
          {myProject.map(({ title, cover, url, ...rest }, index) => (
            <Box key={index} w="30%" borderWidth="1px" borderRadius="10px">
              <Image src={cover} />
              <Text textAlign="center" fontWeight="600">
                {title}
              </Text>
              <Flex justifyContent="center">
                <Link href={url}>
                  <Button
                    mt="10px"
                    borderRadius="10px 10px 0px 0px"
                    size="sm"
                    _focus={{ outline: "none" }}
                  >
                    souce code
                  </Button>
                </Link>
              </Flex>
            </Box>
          ))}
        </Box>
      </Container>
    </Fragment>
  );
}
