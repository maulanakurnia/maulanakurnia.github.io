import React from "react";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { Project } from "molecules/CardProject";
import { projects } from "data/index";
export const SectionProject = () => {
  return (
    <>
      <Text fontSize="20px" fontWeight="700" mb="1.2em" mt={10}>
        Projek
      </Text>
      {projects
        .map(
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
            <Project
              description={description}
              isDemo={isDemo}
              key={index}
              langColor={langColor}
              language={language}
              source={source}
              title={title}
              {...rest}
            />
          )
        )
        .slice(0, 4)}
      <Flex justifyContent="center" mt="20px">
        <Link href="project/">
          <Button
            _focus={{ outline: "none" }}
            color={useColorModeValue("#363537", "#929497")}
            justifyItems="center"
            size="sm"
            variant="outline"
          >
            Lihat semua projek
          </Button>
        </Link>
      </Flex>
    </>
  );
};
