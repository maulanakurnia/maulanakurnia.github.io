import React from "react"
import SEO from "components/lib/seo"
import PageHeader from "components/pageHeader"
import {Text,Heading, Container} from '@chakra-ui/core'
const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" description="Page not found" />
    <Container textAlign="center">
        <Heading fontSize={[25, 30]} mb={[2, 5]} pt={"70px"}>NOT FOUND</Heading>
        <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Container>
  </>
)

export default NotFoundPage