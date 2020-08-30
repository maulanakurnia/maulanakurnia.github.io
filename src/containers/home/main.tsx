import { Box, Button, Stack, Flex, Text, Heading} from "@chakra-ui/core";
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'
import { Fragment } from "react";
import { css } from '@emotion/core'

// @ts-ignore
import Cover from 'src/img/bg-min.jpg' 
// @ts-ignore
import Avatar from 'src/img/profile-2-min.jpg' 

export default function Home() {
    return(
        <Fragment>
        <Box css={css`background-image: url(${Cover})`} h={"calc(30vh)"} w="100%" display="block" backgroundAttachment="fixed" backgroundSize="cover" backgroundPosition="center" minHeight={300} borderBottomWidth="1px"/>
        <Flex justifyContent="center">
            <Box css={css`background-image: url(${Avatar})`} h={200} w={200} borderRadius="50%" backgroundSize="200px" display="flex" mt="-100px" borderWidth="1px"/>
        </Flex>
            <Flex direction="column" textAlign="center" p={3}>
                <Heading as="h1" fontSize="20px">Maulana Kurnia</Heading>
                <Text as="span" fontSize="13px" fontStyle="italic">IT Student at UPN "Veteran" Yogyakarta</Text>
            </Flex>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                    leftIcon={<FaTwitter />} 
                    bg="#1976d2"
                    _hover={{bg: '#004ba0'}}
                    color="white"
                    size="sm"
                    borderRadius={3}
                    onClick={() => window.open('https://www.twitter.com/maulanaakurniaa','_blank')}>
                    twitter
                </Button>
                <Button 
                    leftIcon={<FaInstagram />} 
                    bg="gray.100" 
                    _hover={{bg: 'gray.300'}}
                    color="black" 
                    size="sm"
                    borderRadius={3}
                    onClick={() => window.open('https://www.instagram.com/maulanaakurniaa','_blank')}>
                    Instagram
                </Button>
                <Button 
                    leftIcon={<FaGithub />} 
                    bg="#2C3034" 
                    _hover={{bg: '#3B434A'}}
                    color="white"
                    size="sm"
                    borderRadius={3}
                    onClick={() => window.open('https://www.github.com/maulanakurnia','_blank')}>
                    Github
                </Button>
            </Stack>
        </Fragment>
    );
}