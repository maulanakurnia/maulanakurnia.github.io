import { Box, Text, useColorModeValue, Stack, Badge } from "@chakra-ui/core";
import { Tags } from "molecules/Tags";
import { MDXFrontMatter } from "*.mdx";

interface PostsProps {
  posts: MDXFrontMatter;
}

const Aside = ({ posts }: PostsProps) => {
  const bg = useColorModeValue(
    "1px solid #dadce0",
    "1px solid rgb(39, 41, 46)"
  );

  return (
    <Box as="aside" maxW="sm" overflow="auto" position="sticky" top="5%">
      <Box border={bg} borderRadius={6} mt={{ xs: 5, md: 0 }} p={5}>
        <Text fontWeight="600">Tags</Text>
        <Stack direction="row" py={2}>
          <Tags interactive={true} tags={posts.tags} />
        </Stack>
      </Box>
      <Box border={bg} borderRadius={6} mt={{ xs: 5, lg: 4 }} p={5}>
        <Text fontWeight="600">Artikel Terbaru</Text>
      </Box>
    </Box>
  );
};
export default Aside;
