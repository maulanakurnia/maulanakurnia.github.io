import React from "react";
import { Text } from "@chakra-ui/core";
import { Project } from "molecules/CardProjectLite";
import { useContent } from "context/contentContext";
export const SectionProject = () => {
  const { myProject } = useContent();
  return (
    <>
      <Text fontSize="20px" fontWeight="700" mt={10} mb="1.2em">
        Projek
      </Text>
      {myProject.map(({ title, source, description, langColor, isDemo, language, ...rest }, index) => (
        <Project
          key={index}
          title={title}
          description={description}
          language={language}
          langColor={langColor}
          source={source}
          isDemo={isDemo}
          {...rest}
        />
      ))}
    </>
  );
};
