import {Container, Box, Text} from '@chakra-ui/core'
import { WavingHand } from 'atoms/wavingHand'

export const SectionWelcome = () => (
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
      Selamat datang di website pribadi saya, disini saya membagikan beberapa
      source code dan terkadang menulis beberapa tulisan.
    </Text>
  </Container>
);
