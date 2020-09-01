// Library Externals
import React from "react";
import { format } from 'date-fns'
import readingTime from "reading-time";
// @ts-ignore
import prism from '@mapbox/rehype-prism'; 
import { ParsedUrlQuery } from "querystring";
// MDX
// @ts-ignore
import useHydrateMdx from "next-mdx-remote/hydrate";
// @ts-ignore
import renderToString from "next-mdx-remote/render-to-string";
// Next
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextLink from "next/link";
// Library local
import { getPostBySlug } from "src/lib/getPostBySlug";
import { getPostFilePaths } from "src/lib/getPostFilePaths";
import { slugifyPost } from "src/lib/slugifyPost";
import { PostFrontmatter } from "src/lib/@types/postFrontmatter";
import { Box, Heading, Text, Image, Container } from "@chakra-ui/core";
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "templates/MDXLayout"
import { NextSeo } from "next-seo";
interface PostPageParams extends ParsedUrlQuery {
    slug?: string;
}

interface PostPageProps {
    slug: string;
    mdxContent: string;
    image?: {
        src: string;
        placeholder: string;
        alt: string;
    };
  frontmatter: Pick<
    PostFrontmatter,
    "title" | "description" | "publisher" | "link"
  > & {
    date: string;
    readingTime: string;
  };
}

const PostPage: NextPage<PostPageProps> = (props) => {
    const hydrated = useHydrateMdx(props.mdxContent, {});

    const {
        title,
        date,
        readingTime,
        publisher,
        description,
        link: externalLink,
    } = props.frontmatter;

    const { HOMEPAGE } = process.env;

    const absoluteImagePath =
    props.image?.src && HOMEPAGE ? HOMEPAGE + props.image?.src : undefined;
    console.log(props.image?.src)
    return (
    <MDXProvider components={MDXComponents}>
        <NextSeo
            title={title}
            titleTemplate="%s | mufradmabni"
            noindex={true}
            description={description}
            openGraph={{
                title: 'Articles by Maulana Kurnia',
                images: [
                  {
                    url: `${props.image}`,
                    width: 1280,
                    height: 720
                  }
                ]
            }}
        />

        <Container pt={10} maxW="xl">
            <Box margin="2rem 0">
                <Heading as='h1' fontSize={[25, 30]} mb={[5, 10]} pt={"30px"}>{title}</Heading>

                <Text
                as="span"
                marginTop="-1rem"
                display="block"
                >
                <Text>
                    {date && `${date} — `}
                    {readingTime}
                </Text>
                </Text>
            </Box>
            {props.image && <Image {...props.image} alt={props.image.alt} />}
            <Box>{hydrated}</Box>
            {publisher && externalLink && (
                <NextLink
                external
                href={externalLink}
                css={{
                    display: "inline-block",
                    marginTop: "2rem",
                }}
                >
                Read the full article on {publisher}.
                </NextLink>
            )}
            </Container>
        </MDXProvider>
    );
};

export const getStaticPaths: GetStaticPaths<PostPageParams> = async () => {
    const postFiles = getPostFilePaths();

    type Path = { params: PostPageParams };
    const paths = postFiles.map<Path>((file) => {
        return { params: { slug: slugifyPost(file) } };
    });

    return {
        paths,
        fallback: false,
    };
};

type GetPostPageStaticProps = GetStaticProps<PostPageProps, PostPageParams>;
export const getStaticProps: GetPostPageStaticProps = async (ctx) => {
    // @ts-ignore
    const { slug } = ctx.params;
    const { frontmatter, body } = getPostBySlug(slug);

    let imageProps: { image?: PostPageProps["image"] } = {};

    if (frontmatter.image?.url) {
    const resized = require(`src/assets/img/posts/${frontmatter.image.url}?resize&size=640`);
    const image = require(`src/assets/img/posts/${frontmatter.image.url}?lqip`);


    imageProps.image = {
        src: resized.src,
        placeholder: image.preSrc,
        alt: frontmatter.image.alt,
    };
    }

    const mdxContent = await renderToString(
    body,
    {},
    {
        rehypePlugins: [prism],
    }
    );

    return {
        props: {
            slug,
            mdxContent,
            frontmatter: {
            ...frontmatter,
            date: format(frontmatter.date, "dd MMM yyyy"),
            readingTime: readingTime(body).text,
            },
            ...imageProps,
            body,
        },
    };
};

export default PostPage;
