import { Box, Text, useColorModeValue, Stack, Badge } from "@chakra-ui/core";

const Aside = () => {
    const bg = useColorModeValue("1px solid #dadce0", "1px solid rgb(39, 41, 46)");
    return(
        <Box
            as="aside"
            position="sticky"
            top="5%"
            maxW="sm"
            overflow="auto">
            <Box border={bg} borderRadius={6} p={5} mt={{ xs: 5, md: 0 }}>
            <Text fontWeight="600">Tags</Text>
            <Stack direction="row" py={2}>
                <Badge>Tag</Badge>
                <Badge colorScheme="green">Tag</Badge>
                <Badge colorScheme="red">Tag</Badge>
                {/* <Badge colorScheme="purple">Tag</Badge>
                <Badge colorScheme="green">Tag</Badge>
                <Badge colorScheme="red">Tag</Badge> */}
            </Stack>
            </Box>
            <Box border={bg} borderRadius={6} p={5} mt={{ xs: 5, lg: 4 }}>
                <Text fontWeight="600">Artikel Terbaru</Text>
            </Box>
        </Box>
    );
}
export default Aside;