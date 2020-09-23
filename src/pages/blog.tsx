import { ReactElement } from "react";
import { GetStaticProps } from "next";
import { PageHeader } from "atoms/index";
import {
  Box,
  useColorModeValue,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  CloseButton,
  Text,
} from "@chakra-ui/core";
import { NextSeo } from "next-seo";
import blogPosts from "utils/mdxUtils";
import { MDXFrontMatter } from "*.mdx";
import { useState, useMemo } from "react";
import { useQueryState } from "next-usequerystate";
import { FiTag, FiSearch } from "react-icons/fi";
import Layout from "templates/PostsLayout";
import { Notification } from "atoms/Notification";
import formatDate from "utils/formatDate";
import NextLink from "next/link";
import { Tags } from "molecules/Tags";
export default function Blog({
  posts,
}: {
  posts: MDXFrontMatter[];
}): ReactElement<typeof Layout> {
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


  const Border = useColorModeValue("#dadce0", "rgb(39, 41, 46)");
  const active = useColorModeValue("gray.600", "gray.400");
  const notActive = useColorModeValue("gray.400", "gray.600");
  const colorTag = useColorModeValue("blue.600", "blue.400");

  return (
    <>
      <NextSeo
        description="I write about TypeScript, Node.js, React, security and privacy."
        openGraph={{
          title: "Articles by Maulana Kurnia",
        }}
        title="Blog | mufradmabni"
      />
      <Container maxW="lg">
        <PageHeader title="Blog" />
        <Box>
          <InputGroup mb={2}>
            <InputLeftElement
              children={<FiSearch />}
              color={search.length > 0 ? active : notActive}
              w="3rem"
              zIndex={99}
            />
            <Input
              bg="transparent"
              borderColor={Border}
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
            <Notification
              content={"Menampilkan artikel dengan tag " + tag}
              icon={<FiTag color={colorTag} />}
            />
          )}
        </Box>
        <Box
          borderWidth="1px"
          borderColor={Border}
          borderRadius={6}
          py={{ xs: 2, lg: 10 }}
          w="full"
        >
          {filteredPosts.map((post, index) => (
            <Box px={{ md: 3 }} py={3} key={index}>
              <Box
                borderRadius={6}
                display="flex"
                justifyContent="space-between"
                my="auto"
                px={5}
              >
                <Box display={{ xs: "none", lg: "block" }} mt="5px" w="full">
                  <Text as="span" fontSize={14}>
                    {formatDate(post.date)}
                  </Text>
                </Box>
                <Box w="400%">
                  <NextLink as={`blog/${post.slug}`} href={`/blog/[...slug]`}>
                    <Text _hover={{ cursor: "pointer" }} as="span">
                      <Tags mt="9px" tags={post.tags} />
                      <Text
                        _hover={{ color: "#2e7ad1" }}
                        fontSize={{ xs: 16, lg: 20 }}
                        fontWeight="700"
                      >
                        {post.title}
                      </Text>
                      <Text
                        as="span"
                        display={{ xs: "block", lg: "none" }}
                        fontSize={12}
                        mr="5px"
                        my="auto"
                      >
                        {formatDate(post.date)}
                      </Text>
                      <Text fontSize={{ xs: 13, lg: 16 }}>
                        {post.description}
                      </Text>
                    </Text>
                  </NextLink>
                </Box>
              </Box>
            </Box>
          ))}
          {filteredPosts.length === 0 && (
            <Text fontSize="sm" my={12} textAlign="center">
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
