import { Fragment, useMemo, useState } from "react";
import PageHeader from "atoms/pageHeader";
import {
  Box,
  useColorModeValue,
  Container,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Project as CardProject } from "molecules/CardProject";
import { projects } from "data/index";
import { FiSearch } from "react-icons/fi";

export default function Project() {
  const bg = useColorModeValue("#dadce0", "rgb(39, 41, 46)");
  const [search, setSearch] = useState("");
  const filteredPosts = useMemo(() => {
    let p = projects;
    if (search.length > 0) {
      p = p.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    return p;
  }, [search]);
  const Border = useColorModeValue("#dadce0", "rgb(39, 41, 46)");
  const active = useColorModeValue("gray.600", "gray.400");
  const notActive = useColorModeValue("gray.400", "gray.600");
  return (
    <Fragment>
      <NextSeo
        description="I write about TypeScript, Node.js, React, security and privacy."
        openGraph={{
          title: "Project by Maulana Kurnia",
        }}
        title="Project | mufradmabni"
      />
      <Container maxW="lg">
        <PageHeader title="Project" />
        <InputGroup mb={2}>
          <InputLeftElement
            children={<FiSearch />}
            color={search.length > 0 ? active : notActive}
            w="3rem"
            zIndex={99}
          />
          <Input
            bg="transparent"
            borderColor={Border}
            onChange={(e: any) => setSearch(e.target.value)}
            placeholder="Cari Projek"
            value={search}
          />
          {search.length >= 1 && (
            <InputRightElement
              children={
                <CloseButton
                  onClick={() => setSearch("")}
                  rounded="full"
                  size="sm"
                />
              }
            />
          )}
        </InputGroup>
        <Box borderColor={bg} borderWidth="1px" borderRadius={6} p={5} w="full">
          {filteredPosts.map(
            (
              {
                title,
                source,
                description,
                langColor,
                isDemo,
                language,
                ...rest
              },
              index
            ) => (
              <CardProject
                description={description}
                isDemo={isDemo}
                key={index}
                langColor={langColor}
                language={language}
                source={source}
                title={title}
                minW="full"
                {...rest}
              />
            )
          )}
          {filteredPosts.length === 0 && (
            <Text fontSize="sm" my={12} textAlign="center">
              Projek tidak ditemukan
            </Text>
          )}
        </Box>
      </Container>
    </Fragment>
  );
}
