import { Box, Button, Stack, Flex, Text, Heading, Container, Grid, Center} from "@chakra-ui/core";
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'
import { Fragment } from "react";
import { css } from '@emotion/core'
import { useContent } from '../../../context/contentContext';

import {CardGame} from "molecules/CardGame";

export default function Home() {
    const { myGame } = useContent();
    return(
        <Fragment>
        <Box css={css`background-image: url(static/img/bg-min.jpg)`} h={"calc(30vh)"} w="100%" display="block" backgroundAttachment="fixed" backgroundSize="cover" backgroundPosition="center" minHeight={300} borderBottomWidth="1px"/>
        <Flex justifyContent="center">
            <Box css={css`background-image: url(static/img/profile-min.jpg)`} h={200} w={200} borderRadius="50%" backgroundSize="200px" display="flex" mt="-100px" borderWidth="1px"/>
        </Flex>
            {/* <Flex direction="column" textAlign="center" p={3}>
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
            </Stack> */}

            <Container maxW="xl" textAlign="center">
                <Container>
                    <Text fontWeight="600" fontSize="30px" transform="skewY(-6deg)" mt={10}>👋 Hai</Text>
                    <Text mt={5}>Selamat datang di website pribadi saya, disini saya membagikan beberapa source code dan terkadang menulis beberapa tulisan.</Text>
                    <Text fontWeight="600">Enjoy it</Text>
                </Container>
                <Text fontWeight="600" fontSize="30px" mt={10}>Mainan Saya</Text>
                <Box m="20px">
                    {myGame.map(({color,title, icon, ...rest}) =>(
                        <CardGame key={title} aria-label={title} icon={icon} color={color}{...rest}/>
                    ))}
                </Box>
                <Text fontWeight="600" fontSize="30px" mt={10}>Blog</Text>
                <Text>COMING SOON</Text>
                <Text fontWeight="600" fontSize="30px" mt={10}>Projek</Text>
                <Text>COMING SOON</Text>
            </Container>
        </Fragment>
    );
}