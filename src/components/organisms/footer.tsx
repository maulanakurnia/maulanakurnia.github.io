
import { Box, Link, Container, Flex, Text } from "@chakra-ui/core";
import { footerSocial } from "data/footerSocial";
import { IconLink } from "molecules/IconLink";

export const Footer = () => (
  <Container minWidth={{ md: "md", lg: "xl" }} pb={5}>
    <Box
      as="footer"
      h="50px"
      position="relative"
      mt="2em"
      pb="3em"
      textAlign="center"
    >
      <Text fontSize="sm">
        This website is open source,<br></br> build with{" "}
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
          <IconLink
            href={data.url}
            icon={data.icon}
            key={data.url}
          />
        ))}
      </Flex>
    </Box>
  </Container>
);

export default Footer;
