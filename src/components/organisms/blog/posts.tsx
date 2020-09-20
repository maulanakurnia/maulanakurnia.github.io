import { Box, Text } from "@chakra-ui/core";
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
          <NextLink as={`blog/${post.slug}`} href={`/blog/[...slug]`}>
            <Text _hover={{ cursor: "pointer" }} as="span">
              <Tags mt="9px" tags={post.tags} />
              <Text
                _hover={{ color: "#2e7ad1" }}
                fontSize={{ xs: 16, lg: 20 }}
                fontWeight="700"
              >
                {post.title}
              </Text>
              <Text
                as="span"
                display={{ xs: "block", lg: "none" }}
                fontSize={12}
                mr="5px"
                my="auto"
              >
                {date}
              </Text>
              <Text fontSize={{ xs: 13, lg: 16 }}>{post.description}</Text>
            </Text>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Posts;
