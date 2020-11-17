import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ProjectProps } from "types/projecPropst";

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  language,
  langColor,
  source,
  isDemo,
  demo,
  ...rest
}) => {
  const bg = useColorModeValue("#dadce0", "rgb(39, 41, 46)");
  return (
    <Box
      borderRadius="6px"
      display="inline-block"
      maxW={["100%", "305px"]}
      mb="1em"
      minW={["100%", "351px"]}
      mr={["0", "1em"]}
      p={5}
      borderColor={bg}
      borderWidth="1px"
      {...rest}
    >
      <Heading
        fontSize={{ xs: 16, lg: 20 }}
        fontWeight="700"
        mb="0.5em"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {title}
      </Heading>
      <Box position="relative">
        <Text
          fontSize="14px"
          maxH="3em"
          minH="3em"
          overflow="hidden"
          position="relative"
          textOverflow="ellipsis"
        >
          {description}
        </Text>
      </Box>
      <Flex
        fontSize="14px"
        justifyContent="space-between"
        maxW="100%"
        minH="0"
        pt="1em"
      >
        <Flex>
          <Box
            as="span"
            bg={langColor}
            borderRadius="50%"
            display="inline-block"
            h="12px"
            ml="5px"
            mr="0.5em"
            my="auto"
            position="relative"
            w="12px"
          />
          <Text fontSize="12px" fontWeight="600">
            {language}
          </Text>
        </Flex>
        <Flex>
          <Link
            _focus={{ outline: "none" }}
            _hover={{ color: "#2e7ad1" }}
            href={source}
            isExternal
            mr="1em"
          >
            source code
          </Link>
          {isDemo && (
            <Link
              _focus={{ outline: "none" }}
              _hover={{ color: "#2e7ad1" }}
              href={demo}
              isExternal
            >
              Demo
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
