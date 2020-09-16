import { Fragment, ReactElement } from "react";
import { GetStaticProps } from "next";
import { Posts, Aside } from "organisms/blog/index";
import { PageHeader } from "atoms/index";
import {
  Box,
  useColorModeValue,
  Container,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  CloseButton,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/core";
import { Tag } from "molecules/Tags";
import { NextSeo } from "next-seo";
import blogPosts from "utils/mdxUtils";
import { MDXFrontMatter } from "*.mdx";
import { useState, useMemo } from "react";
import { useQueryState } from "next-usequerystate";
import { FiTag, FiSearch } from "react-icons/fi";
import { Tags } from "molecules/Tags";
import Layout from "templates/MDXLayout";
export default function Blog({
  posts,
}: {
  posts: MDXFrontMatter[];
}): ReactElement<typeof Layout> {
  const bg = useColorModeValue(
    "1px solid #dadce0",
    "1px solid rgb(39, 41, 46)"
  );

  const [tag, setTag] = useQueryState("tags");
  const [search, setSearch] = useState("");
  const filteredPosts = useMemo(() => {
    let p = posts;
    if (tag) {
      p = p.filter((post) => post.tags?.includes(tag));
    }
    if (search.length > 0) {
      p = p.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    return p;
  }, [posts, tag, search]);

  return (
    <>
      <NextSeo
        title="Blog | mufradmabni"
        description="I write about TypeScript, Node.js, React, security and privacy."
        openGraph={{
          title: "Articles by Maulana Kurnia",
        }}
      />
      <Container maxW="xl">
        <PageHeader title="Blog" />
          <Box>
            <InputGroup mb={2}>
              <InputLeftElement
                children={<FiSearch />}
                color={
                  search.length > 0
                    ? useColorModeValue("gray.600", "gray.400")
                    : useColorModeValue("gray.400", "gray.600")
                }
                w="3rem"
                zIndex={99}
              />
              <Input
                onChange={(e: any) => setSearch(e.target.value)}
                placeholder="Cari Artikel"
                value={search}
              />
              {search.length >= 1 && (
                <InputRightElement
                  children={
                    <CloseButton
                      onClick={() => setSearch("")}
                      rounded="full"
                      size="sm"
                    />
                  }
                />
              )}
            </InputGroup>
            {tag && (
              <Stack
                alignItems="center"
                bg={useColorModeValue("blue.50", "gray.800")}
                borderColor={useColorModeValue("blue.200", "blue.800")}
                borderWidth="1px"
                color={useColorModeValue("blue.900", "blue.300")}
                fontSize="sm"
                isInline
                justifyContent="space-between"
                p={2}
                pl={3}
                rounded="md"
                mb="10px"
                spacing={3}
              >
                <Flex alignItems="center">
                  <Text marginRight="10px">
                    <FiTag color={useColorModeValue("blue.600", "blue.400")} />
                  </Text>
                  <Text fontSize={{ xs: "10px", sm: "12px", md: "14px" }}>
                    Menampilan artikel dengan tag
                  </Text>
                  <Tag
                    colorScheme="blue"
                    interactive={false}
                    ml={2}
                    name={tag}
                    size="xs"
                  />
                </Flex>
                <CloseButton
                  aria-label="Clear"
                  onClick={() => setTag(null)}
                  rounded="full"
                  size="sm"
                />
              </Stack>
            )}
          </Box>
          <Box border={bg} borderRadius={6} py={{ xs: 2, lg: 10 }} w="full">
            {filteredPosts.map((post, index) => (
              <Posts key={index} post={post} />
            ))}
            {filteredPosts.length === 0 && (
              <Text
                color={useColorModeValue("gray.600", "gray.500")}
                fontSize="sm"
                my={12}
                textAlign="center"
              >
                Artikel tidak ditemukan
              </Text>
            )}
          </Box>
      </Container>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const posts = Array.from(blogPosts.values())
    .map((post) => post.frontMatter)
    .sort((a, b) => {
      return Number(new Date(b.date || "")) - Number(new Date(a.date || ""));
    });

  return {
    props: { posts },
  };
};

function ExampleTags(tags) {
  console.log("dari example tags:", tags);
}
