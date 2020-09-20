import { Box, useColorModeValue } from "@chakra-ui/core";

export const Badge = ({ ...props }) => {
  return (
    <Box
      bg={useColorModeValue("#ebf8ff", "#1A202C")}
      borderRadius="sm"
      color={useColorModeValue("#1A365D", "#63b3ed")}
      display="inline-block"
      fontSize="xs"
      fontWeight="500"
      px={1}
      rounded="md"
      whiteSpace="nowrap"
      {...props}
    />
  );
};
