import React from "react"
import {Text,Heading, Container, useColorModeValue} from '@chakra-ui/core'
import { NextSeo } from "next-seo"
const NotFoundPage = () => (
  <>
    <NextSeo
        title="404" 
        description="page not found"
        titleTemplate="%s | mufradmabni"
        noindex={true}/>
    <Container textAlign="center" top="30%" left="35%" position="absolute" color={useColorModeValue("#c40707","#802b2b")}>
        <Heading fontSize={[25, 30]} mb={[2, 5]} pt={"70px"}>404 NOT FOUND</Heading>
        <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Container>
  </>
)

export default NotFoundPage