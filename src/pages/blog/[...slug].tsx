import { MDXFile } from "*.mdx";
import allBlogPosts from "utils/mdxUtils";
import { generateOgImages } from "utils/ogImage";
import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import slug from "rehype-slug";
import readingTime from "reading-time";
import titleCode from "remark-code-titles";
import MDXLayout from "templates/MDXLayout";
import { components as defaultComponents } from "templates/MDXComponent";
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/core";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import buildComponentMap from "utils/buildComponentMap";
import { PostPageProps } from "types/postPageProps";

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
        maxW="xl"
        display={["block", "flex"]}
        justifyContent="space-between"
        borderBottom={Border}
        pb="1em"
      >
        <MDXLayout frontMatter={frontMatter} readingTime={readingTime}>
          {content}
        </MDXLayout>
        <Box
          position={['static','sticky']}
          top="3em"
          height="25%"
          mt="5em"
          pl={['0','5em']}
          minW={['100%','30%']}
        >
          <Box
            border={Border}
            px="15px"
            py="10px"
            borderRadius="6px"
            minW="100%"
            mb="1em"
          >
            <Text fontWeight="700" mb="0.5em" pb="0.5em">
              Daftar Isi
            </Text>
            <Box>
              <Text ml="1em">SOON</Text>
            </Box>
          </Box>
          <Box
            border={Border}
            px="15px"
            py="10px"
            borderRadius="6px"
            minW="100%"
          >
            <Text fontWeight="700" mb="0.5em" pb="0.4em">
              Artikel Terbaru
            </Text>
            {recentPosts.map((p, index) => (
              <Box key={index}>
                <Link href={p.slug}>
                  <Text
                    as="span"
                    _hover={{ color: "blue.500", cursor: "pointer" }}
                    display="block"
                  >
                    {p.title}
                  </Text>
                </Link>
              </Box>
            ))}
            <Link href="/blog">
              <Text
                _hover={{ color: "blue.500", cursor: "pointer" }}
                justifyContent="flex-end"
                display="flex"
                mt="1em"
                pt="0.2em"
              >
                Selengakapnya
                <Text mt="0.35em">
                  <MdKeyboardArrowRight />
                </Text>
              </Text>
            </Link>
          </Box>
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
