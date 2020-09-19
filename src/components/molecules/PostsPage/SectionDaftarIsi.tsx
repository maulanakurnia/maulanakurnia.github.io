import { Box, Text, BoxProps } from "@chakra-ui/core";
export const SectionDaftarIsi: React.FC<BoxProps> = ({ ...props }) => (
  <Box minW="100%" mb="1em" {...props}>
    <Text as="span" fontSize={["20px", "15px"]} fontWeight="700" pb="0.5em">
      Daftar Isi
    </Text>
    <Text mt="0.4em">SOON</Text>
  </Box>
);
