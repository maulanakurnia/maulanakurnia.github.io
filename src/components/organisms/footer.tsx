import { Box, Link, Container, Flex, Text } from "@chakra-ui/react";
import { footerSocial } from "data/footerSocial";
import { IconLink } from "molecules/IconLink";

export const Footer = () => (
  <Container minWidth={{ md: "md", lg: "xl" }} pb={5}>
    <Box
      as="footer"
      h="50px"
      mt="2em"
      pb="3em"
      position="relative"
      textAlign="center"
    >
      <Text fontSize="sm">
        <Link
          color="#2e7ad1"
          href="https://github.com/maulanakurnia/personalwebsite"
          isExternal
        >
          This website
        </Link>{" "}
        is open source,<br></br> build with{" "}
        <Link color="#2e7ad1" href="https://nextjs.org/" isExternal>
          Next.js
        </Link>{" "}
        and{" "}
        <Link color="#2e7ad1" href="https://chakra-ui.com/" isExternal>
          ChakraUI
        </Link>
      </Text>
      <Flex justifyContent={["center", ""]} mb="10px" mt={["10px", "0"]}>
        {footerSocial.map((data) => (
          <IconLink href={data.url} icon={data.icon} key={data.url} />
        ))}
      </Flex>
    </Box>
  </Container>
);

export default Footer;
