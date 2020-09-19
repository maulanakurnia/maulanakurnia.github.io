import { Text, Box, BoxProps } from "@chakra-ui/core";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

interface recentPostsProps extends BoxProps {
    recentPosts: any,
}

export const SectionRecentPosts: React.FC<recentPostsProps> = ({recentPosts, ...props}) => (
  <Box px={['0','15px']} py="10px" borderTopWidth={['1px','0']}  minW="100%" {...props}>
    <Text as="span" fontSize={["20px", "15px"]} fontWeight="700">
      Artikel Terbaru
    </Text>
    <Box mt="0.3em">
      {recentPosts.map((p, index) => (
        <Link href={p.slug} key={index}>
          <Text
            as="span"
            fontSize="15px"
            _hover={{ color: "blue.500", cursor: "pointer" }}
            display="block"
          >
            {p.title}
          </Text>
        </Link>
      ))}
    </Box>
    <Link href="/blog">
      <Text
        as="span"
        fontSize="15px"
        _hover={{ color: "blue.500", cursor: "pointer" }}
        justifyContent="flex-end"
        display="flex"
        mt="1em"
        pt="0.2em"
      >
        Selengakapnya
        <Text as="span" mt="0.35em">
          <MdKeyboardArrowRight />
        </Text>
      </Text>
    </Link>
  </Box>
);
