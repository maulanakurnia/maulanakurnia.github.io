import {
  Text,
  Box,
  Heading,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/core";
import formatDate from "utils/formatDate";
import Link from "next/link";
export const SectionBlog = ({ posts }) => {
  return (
    <>
      <Text textAlign="center" fontSize="25px" fontWeight="700" mt={10} mb={5}>
        Artikel Terbaru
      </Text>
      {posts.map((post, index) => (
        <Link as={`blog/${post.slug}`} href={`/blog/[...slug]`} key={index}>
          <Box
            padding={5}
            border="1px solid transparent"
            borderRadius="6px"
            _hover={{
              cursor: "pointer",
              //   borderWidth: "1px",
              border: `1px solid ${useColorModeValue("#E2E8F0", "#37383b")}`,
            }}
          >
            <Heading className="title" size="md">
              {post.title}
            </Heading>
            <Text fontSize="15px">{formatDate(post.date)}</Text>
            <Text mt="10px">{post.description}</Text>
          </Box>
        </Link>
      ))}
      <Flex justifyContent="center" mt="20px">
        <Link href="blog/">
          <Button
            justifyItems="center"
            size="sm"
            variant="outline"
            color={useColorModeValue("#363537", "#929497")}
            _focus={{ outline: "none" }}
          >
            Lihat semua artikel
          </Button>
        </Link>
      </Flex>
    </>
  );
};
