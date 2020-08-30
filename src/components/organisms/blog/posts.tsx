import { Box, Text, Stack, Badge } from "@chakra-ui/core";
import NextLink from "next/link";

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
        <Box px={[0, 5]} py={3}>
            <Box
                display="flex"
                px={{ xs: 5, lg: 10 }}
                my="auto"
                borderRadius={6}
                justifyContent="space-between">
                <Box w="full" display={{ xs: "none", lg: "block" }}>
                    <Text as="span" fontSize={{ xs: 13, lg: 16 }}>
                        {date}
                    </Text>
                </Box>
                <Box w="500%">
                    <Text fontWeight="600" fontSize={{ xs: 16, lg: 24 }} mt="-2px">
                        <NextLink as={href} href="/blog/[slug]" passHref>{title}</NextLink>
                    </Text>
                <Text
                    as="span"
                    fontSize={12}
                    my="auto"
                    display={{ xs: "block", lg: "none" }}>
                    {date}
                </Text>
                <Stack direction="row" py={2}>
                    <Badge>Tag</Badge>
                    <Badge colorScheme="green">Tag</Badge>
                    <Badge colorScheme="red">Tag</Badge>
                    <Badge colorScheme="purple">Tag</Badge>
                </Stack>
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