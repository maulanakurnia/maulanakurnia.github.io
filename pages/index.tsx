import {Fragment} from 'react'
<<<<<<< HEAD
import Header from '../src/components/layout/Header';
import Main from 'components/sections/main'
import SEO from 'components/utils/seo'

const IndexPage = () => {
    return (
        <Fragment>
            <SEO title="Home" />
            <Header/>
            <Main/>
        </Fragment>
    )
}
export default IndexPage
=======
import { Box, Button, Stack, Flex, Text, Heading} from "@chakra-ui/core";
import Header from '../src/components/Header';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'
export default function Home() {
  return (
    <Fragment>
        <Header/>
        <Box backgroundImage="url(static/images/bg-min.jpg)" h={"calc(30vh)"} w="100%" display="block" backgroundAttachment="fixed" backgroundSize="cover" backgroundPosition="center" minHeight={300} borderBottomWidth="1px"/>
        <Flex justifyContent="center">
            <Box backgroundImage="url(static/images/profile-2-min.jpg)" h={200} w={200} borderRadius="50%" backgroundSize="200px" display="flex" mt="-100px" borderWidth="1px"/>
        </Flex>
            <Flex direction="column" textAlign="center" p={3}>
                <Heading as="h1" fontSize="20px">Maulana Kurnia</Heading>
                <Text as="span" fontSize="13px" fontStyle="italic">IT Student at UPN "Veteran" Yogyakarta</Text>
            </Flex>
            <Stack direction="row" spacing={4} justifyContent="center">
                <Button 
                    leftIcon={<FaTwitter />} 
                    bg="rgb(0, 75, 160)" 
                    color="white"
                    p={15} 
                    borderRadius={3}>
                    twitter
                </Button>
                <Button 
                    leftIcon={<FaInstagram />} 
                    bg="white" 
                    color="black" 
                    p={15} 
                    borderRadius={3}>
                    Instagram
                </Button>
                <Button 
                    leftIcon={<FaGithub />} 
                    bg="#3b434a" 
                    color="white"
                    p={15} 
                    borderRadius={3}>
                    Github
                </Button>
            </Stack>
        
    </Fragment>
  )
}
>>>>>>> 1988e8ea2c246c5e5770bac08638483b5173bceb
