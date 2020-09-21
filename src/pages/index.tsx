import { Fragment } from "react";
import { Container } from "@chakra-ui/core";
import {
  SectionBlog,
  SectionHeader,
  SectionDevelop,
  SectionProject,
  SectionWelcome,
} from "molecules/HomePage";
import { NextSeo } from "next-seo";
import blogPosts from "utils/mdxUtils";
import { GetStaticProps } from "next";
import { MDXFrontMatter } from "*.mdx";
const IndexPage = ({ posts }: { posts: MDXFrontMatter[] }) => {
  return (
    <Fragment>
      <NextSeo title="mufradmabni" />
      <SectionHeader />
      <Container maxW="md">
        <SectionWelcome />
        <SectionDevelop />
        <SectionBlog posts={posts} />
        <SectionProject />
      </Container>
    </Fragment>
  );
};
export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = Array.from(blogPosts.values())
    .map((post) => post.frontMatter)
    .sort((a, b) => {
      return Number(new Date(b.date || "")) - Number(new Date(a.date || ""));
    })
    .slice(0, 3);

  return {
    props: { posts },
  };
};
