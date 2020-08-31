import { Fragment } from "react";
import { GetStaticProps } from "next";
import readingTime from "reading-time";
import { Posts, Aside } from "organisms/blog/index";
import { slugifyPost } from "src/lib/slugifyPost";
import { PageHeader,SEO } from "atoms/index";
import { compareDesc, format } from "date-fns";
import { getPostBySlug } from "src/lib/getPostBySlug";
import { PostFrontmatter } from "src/lib/@types/postFrontmatter";
import { getPostFilePaths } from "src/lib/getPostFilePaths";
import { Box, useColorModeValue, Container, Grid, Input } from "@chakra-ui/core";

type PostPreview = Pick<
  PostFrontmatter,
  "title" | "description" | "draft" | "link" | "publisher" | "tags"
> & {
  date: string;
  href: string;
  readingTime: string;
  description: string;
};

interface BlogPageProps {
  posts: PostPreview[];
}

function Blog({ posts }: BlogPageProps) {
  const bg = useColorModeValue(
    "1px solid #dadce0",
    "1px solid rgb(39, 41, 46)"
  );
  return (
    <Fragment>
      <SEO title="Blog" />
        <Container maxW="xl">
            <PageHeader title="Blog" />
            <Grid gap={2} gridTemplateColumns={{md:"auto 30%", lg:"auto 25%"}}>
                <Input variant="outline" placeholder="Coming Soon" mb={5}/>
                <Box></Box>
                <Box border={bg} borderRadius={6} py={{xs:2,lg:10}} w="full">
                {posts.map((post) => (
                    <Posts
                        key={post.title}
                        title={post.title}
                        date={post.date}
                        href={post.href}
                        desc={post.description}/>
                ))}
                </Box>
                <Aside />
            </Grid>
        </Container>
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
