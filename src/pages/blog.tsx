import { ReactElement } from "react";
import { GetStaticProps } from "next";
import Posts from "organisms/blog/posts";
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
            <Posts key={index} post={post} />
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
