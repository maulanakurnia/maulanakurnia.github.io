import { Box, Text, Stack } from "@chakra-ui/core";
import NextLink from "next/link";
import { MDXFrontMatter } from "*.mdx";
import formatDate from "utils/formatDate";
import { Tags } from "../../molecules/Tags";
interface PostsProps {
  post: MDXFrontMatter;
}

const Posts = ({ post }: PostsProps) => {
  const date = formatDate(post.date);
  return (
    <Box px={{ md: 3 }} py={3}>
      <Box
        borderRadius={6}
        display="flex"
        justifyContent="space-between"
        my="auto"
        px={5}
      >
        <Box display={{ xs: "none", lg: "block" }} mt="5px" w="full">
          <Text as="span" fontSize={14}>
            {date}
          </Text>
        </Box>
        <Box w="400%">
          <Stack direction="row" py={2}>
            <Tags interactive={true} tags={post.tags} />
          </Stack>
          <NextLink as={`blog/${post.slug}`} href={`/blog/[...slug]`}>
            <Text
              _hover={{ cursor: "pointer" }}
              as="span"
              // @ts-ignore
              style={{ "&>.heading": { color: "#2e7ad1" } }}
            >
              <Text
                _hover={{ color: "#2e7ad1" }}
                className="heading"
                fontSize={{ xs: 16, lg: 24 }}
                fontWeight="600"
              >
                {post.title}
              </Text>

              <Text
                as="span"
                display={{ xs: "block", lg: "none" }}
                fontSize={12}
                my="auto"
              >
                {date}
              </Text>
              <Text
                className="description"
                fontSize={{ xs: 13, lg: 16 }}
                textAlign="justify"
              >
                {post.description}
              </Text>
            </Text>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Posts;
