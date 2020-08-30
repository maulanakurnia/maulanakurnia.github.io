import { Fragment } from "react";
import SEO from "src/components/atoms/seo";
import PageHeader from "src/components/atoms/pageHeader";
import { Box,useColorModeValue, Text } from '@chakra-ui/core'

export default function Project() {
    const bg = useColorModeValue("1px solid #dadce0", "1px solid rgb(39, 41, 46)");
    return(
        <Fragment>
            <SEO title="Blog" />
            <PageHeader title="Project" />
            <Box px={[5, 20]}>
                <Box border={bg} borderRadius={6} p={10} w="full">
                    <Text fontWeight="700">COMING SOON</Text>
                </Box>
            </Box>
        </Fragment>
    )
}