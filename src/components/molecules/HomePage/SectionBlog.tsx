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
import { motion } from "framer-motion";
export const MotionBox = motion.custom(Box);
export const SectionBlog = ({ posts }) => {
  const Border = `1px solid ${useColorModeValue("#E2E8F0", "rgb(39,41,46)")}`;
  return (
    <>
      <Text fontSize="20px" fontWeight="700" mt={10} mb={5}>
        Artikel Terbaru
      </Text>
      {posts.map((post, index) => (
        <Link as={`blog/${post.slug}`} href={`/blog/[...slug]`} key={index}>
          <MotionBox
            // [soon] react dom does not recognize the props
            whileTap={{y: 0}}
            whileHover={{y: -4}}
            padding={5}
            borderRadius="6px"
            mb="15px"
            border={Border}
            css={{
              ":hover": {
                ".title": {
                  color: "#2e7ad1",
                },
              },
            }}
            _hover={{
              cursor: "pointer",
            }}
          >
            <Heading className="title" size="md">
              {post.title}
            </Heading>
            <Text fontSize="15px">{formatDate(post.date)}</Text>
            <Text mt="10px">{post.description}</Text>
          </MotionBox>
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
