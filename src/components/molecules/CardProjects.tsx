import { Box, Image, Text, Flex, Link, Button } from "@chakra-ui/core";
interface CardProjectProps {
  cover: string;
  title: string;
  url: string;
}
export const CardProject = (project: CardProjectProps) => {
  return (
    <Box borderRadius="10px" borderWidth="1px" w={{ xs: "100%", md: "30%" }}>
      <Image src={project.cover} />
      <Text
        fontSize={{ xs: "13px", sm: "16px" }}
        fontWeight="600"
        textAlign="center"
      >
        {project.title}
      </Text>
      <Flex justifyContent="center">
        <Link href={project.url} isExternal>
          <Button
            _focus={{ outline: "none" }}
            borderRadius="10px 10px 0px 0px"
            mt="10px"
            size="sm"
          >
            souce code
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
