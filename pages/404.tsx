import React from "react";
import { Text, Heading, Container, useColorModeValue } from "@chakra-ui/core";
import { NextSeo } from "next-seo";
export default function NotFoundPage() {
    return(
        <>
            <NextSeo
            description="page not found"
            noindex={true}
            title="404"
            titleTemplate="%s | mufradmabni"
            />
            <Container
            color={useColorModeValue("#c40707", "#802b2b")}
            left="35%"
            position="absolute"
            textAlign="center"
            top="30%"
            >
            <Heading fontSize={[25, 30]} mb={[2, 5]} pt={"70px"}>
                404 NOT FOUND
            </Heading>
            <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
            </Container>
        </>
    )
};