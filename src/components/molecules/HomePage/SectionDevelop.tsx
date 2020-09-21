import { Text, Box, Flex, useColorModeValue } from "@chakra-ui/core";
import { skill } from "data/skills";

export const SectionDevelop = () => {
  const bgColor = useColorModeValue("#ffffff", "#111216");
  return (
    <>
      <Text fontSize="20px" fontWeight="700" mb={5} mt={10}>
        Keterampilan
      </Text>
      <Flex
        flexDirection={["column", "row"]}
        mt={["1rem", "3rem"]}
        css={{
          ".skill:nth-of-type(2)": {
            "@media only screen and (max-width: 600px)": { marginTop: "1em" },
          },
          ".skill:nth-of-type(3)": {
            "@media only screen and (max-width: 600px)": { marginTop: "1em" },
          },
        }}
      >
        {skill.map((s, index) => (
          <Flex
            borderWidth="1px"
            minH="10rem"
            w={["100%", "15rem"]}
            flexDirection="column"
            borderRadius="6px"
            mr="1em"
            p="1em"
            key={index}
            className="skill"
            css={{
              ":hover": {
                ".icon": {
                  color: s.color,
                  background: s.background,
                  "@media only screen and (max-width: 600px)": {
                    fontSize: "15px",
                  },
                  "@media only screen and (min-width: 600px)": {
                    fontSize: "20px",
                  },
                },
              },
            }}
          >
            <Flex
              alignItems="center"
              justifyContent={["start", "center"]}
              flexDirection={["row", "column"]}
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                bg={bgColor}
                borderWidth="1px"
                borderRadius="50%"
                boxSize={["2.5em", "4rem"]}
                mr={["0.5em", "0"]}
                mt={["0", "-3rem"]}
                className="icon"
                transition="0.3s ease all"
              >
                {s.icon}
              </Flex>
              <Text fontWeight="500" mt="0.5em" fontSize={{ xs: 16, lg: 20 }}>
                {s.title}
              </Text>
            </Flex>
            <Box mt="1em" fontSize={{ xs: 13, lg: 15 }}>
              {s.item.map((item, index) => (
                <Text key={index}>
                  <Text as="span" userSelect="none" mr="0.2em">
                    ⤷
                  </Text>
                  {item}
                </Text>
              ))}
            </Box>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
