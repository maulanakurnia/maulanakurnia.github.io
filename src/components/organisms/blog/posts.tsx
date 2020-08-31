import { Box, Text, Stack, Badge } from "@chakra-ui/core";
import NextLink from "next/link";
import Link from "next/link";

interface PostsProps {
    href: string
    title: string
    // tags?: string[]
    date: string,
    desc: string
}

const Posts = ({
    // tags: [],
    title,
    href,
    date,
    desc
}: PostsProps) => {
    return (
        <Box px={{md:3}} py={3}>
            <Box
                display="flex"
                px={5}
                my="auto"
                borderRadius={6}
                justifyContent="space-between">
                <Box w="full" display={{ xs: "none", lg: "block" }} mt="5px">
                    <Text as="span" fontSize={{ xs: 13, lg: 16 }}>
                        {date}
                    </Text>
                </Box>
                <Box w="500%">
                <Stack direction="row" py={2}>
                    <Badge colorScheme="blue"><Link href="/">Tutorial</Link></Badge>
                    <Badge colorScheme="blue"><Link href="/">Memasak</Link></Badge>
                    <Badge colorScheme="blue"><Link href="/">Makan</Link></Badge>
                </Stack>
                    <NextLink as={href} href="/blog/[slug]">
                        <Text fontWeight="600" fontSize={{ xs: 16, lg: 24 }} _hover={{color: '#2e7ad1', cursor: 'pointer'}}>
                                {title}
                        </Text>
                    </NextLink>
                <Text
                    as="span"
                    fontSize={12}
                    my="auto"
                    display={{ xs: "block", lg: "none" }}>
                    {date}
                </Text>
                <Text
                    className="description"
                    fontSize={{ xs: 13, lg: 18 }}
                    textAlign="justify">
                        {desc}
                </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Posts;