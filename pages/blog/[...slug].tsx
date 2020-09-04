import { MDXFile, MDXFrontMatter } from "*.mdx";
import allBlogPosts from "utils/mdxUtils";
import { generateOgImages } from "utils/ogImage";
import smartypants from "@ngsctt/remark-smartypants";
import prism from "mdx-prism";
import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import katex from "rehype-katex";
import slug from "rehype-slug";
import abbr from "remark-abbr";
import math from "remark-math";
import toc from "remark-toc";
import readingTime from "reading-time";

import formatDate from "utils/formatDate";
import { useWebP } from "utils/useWebP";
import widont from "utils/widont";
import siteConfig from "data/siteconfig.json";
import { GlobalStyle } from "templates/index";
import Metatags from "atoms/Metatags";
import WebPSupportContext from "atoms/WebPSupportContext";

import { Text, Container, Flex } from "@chakra-ui/core";
import { PageHeader } from "atoms/index";

import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "templates/MDXLayout";
import { FiClock, FiCalendar } from "react-icons/fi";

// OpaqueComponentType is basically a generic that will be used for dynamically
// importing components in MDX files.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OpaqueComponentType = ComponentType<any>;

interface ComponentMap {
  [key: string]: {
    regex: RegExp;
    component: OpaqueComponentType;
  };
}

/**
 * Takes a Markdown/MDX string and returns an object of custom/imported
 * components found.
 *
 * When adding new components to a post/MDX page, `componentsMap` needs to be
 * updated.
 */
function buildComponentMap(source: string) {
  // Define the components that should be made optionally available in MDX
  const availableComponents: ComponentMap = {
    Codepen: {
      regex: /<Codepen/,
      component: dynamic(() => import("react-codepen-embed")),
    },
  };

  // Search the passed string for component instances and include them if
  // necessary
  const map: { [key: string]: OpaqueComponentType } = {};
  for (const prop in availableComponents) {
    const currentComponent = availableComponents[prop];
    const matches = currentComponent.regex.test(source);
    if (matches) {
      map[prop] = currentComponent.component;
    }
  }

  return map;
}

interface PostPageProps {
  source: string;
  frontMatter: MDXFrontMatter;
  extraComponents: string[];
  readingTime: string;
}

export default function PostPage({
  source,
  frontMatter,
  extraComponents,
  readingTime,
}: PostPageProps) {
  const components = {
    ...buildComponentMap(`<${extraComponents.join("<")}`),
  };

  const content = hydrate(source, { components });

  const site = siteConfig;
  const title = frontMatter?.title || site.title;
  const date = frontMatter?.date;
  const formattedDate = formatDate(frontMatter?.date || "");
  const excerpt = frontMatter?.excerpt;
  const webPSupport = useWebP(true);
  const ogSlug = frontMatter?.ogSlug;

  return (
    <>
      <MDXProvider components={MDXComponents}>
        <WebPSupportContext.Provider value={webPSupport}>
          <Metatags
            description={excerpt || site.description}
            thumbnail={
              ogSlug
                ? `https://${process.env.VERCEL_URL}/og/${ogSlug}`
                : `https://${process.env.VERCEL_URL}/images/og.png`
            }
            title={title}
          />
          <Container maxW="md">
            <>
              <PageHeader title={widont(title)} />

            <Flex justifyContent="space-between" mt="-20px">
                {date && (
                    <Text fontSize="md" display="flex">
                        <Text mr="5px" my="auto">
                            <FiCalendar/>
                        </Text>
                    {formattedDate}  
                    </Text>
                )}
                <Text as="span" display="flex">
                    <Text mr="5px" my="auto">
                        <FiClock/>
                    </Text>
                    {readingTime}
                </Text>
            </Flex>
            </>
            {content}
          </Container>
        </WebPSupportContext.Provider>
      </MDXProvider>
      <GlobalStyle />
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
    // ...defaultComponents,
    ...extraComponents,
  };

  const mdxSource = await renderToString(
    content,
    {},
    {
      components,
      remarkPlugins: [abbr, smartypants, math, toc],
      rehypePlugins: [katex, prism, slug],
      scope: frontMatter,
    }
  );

  return {
    props: {
      source: mdxSource,
      frontMatter,
      readingTime: readingTime(content).text,
      extraComponents: Object.keys(extraComponents),
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
