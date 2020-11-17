import {
  Text,
  Box,
  Heading,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import formatDate from "utils/formatDate";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tags } from "molecules/Tags";
export const MotionBox = motion.custom(Box);
export const SectionBlog = ({ posts }) => {
  const Border = `1px solid ${useColorModeValue("#E2E8F0", "rgb(39,41,46)")}`;
  return (
    <>
      <Text fontSize="20px" fontWeight="700" mb={5} mt={10}>
        Artikel Terbaru
      </Text>
      {posts.map((post, index) => (
        <Link as={`blog/${post.slug}`} href={`/blog/[...slug]`} key={index}>
          <MotionBox
            // [soon] react dom does not recognize the props
            _hover={{
              cursor: "pointer",
            }}
            border={Border}
            borderRadius="6px"
            css={{
              ":hover": {
                ".title": {
                  color: "#2e7ad1",
                },
              },
            }}
            mb="15px"
            padding={5}
            // whileHover={{ y: -4 }}
            // whileTap={{ y: 0 }}
          >
            <Heading className="title" fontSize={{ xs: 16, lg: 20 }}>
              {post.title}
            </Heading>
            <Flex mt="2px">
              <Text color="grey" fontSize="13px">
                {formatDate(post.date)}
              </Text>
              <Tags ml="1em" mt="1px" tags={post.tags} />
            </Flex>
            <Text fontSize={{ xs: 13, lg: 14 }} mt="10px">
              {post.description}
            </Text>
          </MotionBox>
        </Link>
      ))}
      <Flex justifyContent="center" mt="20px">
        <Link href="blog/">
          <Button
            _focus={{ outline: "none" }}
            color={useColorModeValue("#363537", "#929497")}
            justifyItems="center"
            size="sm"
            variant="outline"
          >
            Lihat semua artikel
          </Button>
        </Link>
      </Flex>
    </>
  );
};
