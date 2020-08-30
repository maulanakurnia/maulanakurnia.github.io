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
import Head from "next/head";
import NextLink from "next/link";
// Library local
import { getPostBySlug } from "lib/getPostBySlug";
import { getPostFilePaths } from "lib/getPostFilePaths";
import { slugifyPost } from "lib/slugifyPost";
import { PostFrontmatter } from "lib/postFrontmatter";
import { AppLayout, SEO } from "src/components/";
import { Box, Heading, Text, Image, Container } from "@chakra-ui/core";


interface PostPageParams extends ParsedUrlQuery {
    slug?: string;
}

interface PostPageProps {
    /** The unique slug of the blog post. */
    slug: string;
    /** The server-rendered MDX content of the article. */
    mdxContent: string;
    /** If the article has a banner image, this will contain all relevant URIs */
    image?: {
        /** The full, high-fidelity image URI */
        src: string;
        /**
         * A low quality placeholder image. This can be stretched out to fit the same
         * "size" as the `src` while the high-fidelity image is loading.
         */
        placeholder: string;
        /** Alt text for the banner image */
        alt: string;
    };
  /** Post metadata */
  frontmatter: Pick<
    PostFrontmatter,
    "title" | "description" | "publisher" | "link"
  > & {
    date: string;
    /** A rough estimate of how long this post will take to read. */
    readingTime: string;
  };
}

/**
 * This page displays an individual post for viewing.
 */
const PostPage: NextPage<PostPageProps> = (props) => {
    // Hydrate the MDX content. The second argument is an object of React components
    // to interpolate into the MDX components. Hydrating in this fashion means that
    // we can move the MDX to any folder we want, or even to a separate repository.
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

    // If there's a banner image, we want to use that for the metadata, so we need
    // to create a non-relative URL to the image.
    const absoluteImagePath =
    props.image?.src && HOMEPAGE ? HOMEPAGE + props.image?.src : undefined;

    return (
    <AppLayout>
        <Head>
            <title>{title}</title>
            <SEO title={title} description={description}/>
                {absoluteImagePath && props.image?.alt && (
                    <>
                    <meta name="twitter:image" content={absoluteImagePath} />
                    <meta name="twitter:image:alt" content={props.image?.alt} />
                    <meta property="og:image:url" content={absoluteImagePath} />
                    <meta property="og:image:alt" content={props.image?.alt} />
                    </>
                )}
            <script src="https://unpkg.com/requestidlecallback-polyfill@1.0.2/index.js" />
        </Head>

        <Container pt={10} maxW="xl">
            <Box margin="2rem 0">
                <Heading as='h1' fontSize={[25, 30]} mb={[5, 10]} pt={"30px"}>{title}</Heading>

                <Text
                as="span"
                color="rgba(0, 0, 0, 0.7)"
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
        </AppLayout>
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

    // If there's an image, fetch the image, resize it to the max width shown, and
    // create a low quality placeholder image.
    if (frontmatter.image?.url) {
    const resized = require(`src/${frontmatter.image.url}?resize&size=640`);
    const image = require(`src/${frontmatter.image.url}?lqip`);


    imageProps.image = {
        src: resized.src,
        placeholder: image.preSrc,
        alt: frontmatter.image.alt,
    };
    }

    // Render out the MDX content.
    const mdxContent = await renderToString(
    body,
    {},
    {
        // `prism` adds syntax highlighting as CSS classes to the code blocks.
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
