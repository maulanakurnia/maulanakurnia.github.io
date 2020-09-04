import {
  Box,
  Button,
  Stack,
  Flex,
  Text,
  Heading,
  Container,
} from "@chakra-ui/core";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { Fragment } from "react";
import { css } from "@emotion/core";
import { useContent } from "../../../context/contentContext";

import { CardGame } from "molecules/CardGame";
import { WavingHand } from "atoms/wavingHand";

export default function Home() {
  const { myGame } = useContent();
  return (
    <Fragment>
      <Box
        backgroundAttachment="fixed"
        backgroundPosition="center"
        backgroundSize="cover"
        borderBottomWidth="1px"
        css={css`
          background-image: url(images/bg-min.jpg);
        `}
        display="block"
        h={"calc(30vh)"}
        minHeight={300}
        w="100%"
      />
      <Flex justifyContent="center">
        <Box
          backgroundSize="200px"
          borderRadius="50%"
          borderWidth="1px"
          css={css`
            background-image: url(images/profile-min.jpg);
          `}
          display="flex"
          h={200}
          mt="-100px"
          w={200}
        />
      </Flex>
      <Flex direction="column" p={3} textAlign="center">
        <Heading as="h1" fontSize="20px">
          Maulana Kurnia
        </Heading>
        <Text as="span" fontSize="13px" fontStyle="italic">
          IT Student at UPN "Veteran" Yogyakarta
        </Text>
      </Flex>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button
          _hover={{ bg: "#004ba0", color: 'white' }}
            variant="outline"
          borderRadius={3}
        leftIcon={<FaTwitter />}
          onClick={() =>
            window.open("https://www.twitter.com/maulanaakurniaa", "_blank")
          }
          size="sm"
        >
          twitter
        </Button>
        <Button
          _hover={{ bg: "gray.300", color: 'black'}}
          variant="outline"
          borderRadius={3}
          leftIcon={<FaInstagram />}
          onClick={() =>
            window.open("https://www.instagram.com/maulanaakurniaa", "_blank")
          }
          size="sm"
        >
          Instagram
        </Button>
        <Button
          _hover={{ bg: "#24292e", color: 'white'}}
          variant="outline"
          borderRadius={3}
          leftIcon={<FaGithub />}
          onClick={() =>
            window.open("https://www.github.com/maulanakurnia", "_blank")
          }
          size="sm"
        >
          Github
        </Button>
      </Stack>

      <Container maxW="xl" textAlign="center">
        <Container>
          <Box
            fontSize="30px"
            fontWeight="600"
            mt={10}
            transform="skewY(-6deg)"
            display="flex"
            justifyContent="center"
          >
            <WavingHand /> Hai
          </Box>
          <Text mt={5}>
            Selamat datang di website pribadi saya, disini saya membagikan
            beberapa source code dan terkadang menulis beberapa tulisan.
          </Text>
        </Container>
        <Text fontSize="30px" fontWeight="600" mt={10}>
          Mainan Saya
        </Text>
        <Box m="20px">
          {myGame.map(({ color, title, icon, ...rest }) => (
            <CardGame
              aria-label={title}
              color={color}
              icon={icon}
              key={title}
              {...rest}
            />
          ))}
        </Box>
        <Text fontSize="30px" fontWeight="600" mt={10}>
          Blog
        </Text>
        <Text>COMING SOON</Text>
        <Text fontSize="30px" fontWeight="600" mt={10}>
          Projek
        </Text>
        <Text>COMING SOON</Text>
      </Container>
    </Fragment>
  );
}
