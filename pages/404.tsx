import React from "react"
import {Text,Heading, Container} from '@chakra-ui/core'
import { NextSeo } from "next-seo"
const NotFoundPage = () => (
  <>
    <NextSeo
        title="404" 
        description="page not found"/>
    <Container textAlign="center">
        <Heading fontSize={[25, 30]} mb={[2, 5]} pt={"70px"}>NOT FOUND</Heading>
        <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Container>
  </>
)

export default NotFoundPage