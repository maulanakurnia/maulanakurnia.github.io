import { Container, Box, Text } from "@chakra-ui/core";
import { WavingHand } from "atoms/wavingHand";

export const SectionWelcome = () => (
  <Container>
    <Box
      display="flex"
      fontSize="30px"
      fontWeight="600"
      justifyContent="center"
      mt={10}
      transform="skewY(-6deg)"
    >
      <WavingHand /> Hai
    </Box>
    <Text mt={5}>
      Selamat datang di website pribadi saya, disini saya membagikan beberapa
      source code dan terkadang menulis beberapa tulisan.
    </Text>
  </Container>
);
