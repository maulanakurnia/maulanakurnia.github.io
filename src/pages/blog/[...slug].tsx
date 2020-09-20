import { MDXFile } from "*.mdx";
import allBlogPosts from "utils/mdxUtils";
import { generateOgImages } from "utils/ogImage";
import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import slug from "rehype-slug";
import readingTime from "reading-time";
import titleCode from "remark-code-titles";
import MDXLayout from "templates/PostsLayout";
import { components as defaultComponents } from "templates/MDXComponent";
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/core";

import buildComponentMap from "utils/buildComponentMap";
import { PostPageProps } from "types/postPageProps";
import { SectionRecentPosts } from "molecules/PostsPage/SectionRecentPosts";
import { SectionDaftarIsi } from "molecules/PostsPage/SectionDaftarIsi";

export default function PostPage({
  source,
  frontMatter,
  extraComponents,
  readingTime,
  recentPosts,
}: PostPageProps) {
  const components = {
    ...defaultComponents,
    ...buildComponentMap(`<${extraComponents.join("<")}`),
  };

  const content = hydrate(source, { components });
  const Border = useColorModeValue(
    "1px solid #dadce0",
    "1px solid rgb(39, 41, 46)"
  );
  return (
    <>
      <Container
        borderBottom={Border}
        display={{ xs: "block", lg: "flex" }}
        justifyContent="space-between"
        maxW="xl"
        pb="1em"
      >
        <MDXLayout frontMatter={frontMatter} readingTime={readingTime}>
          {content}
        </MDXLayout>
        <Box
          height="25%"
          minW={["100%", "30%"]}
          mt={{ xs: "0", lg: "5em" }}
          pl={{ xs: "0", lg: "5em" }}
          position={{ xs: "static", lg: "sticky" }}
          top="3em"
        >
          <SectionDaftarIsi
            display={{ xs: "none", lg: "block" }}
            fontSize="15px"
            px="15px"
            py="10px"
          />
          <SectionRecentPosts pt="1em" recentPosts={recentPosts} />
        </Box>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    console.error("No parameters passed for static generation");
    return { props: {} };
  }

  const postKey = (params.slug as string[]).join("/");
  const source = allBlogPosts.get(postKey) as MDXFile;
  const { content, frontMatter } = source;
  const extraComponents = buildComponentMap(content);
  const components = {
    ...defaultComponents,
    ...extraComponents,
  };

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [titleCode],
      rehypePlugins: [slug],
    },
    scope: frontMatter,
  });

  const recentPosts = Array.from(allBlogPosts.values())
    .map((post) => post.frontMatter)
    .sort((a, b) => {
      return Number(new Date(b.date || "")) - Number(new Date(a.date || ""));
    })
    .slice(0, 3);

  return {
    props: {
      source: mdxSource,
      frontMatter,
      readingTime: readingTime(content).text,
      extraComponents: Object.keys(extraComponents),
      recentPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    await generateOgImages(
      Array.from(allBlogPosts.values()).map((post) => post.frontMatter)
    );
  } catch {
    throw new Error(`Unable to generate image for posts`);
  }

  const paths = Array.from(allBlogPosts.keys()).map((slug) => ({
    params: { slug: slug.split("/") },
  }));

  return {
    paths,
    fallback: false,
  };
};
