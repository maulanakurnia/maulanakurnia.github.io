import { Box, Flex, Heading, Link, Text } from "@chakra-ui/core";
import { ProjectProps } from "types/projecPropst";

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  language,
  langColor,
  source,
  isDemo,
  demo,
}) => {
  return (
    <Box
      maxW={["100%", "305px"]}
      minW="351px"
      borderWidth="1px"
      borderRadius="6px"
      display="inline-block"
      mr="1em"
      mb="1em"
      p={5}
    >
      <Heading
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        fontWeight="700"
        fontSize={{ xs: 16, lg: 20 }}
        mb="0.5em"
      >
        {title}
      </Heading>
      <Box position="relative">
        <Text
          position="relative"
          fontSize="14px"
          overflow="hidden"
          textOverflow="ellipsis"
          maxH="3em"
          minH="3em"
        >
          {description}
        </Text>
      </Box>
      <Flex
        maxW="100%"
        minH="0"
        pt="1em"
        fontSize="14px"
        justifyContent="space-between"
      >
        <Flex>
          <Box
            as="span"
            position="relative"
            my="auto"
            ml="5px"
            mr="0.5em"
            display="inline-block"
            w="12px"
            h="12px"
            borderRadius="50%"
            bg={langColor}
          />
          <Text fontWeight="600" fontSize="12px">
            {language}
          </Text>
        </Flex>
        <Flex>
          <Link
            mr="1em"
            href={source}
            isExternal
            _hover={{ color: "#2e7ad1" }}
            _focus={{ outline: "none" }}
          >
            source code
          </Link>
          {isDemo && (
            <Link
              href={demo}
              isExternal
              _hover={{ color: "#2e7ad1" }}
              _focus={{ outline: "none" }}
            >
              Demo
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
