import { Box, useColorModeValue } from "@chakra-ui/core";

export const Badge = ({...props}) => {
  return (
    <Box
      display="inline-block"
      px={1}
      fontSize="xs"
      fontWeight="500"
      rounded="md"
      borderRadius="sm"
      whiteSpace="nowrap"
      color={useColorModeValue("#1A365D","#63b3ed")}
      bg={useColorModeValue("#ebf8ff","#1A202C")}
      {...props}
    />
  );
};
