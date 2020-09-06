import { Box, Image, Text, Flex, Link, Button } from "@chakra-ui/core";
interface CardProjectProps {
  cover: string;
  title: string;
  url: string;
}
export const CardProject = (project: CardProjectProps) => {
  return (
    <Box w={{xs: '100%', md: '30%'}} borderWidth="1px" borderRadius="10px">
      <Image src={project.cover} />
      <Text textAlign="center" fontWeight="600" fontSize={{xs: '13px', sm: '16px'}}>
        {project.title}
      </Text>
      <Flex justifyContent="center">
        <Link href={project.url} isExternal>
          <Button
            mt="10px"
            borderRadius="10px 10px 0px 0px"
            size="sm"
            _focus={{ outline: "none" }}
          >
            souce code
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
