import {
  Box,
  Text,
  useColorModeValue,
  Stack,
  Badge
} from "@chakra-ui/core";
import { Fragment } from "react";
import SEO from "components/utils/seo";
import PageHeader from "components/pageHeader";
import NextLink from 'next/link';

function Blog({ posts }) {
  const bg = useColorModeValue("1px solid #dadce0", "1px solid #181818");
  const bgHover = useColorModeValue("rgba(0,0,0,0.06)","rgba(255,255,255,0.06)")
  return (
    <Fragment>
      <SEO title="Blog" />
      <PageHeader title="Blog" />
      <Box px={[5,20]} display="flex" flexDirection={{xs: 'column', lg: 'row'}} justifyContent="space-between">
        <Box border={bg} borderRadius={6} py={10}>
          <Box px={[0,5]} py={2}>
            <Box display="flex"  px={{xs:5, lg:10}} p={{lg: 10}} borderRadius={6} justifyContent="space-between">
                <Box w="full"display={{xs: 'none', lg: 'block'}}>
                    <Text as="span" fontSize={{xs: 13, lg: 16}} my="auto">
                        12 Juni 2020
                    </Text>
                </Box>
                <Box w="500%">
                    <Text fontWeight="600" fontSize={{xs: 16, lg:20}}>
                        <NextLink href="/">Title here</NextLink>
                    </Text>
                    <Text as="span" fontSize={12} my="auto" display={{xs: 'block', lg: 'none'}}>
                        12 Juni 2020
                    </Text>
                    <Stack direction="row" py={2}>
                        <Badge>Tag</Badge>
                        <Badge colorScheme="green">Tag</Badge>
                        <Badge colorScheme="red">Tag</Badge>
                        <Badge colorScheme="purple">Tag</Badge>
                    </Stack>
                    <Text className="description" fontSize={{xs: 13, lg:18}} textAlign="justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                        quia beatae, non vero rem magnam pariatur accusamus nobis
                        consequatur doloribus dolor perferendis impedit libero eveniet
                        fugit, totam aliquid iure quas ratione inventore a!
                        Voluptatibus sunt hic et cumque ipsa maiores necessitatibus
                        optio, ipsum esse possimus porro placeat minus. Repudiandae,
                        dolores laboriosam. Harum vel eveniet facilis commodi
                        cupiditate totam, accusamus assumenda aliquid quae non libero
                        dolorum blanditiis molestias eum neque explicabo aut nesciunt?
                        Tempore, tempora eveniet, veritatis reprehenderit enim soluta
                        incidunt vel, hic excepturi quae dolorem nam corporis
                        blanditiis. Aperiam assumenda, dicta neque ducimus ipsum
                        suscipit distinctio. Quisquam modi perferendis eligendi.
                    </Text>
                </Box>
            </Box>

          </Box>
        </Box>
        <Box as="aside" pl={{xs:0, lg:20}} position="sticky" top="5%" width='full' overflow="auto">
            <Box border={bg} borderRadius={6} p={5} mt={{xs: 5, lg: 0}}>
                <Text fontWeight="600">Tags</Text>
                <Stack direction="row" py={2}>
                    <Badge>Tag</Badge>
                    <Badge colorScheme="green">Tag</Badge>
                    <Badge colorScheme="red">Tag</Badge>
                    <Badge colorScheme="purple">Tag</Badge>
                    <Badge colorScheme="green">Tag</Badge>
                    <Badge colorScheme="red">Tag</Badge>

                </Stack>
            </Box>
            <Box border={bg} borderRadius={6} p={5} mt={{xs: 5, lg: 4}}>
                <Text fontWeight="600">Artikel Terbaru</Text>

            </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Blog;