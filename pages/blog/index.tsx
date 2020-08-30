import { Fragment } from "react";
import SEO from "components/lib/seo";
import { GetStaticProps } from 'next';
import readingTime from 'reading-time';
import Aside from "containers/blog/aside";
import { Posts } from "containers/blog/posts";
import { slugifyPost } from 'lib/slugifyPost';
import PageHeader from "components/pageHeader";
import { compareDesc, format } from 'date-fns';
import { getPostBySlug } from 'lib/getPostBySlug';
import { PostFrontmatter } from "lib/postFrontmatter";
import { getPostFilePaths } from 'lib/getPostFilePaths';
import { Box, useColorModeValue } from "@chakra-ui/core";

type PostPreview = Pick<PostFrontmatter,"title" | "description" | "draft" | "link" | "publisher" | "tags"> & {
    /** The date that the post was first published. */
    date: string;
    /** The `href` to the actual post itself */
    href: string;
    /** An estimate of how long the post will take to read */
    readingTime: string;
    description: string;
};

interface BlogPageProps {
    /** List of blog posts. */
    posts: PostPreview[];
}

function Blog({ posts }: BlogPageProps) {
    const bg = useColorModeValue("1px solid #dadce0", "1px solid rgb(39, 41, 46)");
  return (
    <Fragment>
      <SEO title="Blog" />
      <PageHeader title="Blog" />
      <Box
        px={[5, 20]}
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between">
        <Box border={bg} borderRadius={6} py={[2, 10]} w="full">
            {posts.map((post) => (
            <Posts
                key={post.title}
                title={post.title}
                date={post.date}
                href={post.href}
                desc={post.description}
            />
            ))}
        </Box>
        <Aside/>
      </Box>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postFiles = getPostFilePaths();

  let posts = [];

  for (let postFile of postFiles) {
    try {
      const slug = slugifyPost(postFile);
      const { frontmatter, body } = getPostBySlug(slug);

      // Don't add the post to the list if it's a WIP
      if (frontmatter.draft) continue;

      const postData = {
        ...frontmatter,
        href: `/blog/${slug}`,
        readingTime: readingTime(body).text,
      };

      posts.push(postData);
    } catch (error) {
      console.log(`Error reading frontmatter of ${postFile}`, error);
    }
  }

  const sortedPosts = posts
    .sort((a, b) => compareDesc(a.date, b.date))
    .map((p) => ({
      ...p,
      date: format(p.date, "dd MMMM yyyy"),
    }));

  return { props: { posts: sortedPosts } };
};

export default Blog;
